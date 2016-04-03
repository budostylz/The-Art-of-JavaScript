/* events.js */

window.onload = function(){
    var p = document.getElementById("puck");
    var xPos = 0, yPos = 0; speed = 1;
    var width = document.getElementById("ice").clientWidth;
    var height = document.getElementById("ice").clientHeight;
    var pWidth = document.getElementById("puck").clientWidth;
    var pHeight = document.getElementById("puck").clientHeight;
    var out = document.getElementById("output");

    // let's keep track of our paddle size and position
    var pdl = document.getElementById("paddle");
    var pdlTop = pdl.offsetTop;
    var pdlLeft = 960; //pdl.offsetLeft;
    var pdlHeight = pdl.clientHeight;

    var dx=speed, dy=speed;

    function movePuck(){

        //calculate the new X position by adding  the X increment
        xPos = xPos + dx;

        //if the new position will impact a wall, reverse direction
        if (xPos >= width-pWidth || xPos <= 0) {
            dx = -dx;
        }
        // added collision with the paddle as a reason to reverse direction horizontally
        if (yPos > pdlTop && yPos+pHeight<pdlTop+pdlHeight && (xPos>= pdlLeft - pWidth)) {
            dx = -dx;
        }

       //calculate the new Y position by adding the Y increment
        yPos = yPos + dy;
        //if the new position will impact a wall, reverse direction
        if (yPos >= height-pHeight || yPos <= 0) {
            dy = -dy;
        }

        //set the new x and y position on the puck
        p.style.left = xPos+"px";
        p.style.top = yPos+"px";

        //call this again in 15ms
        setTimeout(movePuck, 15);
    }

    document.addEventListener("click", hitMe, false);
    function hitMe(evt) {
        if (evt.target.id=="puck") {
            out.innerHTML = "You Got Me!";
        }
        if (evt.target.id=="ice") {
            out.innerHTML = "Missed!";
        }
    }

    document.addEventListener("keydown", movePaddle, false);
    function movePaddle(evt) {
        if (evt.which == 38 || evt.keyCode == 38) {
            //moveup
            if (pdlTop >=2 ){
                pdlTop -= 10;
                pdl.style.top = pdlTop + "px";
            }

        }else if (evt.which ==  40 || evt.keyCode == 40) {
            if (pdlTop + pdlHeight <=598){
                pdlTop += 10;
                pdl.style.top = pdlTop + "px";
            }
        }

    }


    movePuck();
}