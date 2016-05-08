/* canvas-basics.js */

window.onload = function(){

    var canvas = document.getElementById("c1");
    var ctx = canvas.getContext('2d');

    var xInc = 10, yInc = 10;

    ctx.lineWidth = 0.5;
    ctx.strokeStyle = '#bbb';

    for (var i = yInc; i < ctx.canvas.height; i += yInc) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(ctx.canvas.width, i);
      ctx.stroke();
   }

   for (var i = xInc; i < ctx.canvas.width; i += xInc) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, ctx.canvas.height);
      ctx.stroke();
   }


}