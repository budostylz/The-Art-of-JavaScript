
function willChange(x){

	console.log('In the function, x.num = ' + x.num + '\n');
	x.num = 2;
	console.log('After the assignment x.num = ' + x.num + '\n');

	return true;


}

var y = {num: 1};

console.log('Pass By Reference \n' );
console.log('Outside of the function, y.num = ' + y.num + '\n');

willChange(y);

console.log('Outside of the function, y.num = ' + y.num + '\n');




window.onload = willChange;