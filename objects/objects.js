//script source from 'Modern JavaScript: Develop and Design, Larry Ullman'

function objects(){
	//create me object
	var me = {
		name:'Shaun Lewis',
		age:'37',
		car: {
			make: 'Honda',
			model: 'Fir',
			year: 2008
		},
		favoriteColors: ['Black','Blue','Gray'],
		tired:true
	};//end object me

	console.log('access tired: ' + me.tired );

	//check if object property exists
	if(me.car)
		console.log(true);
	else
		console.log(false);

	//see if object exist using in operator
	if('favoriteColors' in me)
		console.log(true);
	else
		console.log(false);

	//chain me properties
	console.log(me.car.model + '\n' +
				me.favoriteColors[0]


	);

	//literal notation access
	console.log(me['car']['model'] + '\n' +
				me['favoriteColors'][2]

	);

	//allow dynamic access of me properties
	var prop = 'car';
	console.log(me[prop]);


	console.log('Access me Object using for in');
	for(var p in me)
		console.log(p + ': ' + me[p] + '\n');

	/*
		Immutable vs. Mutable
		Simple Types = Mutable(nonchangeable) string, int
		Complex Types = NonMutable(changeble) date, object

	*/

}//end objects()

window.onload = objects;