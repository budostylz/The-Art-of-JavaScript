/* canvas-video.js */


/*
 *
 *      While the video is playing, every three seconds a new still image from the
 *      video will be added to the page as a png file.
 *
 *      This feature will only work if this file is served from a web
 *      server, due to CORS restrictions.
 */
window.onload = function(){

    var canvas = document.getElementById("c1");
    var ctx = canvas.getContext('2d');
    var video = document.getElementById("vid");

    $('#thumbnail').click(function(){
        // copy the image from the video element to the canvas
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // add an img element to the page, using a dataURL
        $('body').append("<IMG src="+canvas.toDataURL("image/jpeg")+">");

        // Save the image by using window.location.href, and a mimetype that the
        //  browser will download rather than display
        window.location.href=canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
    });

    // every three seconds, grab another image and add it to the page
    setInterval(function(){
        if (!vid.paused) {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            $('body').append("<IMG src="+canvas.toDataURL("image/jpeg")+">");
        }
    }, 3000);

}