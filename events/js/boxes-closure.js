/* boxes-closure.js */


window.onload = function(){

    var doit = document.getElementById("doit");

    /* Clicking Do It will
     *  1) record the position of each fragment,
     *  2) attach a 'click' event handler to each fragment to return
     *      it to its original position, and
     *  3) 'jumble' the fragments
     *  */

    doit.onclick = function(){
        var j = document.getElementById("container");
        var divs = document.getElementsByClassName("imageDiv");

        //first record the positions in obj
        for (var k=0;k<divs.length;k++ ) {
            var el = divs[k];
            var obj = {
                i: k,
                top : el.offsetTop,
                left : el.offsetLeft,
            };

            /* Now we attach an onclick handler to each element
             * We create a self-invoking function which
             * reads the current value of obj, and
             * creates a 'closure' (a persistent context for the
             * handler function), and then returns the handler
             * function itself. When this is done, el.onclick equals
             * the inner function we defined, and o gets kept around
             * since it's the context of the inner function.
             * */
            el.onclick = (function(evt){
                var o = obj;
                return function(evt){
                    evt.currentTarget.style.top = o.top;
                    evt.currentTarget.style.left = o.left;
                }
            })();
        }

         /*  Here we jumble the images. First we make the container div
          *  big enough to hold the spread-out images, then we loop thru and
          *  give each one new top and left style coordinates.
          *  */
        j.style.width = "100%";
        j.style.height = "760px";
        var imgW = 213, imgH = 160;
        for (var k=0;k<divs.length;k++ ) {
            var ele = divs[k];
            var xPos = parseInt(Math.random() * (j.clientWidth-imgW));
            var yPos = parseInt(Math.random() * (j.clientHeight-imgH));
            ele.style.top = yPos;
            ele.style.left = xPos;
            ele.style.position = "absolute";
        }
    }
}
