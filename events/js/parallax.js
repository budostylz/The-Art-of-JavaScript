/* parallax.js */

window.onload = function(){


    var divs = document.getElementsByTagName("DIV");
    for (var i = 0; i < divs.length; ++i) {
        assign(divs[i]);
    }

    function assign(el) {
        if ( el.className == "background") {
            document.addEventListener("scroll", function(){
                var yPos = -(window.pageYOffset / 6);
                el.style.backgroundPosition = "50% " + yPos + "px";
            });
        }
    }
}