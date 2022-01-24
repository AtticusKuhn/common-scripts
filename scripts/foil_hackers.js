console.log("foil_hackers.js of https://common-scripts.atticuskuhn.repl.co ")

/*
    This script is designed to make it as hard as possible 
    for hackers to hack your site.
*/
//stop right clicks
$(document).bind("contextmenu",function(e) {
 e.preventDefault();
});

//cause a debugger to annoy people
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(3(){(3 a(){8{(3 b(2){7((\'\'+(2/2)).6!==1||2%5===0){(3(){}).9(\'4\')()}c{4}b(++2)})(0)}d(e){g(a,f)}})()})();',17,17,'||i|function|debugger|20|length|if|try|constructor|||else|catch||5000|setTimeout'.split('|'),0,{}))


//stop f12
$(document).keydown(function(e){
    if(e.which === 123){
       return false;
    }
});
function block(event){
    //console.log(event.type)
    if(!event.isTrusted || event.type =="pointerdown" ||event.type == "selectstart" || event.type == "transitionend"){
        event.preventDefault()
    }
}

document.onkeydown = function(e) {
    //stop f12
  if(event.keyCode == 123) {
     return false;
  }
  //stop ctrl+shift+i
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
    //stop ctrl+shift+c
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

for(var key in document){
    if(key.search('on') === 0) {
       document.addEventListener(key.slice(2), block)
    }
}