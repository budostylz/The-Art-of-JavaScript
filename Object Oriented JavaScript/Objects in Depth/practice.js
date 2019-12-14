/* constructor functions*/

function SoftwareDeveloper(name){
  this.favoriteLanguage = 'JavaScript';
  this.name = name;
}

function Hero(name, role){
  this.name = name;
  this.role = role;

  this.introduce = function () {
    console.log( `My name is ${this.name} and I am a ${this.role}.` );
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

/* Setting Our Own `this` */
