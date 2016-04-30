/*  html-media.js  */

window.onload = function(){

    var vid = $('#dogs')[0];


    $('#playBtn').click(function(){
        vid.play();
    });
    $('#pauseBtn').click(function(){
        vid.pause();
    });
    $('#volUpBtn').click(function(){
       vid.volume+=0.1;
       $('#currentVolume').html(vid.volume.toFixed(2));
    });
    $('#volDnBtn').click(function(){
        vid.volume-=0.1;
        $('#currentVolume').html(vid.volume.toFixed(2));
    });

    $('.seekBtn').click(function(){

        vid.currentTime = this.getAttribute("data-sec");

    });

    $('.speedBtn').click(function(){
        if (this.id=="speed-normal") {
            vid.playbackRate = 1.0;
        } else if(this.id=="speed-plus") {
            vid.playbackRate += 0.2;
        }
        else if(this.id=="speed-minus") {
            vid.playbackRate -= 0.2;
        }
        $('#currentSpeed').html(vid.playbackRate.toFixed(2));
    });

    vid.addEventListener('timeupdate', function() {
       $('#currentTime').html(vid.currentTime.toFixed(0));
    }, false);


    vid.addEventListener('progress', function() {
        $('#buffered').html(vid.buffered.start(0) + ":" + vid.buffered.end(0));

        var w = vid.buffered.end(0) / vid.duration * $('#seekBar').width();
        $('#downloadedBar').width(w);
    });

}