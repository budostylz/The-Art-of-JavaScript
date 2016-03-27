/* domtree.js */

    window.onload= function(){

        var outEl = document.getElementById("output");
        var str='';
        function traverse(el){

           str += el.nodeName + "<br>";

           for (var i = 0; i < el.children.length; i++){
              traverse(el.children[i]);
           }

         }

         traverse(document.documentElement);
         outEl.innerHTML = str;


    }