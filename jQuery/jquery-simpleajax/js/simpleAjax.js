/* simpleAjax.js */


//must run from HTTP server with these URLs
$(document).ready(function(){

 $('#doit').on("click", function(){
    $.ajax("http://courses.dce.harvard.edu/~cscie3/ajax.php" )  // 3bHtml.html // http://www.harvard.edu  //http://courses.dce.harvard.edu/~cscie3/ajax.php
        .done(function(data){
            $('#pageGoesHere').html(data);
        })
        .fail(function(data){
            $('#pageGoesHere').html("failed!");
        });
 });

});