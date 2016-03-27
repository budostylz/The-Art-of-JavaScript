/* innerhtml.js */
var contentDiv = document.getElementById("content");
var firstDiv = document.getElementById("first");

alert("1"+firstDiv);


/*  Here we add an onclick property to the doit button that will append
 *  a second DIV to the contentDiv.
 */
document.getElementById("doit").onclick = function(){
   // Set the innerHTML of contentDiv
   contentDiv.innerHTML += "<div id='second'>This is the second DIV</div>";
   // We still see firstDiv output...
   alert("2"+firstDiv);
   // ...but if we change firstDiv...
   firstDiv.innerHTML = "I've changed this";
   //  ...the page does not change. This is becuase
   //      firstDiv refers to an HTMLElement object that is no longer on the page.
   //  When we set innerHTML on contentDiv, we rewrote the entire div. Normally,
   //   this would destroy any previous elements in the contentDiv, but since
   //   we still hve a reference to firstDiv, it's kept around. It's still
   //   an HTMLDivElement, but it's not attached to the DOM tree.
};
