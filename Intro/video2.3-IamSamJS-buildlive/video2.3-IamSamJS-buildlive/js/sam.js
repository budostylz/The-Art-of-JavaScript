/* sam.js */

var nextbutton = document.getElementById("whatsnextbutton");

/* This is the onclick handler */
nextbutton.onclick=function(){
    var whatsNextElement = document.getElementById("whatsnext");
    whatsNextElement.style.display = "block";
}