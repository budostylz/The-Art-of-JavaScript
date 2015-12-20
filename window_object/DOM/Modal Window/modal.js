function openModal(){
	'use strict'
	document.getElementById('closeModal').onclick = closeModal;
	document.getElementById('modal').style.display = 'inline-block';
	document.getElementById('openModal').onclick = null;
}

function closeModal(){
	'use strict'
	document.getElementById('openModal').onclick = openModal;
	document.getElementById('modal').style.display = 'none';
	document.getElementById('closeModal').onclick = null;
}

window.onload = function(){
	'use strict'
	document.getElementById('openModal').onclick = openModal;

}