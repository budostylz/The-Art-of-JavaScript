/* constructor functions 
   Setting Our Own `this` */


function SoftwareDeveloper(name){
  this.favoriteLanguage = 'JavaScript';
  this.name = name;
}

function Hero(name, role){
  this.name = name;
  this.role = role;

  this.introduce = function () {
    //console.log( `My name is ${this.name} and I am a ${this.role}.` ); //non-polyfill for IE versions <= 11
  }
}

function Sandwich(bread, meat, vegetables){
  this.bread = bread;
  this.meat = meat;
  this.vegetables = vegetables;
}

function Developer(name){
  this.name = name;
}

function multiply(n1, n2){
  return n1 * n2;
}


const mockingbird = {
  title: 'To Kill a Mockingbird',
  describe: function () {
    console.log(`${this.title} is a classic novel`);
  }
};

const pride = {
  title: 'Pride and Prejudice'
}

const cat = {
  name: 'Bailey'
};

function sayHello(message) {
  console.log(`${message}, ${this.name}`);
}

const andrew = {
  name: 'Andrew'
}

function introduce(language){
  console.log(`I'm ${this.name} and my favorite programming language is ${language}.`);
}

function invokeTwice(cb){
  cb();
  cb();
}

const dog = {
  age: 5,
  growOneYear: function (){
    this.age += 1;
  }
};

const driver = {
  name:'Danica',
  displayName: function (){
    console.log(`Name: ${this.name}`);
  }
};

const car = {
  name: 'Fusion'
};


//bind()
//console.log( driver.displayName.bind(car) )
//can increments dog's age to 6
//dog.growOneYear();
//console.log( dog.age );

//cannot increment dog's age
//invokeTwice(dog.growOneYear);
//console.log( dog.age );

//can increment using closure(verbose)
/*invokeTwice(function () {
  dog.growOneYear();
});*/

//can increment dog's age using bind() (not verbose)
const myGrow = dog.growOneYear.bind(dog);
invokeTwice(myGrow);
//console.log( dog.age );


//introduce.apply(andrew, ['JavaScript']);
//introduce.call(andrew, 'JavaScript');




//apply()
//sayHello.apply(cat, ['Hello']);
//console.log( multiply.apply(window, [3, 4]) );
//console.log( mockingbird.describe.apply(pride) );//pride is borrowing mockingbird's describe function


//call()
//sayHello.call(cat, 'Nice to see you');
//console.log( multiply(3, 4) );
//console.log( multiply.call(window, 3, 4) );
//console.log( mockingbird.describe() );
//console.log( mockingbird.describe.call(pride) );//pride is borrowing mockingbird's describe function


let dev = new Developer('Veronika');
//console.log( typeof dev );
//console.log( dev instanceof Developer );

let mySandwich = new Sandwich('Wheat', [], ['lettuce', 'onions', 'tomatoes']);

let taylor = new Hero('Taylor', 'mother');
let riley = new Hero('Riley', 'coach');


let developer = new SoftwareDeveloper();
let engineer = new SoftwareDeveloper();
let programmer = new SoftwareDeveloper();
let instructor = new SoftwareDeveloper('Andrew');
let teacher = new SoftwareDeveloper('Richard');

//console.log( mySandwich );

/*console.log( developer );
console.log( engineer );
console.log( programmer );
console.log( instructor );
console.log( teacher );
console.log( taylor.name );
console.log( riley.role );
taylor.introduce();
riley.introduce();
*/


