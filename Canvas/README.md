## BLOWING UP HTML5 VIDEO AND MAPPING IT INTO 3D SPACE

http://craftymind.com/factory/html5video/CanvasVideo.html

http://www.craftymind.com/blowing-up-html5-video-and-mapping-it-into-3d-space/

## 21 Ridiculously Impressive HTML5 Canvas Experiments

http://code.tutsplus.com/articles/21-ridiculously-impressive-html5-canvas-experiments--net-14210

## CanvasRenderingContext2D

https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

## Canvas tutorial

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial

## HTML Canvas Reference

http://www.w3schools.com/tags/ref_canvas.asp

## HTML5 Canvas

http://www.w3schools.com/html/html5_canvas.asp

## CanvasRenderingContext2D

https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

## WebGLRenderingContext

https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext

## Getting started with WebGL

https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL

## CanvasRenderingContext2D.lineTo()

https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo

## Drawing shapes with canvas

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

## CanvasRenderingContext2D.drawImage()

https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage

## HTMLCanvasElement.toDataURL()

https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL

## CanvasRenderingContext2D.arc()

https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc

## Core HTML5 Canvas (Links to an external site.)

http://corehtml5canvas.com

## Fiddles

http://jsfiddle.net/o7n9or72/

http://jsfiddle.net/ydhhk3q4/



## CORS enabled image

In the JSFiddle example above—because the JSFiddle comes from one domain and my image comes from another (courses.dce.harvard.edu)—it was necessary to do two things to avoid the error message:

Set the crossorigin="anonymous" attribute on the IMG tag in my HTML, and
Set the HTTP header Access-Control-Allow-Origin: * on the server. This is the rule that tells the browser, "this image is OK to use; don't taint the canvas." This can be done with server configuration, or by using a small server-side program to fetch the image and set the header appropriately on the response.

## PhP for Server Configuration

    header('Access-Control-Allow-Origin: *');  
    header('Content-type: '.'image/jpeg');
    $pic='dogsatplay.jpg';
    header('Content-length: '.filesize($pic));
    $file = @ fopen($pic, 'rb');
    if ($file) {
        fpassthru($file);
        exit;

-Larry Bouthiller

## Examples

http://courses.dce.harvard.edu/~cscie3/examples/week14/canvas-video.html










