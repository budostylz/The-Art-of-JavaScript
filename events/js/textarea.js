/* textarea.js */


window.onload = function(){
    "use strict";
    var editor = document.getElementById("editor");
    var viewer = document.getElementById("viewer");
    var counter = document.getElementById("count");

    document.addEventListener("keydown", handleEdit);
    editor.addEventListener("input", handleInput);

    function handleInput(evt){
        counter.innerHTML = evt.target.value.length;
    }


    function handleEdit(evt) {
        if (evt.ctrlKey && evt.keyCode == "E".charCodeAt(0)) {
            viewer.style.display = "none";
            editor.value = viewer.innerHTML;
            editor.style.display = "block";
            editor.focus();
        }
        if (evt.ctrlKey && evt.keyCode == "S".charCodeAt(0)) {
            editor.style.display = "none";
            viewer.innerHTML = editor.value;
            viewer.style.display = "block";
        }
    }
}