//forEach prototype
var f = document.forms[0];
var els = f.elements;

Array.prototype.forEach.call(els, function(e) {
	console.log("proto: " + e.name);

});
