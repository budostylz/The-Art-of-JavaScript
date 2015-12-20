
function willNotChange(x){

	console.log('In the function, x = ' + x + '\n');
	x=2;
	console.log('After the assignment x = ' + x + '\n');

	return true;


}



var y = 1;


console.log('Pass By Value \n')
console.log('Outside of the function, y = ' + y + '\n');

willNotChange(y);

console.log('Outside of the function, y = ' + y + '\n');

window.onload = willNotChange;