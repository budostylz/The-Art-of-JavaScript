var getTwo = function(){
	return 2;
}


console.log('A function value is assign to a variable: ' + getTwo() );

/*
	Functions as Argument Values

	var someFunction = function(){
	
	};

	someOtherFunction(someFunction);

	//shoert-hand

	someOtherFunction(function(){
		
	});

*/

function compareNumbers(x, y){

	return x - y;
}

var numbers = [ 1, 4, 3, 2, 100, 43, 0];

var sort_numbers = numbers.sort(compareNumbers);

console.log(sort_numbers);





