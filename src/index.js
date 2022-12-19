function switchDarkMode() {
    console.log("Je suis le DarkMode Index.js")
    var element = document.body;
    element.classList.toggle("dark");
}

function mobileCheck() {
    console.log("Hello MOBILE CHECK !\n\n",  window.ScreenOrientation, `\n${ window.screen.orientation.type}`,  "\n\n : ", navigator.userAgent);
    if(typeof window.ScreenOrientation !== "undefined"){
    console.log("OUI : ", typeof window.ScreenOrientation);};
    if(navigator.userAgent.indexOf('IEMobile') !== -1){
    console.log("IEMOBILE : ", navigator.userAgent.indexOf('IEMobile'));};
}