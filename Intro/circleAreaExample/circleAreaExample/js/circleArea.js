/* circleArea.js variables examples week 3 */


var doit = document.getElementById("doit");
var circle = document.getElementById("myCircle");
var areaDiv = document.getElementById("areaDiv");

doit.onclick = function(){
    var size = document.getElementById("size").value;

    //set the size of the circle
    circle.style.width = size+'px';
    circle.style.height = size+'px';

    //calculate the area of the circle
    var area = Math.PI * Math.pow((size/2), 2);

    areaDiv.innerHTML = parseInt(area);
}