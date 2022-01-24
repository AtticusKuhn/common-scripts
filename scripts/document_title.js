console.log("document_title.js of https://common-scripts.atticuskuhn.repl.co ")
/*
    This script automatically sets the title
    of the document for any repl
*/

window.addEventListener('DOMContentLoaded', (event) => {
    let title_string = location.href.split(".")[0].split("//")[1]
    if(location.href.split("/")[location.href.split("/").length-1] !== ""){
        title_string+= ` | ${location.href.split("/")[location.href.split("/").length-1]}`
    }
    title_string = title_string.split("_").join(" ").split("-").join(" ")
    document.title = title_string
})

