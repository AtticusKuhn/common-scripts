fetch("/api/scripts")
.then( response => response.json()  )
.then(json=>{
    console.log(json)
    json.forEach((e)=>{
        let script_holder = document.createElement("div")
        script_holder.classList.add("script_holder")
        script_holder.innerText = e.replace(/_/g," ")
        document.getElementById("scripts_container").appendChild(script_holder)
        script_holder.addEventListener("click",()=>{
            location.replace(`/viewscript/${e}`)
        })
    })
})
window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("search").addEventListener("keydown",()=>{
        let scripts = document.getElementsByClassName("script_holder")
        for(i=0;i<scripts.length;i++){
            scripts[i].style.display = "none"
            if(scripts[i].innerText.includes(document.getElementById("search").value)){
                scripts[i].style.display = "block"
            }
            if(scripts[i].innerText.levenstein(document.getElementById("search").value) < 3){
                scripts[i].style.display = "block"
            }
        }
    })
})