//modules
const express = require('express');
const reactViews = require('express-react-views');
const fs = require("fs")
const crypto = require("crypto")
var bodyParser = require('body-parser');

//initializations
const app = express();
const secret_key = process.env.SECRET_KEY
var encryptor = require('simple-encryptor')(secret_key);

//files
const methods = require("./methods")

app.use(bodyParser.json());
app.use('/public', express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());
//app.use('/script', express.static('public'))

let list_of_scripts = fs.readdirSync("scripts").filter(e=>e.endsWith(".js")).map(e=>e.substring(0,e.length-3))
console.log(list_of_scripts)

app.get('/scripts/:id', (req, res) => {
    if(list_of_scripts.indexOf(req.params.id ) > -1){
        res.sendFile(process.cwd() + `/scripts/${req.params.id}.js`);
    }else if(req.params.id  == "*"){
        res.header("Content-Type", 'text/plain');

        res.send(list_of_scripts.map(e=>fs.readFileSync(`scripts/${e}.js`).toString()).join("\n"))
    }else{
        res.send("console.log('cannnot find the file')")
    }
});
app.get('/api/bundles/:repl_name', (req, res) => {
    const bundles = JSON.parse(fs.readFileSync("data/bundles.json"))
    let response = ""
    for(file in bundles[req.params.repl_name]){
        response+= fs.readFileSync(`scripts/${file}.js`).toString()
    }
    res.header("Content-Type", 'text/plain');
    console.log(response)
    res.send(response)
})

app.get("/api/scripts",(req,res)=>{
    res.json(list_of_scripts)
})
app.get("/api/viewscript/:scriptname",(req,res)=>{
    let src = (list_of_scripts.indexOf(req.params.scriptname ) > -1) ?  fs.readFileSync(`scripts/${req.params.scriptname}.js`).toString() : "hmmm, can't find this"
    res.json({
        name: req.params.scriptname,
        src: src,
        description: src.substring(src.indexOf("/*"),src.lastIndexOf("*/"))
    })

})
app.get('/', (req, res) => {
	res.render('index');
})
app.get('/login', (req, res) => {
	res.render('login');
})
app.get('/scripts', (req, res) => {
	res.render('scripts');
})
app.get("/viewscript/:scriptname", function(req, res){
    let src = (list_of_scripts.indexOf(req.params.id ) > -1) ?  fs.readFileSync(`scripts/${req.params.scriptname}.js`).toString : "hmmm, can't find this"
    console.log(src)
    res.render("viewscript", 
    { 
        name: req.params.scriptname,
        src: src
    });
});
app.post("/viewscript", async (req,res) => {
    console.log(req.body)
    if(!req.body.session_id || !req.body.script || !req.body.name){
        res.json({
            success:false,
            msg:"missing parameter"
        })
        return
    }
    let sessions = JSON.parse(fs.readFileSync("data/sessions.json"))
    if(!methods.verify_session(req.body.name, req.body.session_id)){
        res.json({
            success:false,
            msg:"bad login"
        })
        return
    }
    if(!list_of_scripts.includes(req.body.script)){
        res.json({
            success:false,
            msg:"invalid script name"
        })
        return
    }
    let bundles = JSON.parse(fs.readFileSync("data/bundles.json"))
    if(!bundles[req.body.name]){
        bundles[req.body.name] = {}
    }
    if(!bundles[req.body.name][req.body.script]){
        bundles[req.body.name][req.body.script] = true
        res.json({
            success:true,
            msg:`${req.body.script} is now in your bundle`
        })
        fs.writeFileSync("data/bundles.json", JSON.stringify(bundles, null, 4))

    }else{
        bundles[req.body.name][req.body.script] = !bundles[req.body.name][req.body.script]
         res.json({
            success:true,
            msg:`your bundle has been altered`
        })
        fs.writeFileSync("data/bundles.json", JSON.stringify(bundles, null, 4))

    }
})

app.post("/login", async (req,res) => {
    if(req.headers["x-replit-user-name"]){
        let sessions = JSON.parse(fs.readFileSync("data/sessions.json"))
        const session_id = crypto.randomBytes(16).toString("hex")
        sessions[req.headers["x-replit-user-name"]] = encryptor.encrypt(session_id)
        fs.writeFileSync("data/sessions.json", JSON.stringify(sessions, null, 4))
        res.json({
            success:true,
            name:req.headers["x-replit-user-name"],
            session_id:session_id
        })
    }else{
        res.json({
            success:false,
            msg:"No Header"
        })
    }
})
app.listen(() => console.log(`server is up!`));