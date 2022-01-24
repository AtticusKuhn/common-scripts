fetch(`/api${location.pathname}`)
.then( response => response.json())
.then(json=>{
    console.log(json)
    document.getElementById("body_paragraph").innerHTML += `<p>${json.description.substring(2)}</p>`
    document.getElementById("copy_button").innerText = `<script src="https://common-scripts.atticuskuhn.repl.co/scripts/${json.name}"/>`
    document.getElementById("copy_button").addEventListener("click",()=>{
        navigator.clipboard.writeText(`<script src="https://common-scripts.atticuskuhn.repl.co/scripts/${json.name}"/>`)
    })
    if(localStorage.session_id){
        document.getElementById("add_to_list").style.display= "block"
        document.getElementById("add_to_list").addEventListener("click",()=>{
            fetch("/viewscript", {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    session_id:localStorage.session_id,
                    script:json.name,
                    name:localStorage.name
                })
            })
            .then( response => response.json()  )
            .then(json=>{
                alert(json.msg)
            })
        })
    }
})

