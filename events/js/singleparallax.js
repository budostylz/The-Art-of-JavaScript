/* parallax.js */

window.onload = function(){

    var el = document.getElementById("container");

    var speed = 2;

    document.addEventListener("scroll", function(){

        var yPos = -(window.pageYOffset / speed);
        el.style.backgroundPosition = "50% " + yPos + "px";


    });

}
