console.log("auto_title.js of https://common-scripts.atticuskuhn.repl.co ")

/*this script automatically fills in the title of any html
element with the class "auto_title"
*/

window.addEventListener('DOMContentLoaded', (event) => {
    const titles= document.getElementsbyClassName("auto_title")
    const title_text = location.href.split("/")[location.href.split("/").length-1] =="" ? "Common Scripts" :location.href.split("/")[location.href.split("/").length-1].split("_").join(" ")
    for(i=0;i<titles.length;i++){
        titles[i].innerText +=title_text
    }
})
