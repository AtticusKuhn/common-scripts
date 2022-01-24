console.log("trusted_events.js of https://common-scripts.atticuskuhn.repl.co ")

/*
    This script blocks all events that are untrusted,
    making it harder for people to bot your site.
*/
function block(event){
    //console.log(event)
    if(!event.isTrusted){
        event.preventDefault()
    }
}

for(var key in document){
    if(key.search('on') === 0) {
       document.addEventListener(key.slice(2), block)
    }
}