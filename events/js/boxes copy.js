/* boxes.js */

/* jumble.js */



window.onload = function(){

    var doit = document.getElementById("doit");

    doit.onclick = function(){
        var j = document.getElementById("container");
        var divs = document.getElementsByClassName("imageDiv");
        for (var i=0;i<divs.length;i++) {
            var el = divs[i];
            var obj = {
                num : i,
                top : el.offsetTop,
                left : el.offsetLeft,
            };

            el.onclick = (function(e){
                var o = obj;
                return function(e){
                   e.currentTarget.style.top = o.top +"px";
                   e.currentTarget.style.left = o.left +"px";
                };
            })();

        }
        j.style.width = "100%";
        j.style.height = "760px";
        for (var k=0;k<divs.length;k++ ) {
            var ele = divs[k];
            var xPos = parseInt(Math.random() * j.clientWidth);
            var yPos = parseInt(Math.random() * j.clientHeight);
            ele.style.top = yPos;
            ele.style.left = xPos;
            ele.style.position = "absolute";
        }
    }
}
