console.log("fix_url.js of https://common-scripts.atticuskuhn.repl.co ")
/*
    if people visit your site on -- instead of .
    or http instead of https, this will automatically
    redirect them
*/

if (location.protocol !== 'https:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
if(location.href.substring(0,location.href.length-location.pathname.length).indexOf("--") > -1){
    location.replace(`${location.href.substring(0,location.href.length-location.pathname.length).split("--").join(".")}${location.pathname}`)
}