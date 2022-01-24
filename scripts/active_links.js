console.log("active_links.js of https://common-scripts.atticuskuhn.repl.co ")

/*
    This script is designed to make links
    to the page you're already on inactive and
    change their color
*/
window.addEventListener('DOMContentLoaded', (event) => {
    let links = document.getElementsByTagName("a")
    for(i=0;i<links.length;i++){
        //console.log(links[i].href,location.href)
        if(links[i].href == location.href){
            links[i].style.backgroundColor = "#fafafa"
            links[i].style.pointerEvents = "none"
            
        }else{
            links[i].style.pointerEvents = "auto"
        }
    }
})
