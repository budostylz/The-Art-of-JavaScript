/* events.js */




window.onload = function(){
    var width = document.getElementById("ice").clientWidth;
    var height = document.getElementById("ice").clientHeight;
    var pWidth = document.getElementById("puck").clientWidth;
    var pHeight = document.getElementById("puck").clientHeight;
    var out = document.getElementById("output");

    var p = document.getElementById("puck");
    var xPos = 0, yPos = 0; speed = 1;

    //we'll deal with each direction separately
    var dx=speed, dy=speed;

    function movePuck(){

        //calculate the new X position by adding  the X increment
        xPos = xPos + dx;
        //if the new position will impact a wall, reverse direction
        if (xPos >= width-pWidth || xPos <= 0) {
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

        //call this again in 25ms
        setTimeout(movePuck, 25);

    }

    // notice this is at the document level - I get all events here
    document.addEventListener("click", hitMe);
    // then we do something
    function hitMe(evt) {
        if (evt.target == p) {
            p.innerHTML = "You Got Me! at " + "(" + evt.clientX + "," + evt.clientY + ")";
            out.innerHTML = "";
        }else {
            p.innerHTML= '';
            out.innerHTML = "Missed!";
        }
    }

    //call movePuck the first time to set this all in motion
    movePuck();
}