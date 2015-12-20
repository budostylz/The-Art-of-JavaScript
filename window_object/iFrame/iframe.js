
var frame = document.getElementById('theFrame');

var frameWindow = frame.contentWindow || frame.contentDocument;

console.log(frameWindow);

//Access frameWindow.property and frameWindow.function();