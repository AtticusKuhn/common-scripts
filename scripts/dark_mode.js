console.log("auto_title.js of https://common-scripts.atticuskuhn.repl.co ")
/*
This script automatically toggles dark mode on a button with class "toggle_dark_mode"
and also introduces the function toggle_dark_mode()
*/
let dark_colors = ["#000","#020202","$121212"]
let light_colors = ["#f2f2f2","#f1f1f1","#ffffff"]
function brighness_of_hex(hex){
     // strip the leading # if it's there
    hex = hex.replace(/^\s*#|\s*$/g, '');

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if(hex.length == 3){
        hex = hex.replace(/(.)/g, '$1$1');
    }

    var r = parseInt(hex.substr(0, 2), 16),
        g = parseInt(hex.substr(2, 2), 16),
        b = parseInt(hex.substr(4, 2), 16);
        return 0.2126*r + 0.7152*g + 0.0722*b
}
function increase_brightness(r,g,b, percent){
    // strip the leading # if it's there
   /* hex = hex.replace(/^\s*#|\s*$/g, '');

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if(hex.length == 3){
        hex = hex.replace(/(.)/g, '$1$1');
    }*/

   /* var r = parseInt(hex.substr(0, 2), 16),
        g = parseInt(hex.substr(2, 2), 16),
        b = parseInt(hex.substr(4, 2), 16);*/

    return '#' +
       ((0|(1<<8) + r + (256 - r) * percent / 100).toString(16)).substr(1) +
       ((0|(1<<8) + g + (256 - g) * percent / 100).toString(16)).substr(1) +
       ((0|(1<<8) + b + (256 - b) * percent / 100).toString(16)).substr(1);
}
function toggle_dark_mode(){
   var all = document.getElementsByTagName("*");
   let dimmest_color = ["",0]
   let brightest_color = ["",256]
   for (var t=0; t<all.length; t++) {
        let the_color= window.getComputedStyle(all[t]).getPropertyValue('background-color') || all[i].style.backgroundColor
        let the_color_array = the_color.match(/\((.*)\)/).pop().split(",").map(Number)
        let brightness_of_color= 0.2126*the_color_array[0] + 0.7152*the_color_array[1] + 0.0722*the_color_array[2]
        if(brightness_of_color > brightest_color[1]){
            brightest_color[1] = brightness_of_color
        }
        if(brightness_of_color < dimmest_color[1]){
            dimmest_color[1] = brightness_of_color
        }
   }
    const brightness_range_multiplier = brightest_color[1]/dimmest_color[1]
   for (var i=0, max=all.length; i < max; i++) {
       console.log(all[i])
       console.log(all[i].style.backgroundColor || window.getComputedStyle( all[i].style.backgroundColor || all[i]).getPropertyValue('background-color') )  
       if(window.getComputedStyle(all[i]).getPropertyValue('background-color') !=="" ||all[i].style.backgroundColor !=="" ){
           //document.querySelector('div')).background
           let bcg= window.getComputedStyle(all[i]).getPropertyValue('background-color') !== "rgba(0, 0, 0, 0)" ?  window.getComputedStyle(all[i]).getPropertyValue('background-color') || all[i].style.backgroundColor : "rgb(1,1,1)"
           let color_array = bcg.match(/\((.*)\)/).pop().split(",").map(Number)
           console.log(color_array,bcg)
           let brightness = 0.2126*color_array[0] + 0.7152*color_array[1] + 0.0722*color_array[2]
           console.log(brightness)

            all[i].style.backgroundColor = increase_brightness(color_array[0],color_array[1],color_array[2], 0.4)

           /*if(brightness > 256*(2/3)){
                all[i].style.backgroundColor = dark_colors[0]
                all[i].style.color = light_colors[0]
           }else if(brightness > 256/3){
                all[i].style.backgroundColor = dark_colors[1]
                all[i].style.color = light_colors[1]
           }else{
               all[i].style.backgroundColor = dark_colors[2]
               all[i].style.color = light_colors[2]
           }*/
       }

        let body_color= window.getComputedStyle(document.body).getPropertyValue('background-color') || document.body.style.backgroundColor
        let color_array = body_color.match(/\((.*)\)/).pop().split(",").map(Number)
        console.log(color_array)
        let brightness = 0.2126*color_array[0] + 0.7152*color_array[1] + 0.0722*color_array[2]
        console.log(brightness)
        document.body.style.backgroundColor = increase_brightness(color_array[0],color_array[1],color_array[2], 0.4)
       /* if(brightness > 256*(2/3)){
            document.body.style.backgroundColor = dark_colors[0]
            document.body.style.color = light_colors[0]
        }else if(brightness > 256/3){
            document.body.style.backgroundColor = dark_colors[1]
            document.body.style.color = light_colors[1]
        }else{
            document.body.style.backgroundColor = dark_colors[2]
            document.body.style.color = light_colors[2]
        }*/
   }
}
window.addEventListener('DOMContentLoaded', (event) => {

toggle_dark_mode()
})