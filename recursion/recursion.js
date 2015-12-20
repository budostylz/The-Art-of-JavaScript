
function factorial(n){

	if(n <= 1)
		return 1;
	else
		return n * factorial(n - 1);
	
}

var recurse = factorial(5);


console.log(recurse);

