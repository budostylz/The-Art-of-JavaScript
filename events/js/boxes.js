/* boxes.js */

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


    //  1) Record the position of each fragment,
        for (var k=0;k<divs.length;k++ ) {
            var el = divs[k];

            var obj = {
                i: k,
                top : el.offsetTop,
                left : el.offsetLeft,
            };
    //  2) Attach a 'click' event handler to each fragment to return
    //      it to its original position, and
            el.onclick = (function(evt){
                    var o = obj;

                    return function(evt){
                        evt.currentTarget.style.top = o.top;
                        evt.currentTarget.style.left = o.left;
                    }
                })();

        }




    //  3) 'jumble' the fragments
    // let's set the size of our container box
            j.style.width = "100%";
            j.style.height = "760px";
            var imgW = 213, imgH = 160;

    // for each element,
        for (var k=0;k<divs.length;k++ ) {
                var ele = divs[k];

    // do random x and y position
                var xPos = parseInt(Math.random() * (j.clientWidth-imgW));
                var yPos = parseInt(Math.random() * (j.clientHeight-imgH));

    //set the styles
                ele.style.top = yPos;
                ele.style.left = xPos;
                ele.style.position = "absolute";
            }





    }
}
