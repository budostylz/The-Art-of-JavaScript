/* canvas-draw.js */


window.onload = function(){

    var canvas = document.getElementById("c1");
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle="red";
    ctx.lineWidth = 3;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    var isDrawing;

    $('canvas').mousedown(function(e) {
      //if mouse is down inside canvas, isDrawing gets true
      isDrawing = true;
      // set up drawing path
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
    });

    $('canvas').mousemove(function(e) {
       // if isDrawing (mouse is down), make lots of little, connected lines
       if (isDrawing) {
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
       }
    });

    $('canvas').mouseup(function() {
      //  mouseup means we're done drawing
       isDrawing = false;
    });

    // set line color
    $('.color').click(function(){
        ctx.strokeStyle = this.id;
    });

    // clear the canvas
    $('#clear').click(function(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
    });

    // save an image of the canvas as it looks right now
    // We chose PNG, an image format which supports transparency
    //  since the entirety of the canvas we *haven't* drawn on
    //  is [r,g,b]  [0,0,0]
    $('#capture').click(function(){
       $('body').append("<IMG src="+canvas.toDataURL("image/png")+">");
        window.location.href=canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    });
}
