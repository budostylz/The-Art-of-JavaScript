/* jwplayer.js */

$(document).ready(function(){

    (function( $ ){
        $.expr.filters.zip =  function(a) {
                var l = $(a).attr("title") || '';
                var b = l.match(/\.zip$|\.tar$|\.gz$/);
                return b;//return l.match(/[\.zip$|\.tar$|\.gz$]/);
        };
    }(jQuery));

    var l = $('.words');
    l.click(function(e){
        $this = $(this);
        var time = $this.attr("data-start");
        player.seek(time);
    });

    function findMatch(time){

        for(var i=0; i<l.length;i++){
            var $this = $(l[i]);
            console.log("time is "+parseFloat(time)+" and start is "+parseFloat($this.attr("data-start"))+" and end is "+(parseFloat($this.attr("data-start")) + parseFloat($this.attr("data-dur"))));
            if (parseFloat(time) >= parseFloat($this.attr("data-start")) && time <= parseFloat($this.attr("data-start")) + parseFloat($this.attr("data-dur"))){
                //highlight and done
                $this.addClass("hilite");
            }else{
                $this.removeClass("hilite");
            }
        }
    };


    var player = jwplayer("myElement").setup({
               file: "http://www.people.fas.harvard.edu/~lbouthillier/nasa-spinoffs.mp4",
               height: 360,
               width: 640,
               controls:true,
           });

    player.onReady(function(){
        player.onTime(function(evt){
               findMatch(evt.position);
        });
    });
});