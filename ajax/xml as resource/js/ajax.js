//this function returns an XMLHttpRequest object

function getXMLHttpRequestObject() {

    var ajax = null;

    // Most browsers:
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        ajax = new ActiveXObject('MSXML2.XMLHTTP.3.0');
    }

    //return the object
    return ajax;
}