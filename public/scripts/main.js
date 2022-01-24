onload = function(){
    document.getElementById("main_title").innerText = location.href.split("/")[location.href.split("/").length-1] =="" ? "Common Scripts" :location.href.split("/")[location.href.split("/").length-1].split("_").join(" ")
}