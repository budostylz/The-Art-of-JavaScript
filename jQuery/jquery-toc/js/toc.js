/* jquery-toc.js */

$(document).ready(function(){

       // 1) we'll traverse the DOM looking for H tags
       // 2) for each heading
          // 		- create an named anchor for each heading and put it in the right place
          // 		- create a link with the heading text, which links to the anchor
          //      - indent the link using the classes toc1, toc2, etc
          //      - add the new link to the #toc DIV on the page

     $('#doit').click(function(){

          /// foreach header tag
          $(":header").each(function(i, el){
               // create the named anchor and insert it
               var anchor = document.createElement("a");
               $(anchor).attr("name","location"+i);
               this.parentNode.insertBefore(anchor, this);

               // create the table of contents <p> and <a> elements for this tag
               var p = document.createElement("p");
               var a = document.createElement("a");

               // create the link text and href that point to the anchor
               $(a).text($(this).text());
               $(a).attr("href","#location"+i);
               p.appendChild(a);

               // add the style to indent
               var level = this.tagName.charAt(1);
               $(p).addClass("toc"+level);

               // add the new link to the TOC
               $("#toc").append(p);

          });
     });
});


/*
 * window.onload = function(){
"use strict";

    var btn = document.getElementById("doit").onclick = function(){

       // 1) we'll traverse the DOM looking for H tags

       function traverse(el, fn){
            fn(el);
            for (var i = 0; i < el.children.length; i++) {
                traverse(el.children[i], fn);
            }
        }

       // 2) we'll collect the H elements in an array so we can examine them later
       	var hList = new Array();
        function collectHeadings(e){
            if (e.nodeName.indexOf("H")==0) {
                hList.push(e);
            }
        }
        traverse(document.body, collectHeadings);
        console.log(hList.length);

       // 3) create a div to begin building our TOC
        var list = document.createElement("div");


       // 4) for each heading
       for (var i=0; i<hList.length; i++){

            // 		- create an named anchor for each heading and out it inthe right place
            var anchor = document.createElement("a");
            anchor.setAttribute("name","location"+i);
            hList[i].parentNode.insertBefore(anchor, hList[i]);

            // 		- create a link with the heading text, that links to the anchor
            // let's make a <p> for our entry link
            var p = document.createElement("p");
            // let's get the indent level of each one
            var tag = hList[i].nodeName;
            var level = tag.charAt(1);

            // 		- to boot, we'll apply a style to it for indenting
            // I happen to have some styles for this
            p.setAttribute("class","toc"+level);

            var a = document.createElement("a");
            a.setAttribute("href","#location"+i);
            var t = document.createTextNode(hList[i].textContent);

            a.appendChild(t);
            p.appendChild(a);

            // and the p to the list
            list.appendChild(p);
       }

        //	5) apply the new DIV to the page
    document.getElementById("toc").appendChild(list);

    }
}
*/