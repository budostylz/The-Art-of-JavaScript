/* jwexample.js */

$(document).ready(function(){

    var player = jwplayer("videoDiv").setup({
        file: "nasa-spinoffs.mp4",
        height: 270,
        width: 400,
        controls:true,
    });

// 1 Save position as we play
    player.onTime( function(evt){
        window.localStorage.setItem("lastPlay", parseInt(evt.position));
        showSlide(evt.position);
    });

// 2 onload, get position and make it availalbe in a button
    var last = window.localStorage.getItem("lastPlay");
    if (last) {
        $('#resumeBtn').html("Play from " + last);
    }

// 3 onclick, seek
    $('#resumeBtn').click(function(){
        player.seek(last);
    });


    // 1 have data listing slide URLs and times they appear
    var slides = {
        list: [ {time: 0, slide: 'img/Slide01.png'},
                {time: 5, slide: 'img/Slide02.png'},
                {time: 10, slide: 'img/Slide03.png'},
                {time: 15, slide: 'img/Slide04.png'},
                {time: 20, slide: 'img/Slide05.png'},
                {time: 25, slide: 'img/Slide06.png'},
                {time: 30, slide: 'img/Slide07.png'},
                {time: 35, slide: 'img/Slide08.png'},
                {time: 40, slide: 'img/Slide09.png'},
                {time: 45, slide: 'img/Slide10.png'},
                {time: 50, slide: 'img/Slide11.png'},
                {time: 55, slide: 'img/Slide12.png'}]
    }

    // 2 listen for the time slider position in the playback
    // in onTime()

    // 3 find the matching slide and load it in the page
    var currentSlide = -1;
   function showSlide(time) {
        for(var i=slides.list.length-1; i>=0; i--){
            if (slides.list[i].time <= time) {
                if (currentSlide != i) {
                    $('#slides').html("<img class='slideClass' src='"+slides.list[i].slide+"'>");
                    currentSlide = i;
                }
                return;
           }

        }
    }

});
