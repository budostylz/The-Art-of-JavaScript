/* 
  Constructor Functions 
  Setting Our Own `this` 
  Prototypal Inheritance
  Prototypal Inheritance: Subclasses

*/


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

function Dog(age, weight, name){
  this.age = age;
  this.weight = weight;
  this.name = name;
}

Dog.prototype.bark = function (){//Prototypal Inheritance
  console.log(`${this.name} says woof!`);
}

dog1 = new Dog(2, 60, 'Java');
dog2 = new Dog(4, 55, 'Jodi');
//dog1.bark();
//dog2.bark();
//console.log(dog1, dog2)

const myArray = [1, 2, 3];
myArray.join('');
//console.dir(myArray);

function Phone(){
  this.operatingSystem = 'Android';
}

Phone.prototype.screenSize = 6;

const myPhone = new Phone();
const own = myPhone.hasOwnProperty('operatingSystem');//returns true
const inherited = myPhone.hasOwnProperty('screenSize');//returns false
//console.log(own, inherited);

const rodent = {
  favoriteFood: 'cheese',
  hasTail: true
};

function Mouse() {
  this.favoriteFood = 'cheese';
}

Mouse.prototype = rodent;

const ralph = new Mouse();
const result = rodent.isPrototypeOf(ralph);//returns true
//console.log(result);

const myPrototype = Object.getPrototypeOf(ralph);//return prototype of ralph
//console.log(myPrototype);

function Longboard() {
  this.material = 'bamboo';
}

const board = new Longboard();//returns constructor
//console.log( board.constructor );
//console.log( rodent.constructor );

const bear = {
    claws: true,
    diet: 'carnivore'
};

function PolarBear(){

}

PolarBear.prototype = bear;

const snowball = new PolarBear();

snowball.color = 'white';
snowball.favoriteDrink = 'cola';

const mammal = {
  vertebrate: true,
  earBones: 3
};

const rabbit = Object.create(mammal);

function Animal (name) {// Animal Parent class
  this.name = name;
}

Animal.prototype.walk = function () {//set Animal walk function prototype
  console.log(`${this.name} walks!`);
}

function Cat (name) {//child class of Animal
  Animal.call(this, name);//instead of recreating a new name property for cat, use parent's class name property instead
  this.lives = 9;
}

Cat.prototype = Object.create(Animal.prototype);//create copy of Animal's prototype and set it to Cat prototype

Cat.prototype.constructor = Cat;//set Cat prototype, this way we have access to parent Animal's name property

Cat.prototype.meow = function () {//set Cat meow function
  console.log('Meow!');
}

const bambi = new Cat('Bambi');//create new instance of a cat name bambi

bambi.meow();
bambi.walk();
console.log( bambi.name );




/*
console.log(rabbit);
console.log( rabbit.__proto__ === mammal);
console.log(Object.getPrototypeOf(rabbit) === mammal);//recommended
console.log( rabbit.vertebrate );
console.log( rabbit.earBones);*/

/*
console.log(snowball);
console.log(snowball.claws, snowball.diet);
console.log(snowball.__proto__);
console.log(snowball.__proto__ === bear);
console.log(Object.getPrototypeOf(snowball))//recommended
*/

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


