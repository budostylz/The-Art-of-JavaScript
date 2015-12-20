function init(){

   'use strict';	//have JavaScript enforce strict syntax
	var today = new Date(); //current date
	var message = "Right now it is " + today.toLocaleDateString(); //set message
 	message += ' at ' + today.getHours() + ':' + today.getMinutes(); //concatenate message
 	var output = document.getElementById('output'); //get output

 	//output time to browser
 	if(output.textContent !== undefined)
 		output.textContent = message;
 	else
 		output.innerText = message;	
 	
}//end init()

//browser calls function when browser window window loads
window.onload = init;

