function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        //output to console
            //console.log( name ); 
            //yield;

            //return as object
            yield name;//return as object
    }

    console.log('the function has ended');

}

//const generatorIterator = getEmployee();
//console.log( generatorIterator.next() );
//console.log( generatorIterator.next() );

/*
const generatorIterator = getEmployee();
let result = generatorIterator.next();
console.log( result.value)  // is "Amanda"

console.log( generatorIterator.next() ); // is "Diego"
console.log( generatorIterator.next() ); // is "Farrin"
*/

//send data back to generator
function* displayResponse() {
    const response = yield;
    console.log(`Your response is "${response}"!`);
}

const iterator = displayResponse();

iterator.next(); // starts running the generator function
iterator.next('Hello Udacity Student'); // send data into the generator
// the line above logs to the console: Your response is "Hello Udacity Student"!

