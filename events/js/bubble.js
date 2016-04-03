/* bubble.js */



window.onload = function(){

    /*document.getElementById("doit").addEventListener("click", doIt, false);
    document.getElementById("doit_too").addEventListener("click", doItToo, false);
    document.getElementById("biggest").addEventListener("click", biggest, false);
    document.getElementById("smaller").addEventListener("click", smaller, false);
*/

    document.getElementById("biggest").addEventListener("click", function(evt){
        if (evt.target.id == "doit") {
            alert("case 'doit'! " + evt.target.id + " and currentTarget is "+ evt.currentTarget.id);
        }else if (evt.target.id == "doit_too") {
            alert("case doit_too!");
       }
    }, false);

    document.getElementById("myLink").addEventListener("click", function(evt){
        if (!confirm("Go?")) {
            evt.preventDefault();
        }
    }, false);


    function doIt(evt) {
        alert("Event handler " + evt.currentTarget.id + "! User clicked on " + evt.target.id);
    }

    function doItToo(evt) {
        alert("Event handler " + evt.currentTarget.id + "! User clicked on " + evt.target.id);
    }

    function biggest(evt) {
        alert("Event handler " + evt.currentTarget.id + "! User clicked on " + evt.target.id);
    }

    function smaller(evt) {
        alert("Event handler " + evt.currentTarget.id + "! User clicked on " + evt.target.id);
        evt.stopPropagation();
    }

}