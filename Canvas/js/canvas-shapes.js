/* canvas-basics.js */

window.onload = function(){

    var canvas = document.getElementById("c1");
    var ctx = canvas.getContext('2d');
    drawGraphPaper();

    function Circle(x, y, r, color){
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = (function(){
            if (color === "random"){
                return 'rgba(' + (Math.random()*255).toFixed(0) + ', ' +
                    (Math.random()*255).toFixed(0) + ', ' +
                    (Math.random()*255).toFixed(0) + ', 1)'
            } else{
                return color;
            }
        })();

        this.vX = 4*Math.random();
        this.vY = 4*Math.random();
    }
    Circle.prototype.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    Circle.prototype.move = function(){
        if (this.x + this.vX + this.r > ctx.canvas.width || this.x + this.vX - this.r < 0){
            this.vX = -this.vX;
        }
        if (this.y + this.vY + this.r > ctx.canvas.height || this.y + this.vY - this.r  < 0) {
           this.vY= -this.vY;
        }
        this.x += this.vX;
        this.y += this.vY;
    }

    //var c = new Circle(100, 100, 50, 'rgba(255, 128, 0, 1)');
    //c.draw();
    var circles = [];
    for (var i=0; i < 100; ++i) {
        circles[i] = new Circle(100, 100, 50*Math.random(), "random");
    }

    function animateCircles(){
        circles.forEach(function(circle) {
            circle.move();
            circle.draw();
      });
    }
    setInterval(function(){
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        drawGraphPaper();
        animateCircles();
    }, 30);


    function drawGraphPaper(){
        /* HERE WE SET UP OUR 'GRAPH PAPER' */
        var xInc = 10, yInc = 10;
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = '#bbb';

        for (var i = xInc; i < ctx.canvas.width; i += xInc) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, ctx.canvas.height);
          ctx.stroke();
       }
       for (var i = yInc; i < ctx.canvas.height; i += yInc) {
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(ctx.canvas.width, i);
          ctx.stroke();
       }
    }
}
/* Inspired by an idea from David Geary: , http://corehtml5canvas.com/, http://corehtml5canvas.com/code-live/ch01/example-1.8/example.html */