
window.onload = function(){
	'use strict'

	if(typeof window.print === 'function'){

		var printButton = document.createElement('button'); //set print button element

		if(printButton != 'undefined'){//add text on button node
			printButton.innerHTML = 'Print';
		}else{
			printButton.innerText = 'Print';
		}

		console.log(printButton.innerText)

		printButton.onclick = function(){
			window.print();//print function
		};

		document.body.insertBefore(printButton, document.getElementById('main'));//add button to DOM
	}

}