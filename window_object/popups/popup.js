
function createPopup(){
	'use strict';

	var popup = window.open('popup.php', 'PopUp', 'height=100, width=100, top=100, left=100, location=no, resizable=yes, scrollbars=yes');

	console.log(popup);

	if( (popup !== null) && !popup.closed){
		popup.focus();
		return false;
	}

	
}

window.onload = function(){
	'use strict'
	document.getElementById('link').onclick = createPopup;
}