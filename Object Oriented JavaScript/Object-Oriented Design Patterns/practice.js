/* Mixins / Multiple Inheritance */

/*let target = {};
let source = { number: 7};
Object.assign(target, source);
console.log(target);*/

let target = { letter: 'a', number: 11 };
let source = { number: 7};
Object.assign(target, source);
//console.log(target);

const duck = {
  hasBill: true
  //feet: 'orange'
};

const beaver = {
  hasTail : true
};

const otter = {
  hasFur: true,
  feet: 'webbed'//this property will take precedence over duck feet base on order 
};

/*const platypus = Object.assign({}, duck, beaver, otter);

console.log(platypus);

console.log( platypus.constructor );
console.log( platypus.isPrototypeOf(duck) );
console.log( duck.isPrototypeOf(platypus) );
console.log( platypus.isPrototypeOf(beaver) );
console.log( beaver.isPrototypeOf(duck) );
console.log( platypus.isPrototypeOf(otter) );
console.log( otter.isPrototypeOf(platypus) );*/

const platypus = Object.assign(duck, beaver, otter);
/*console.log('platypus',platypus);
console.log('duck',duck);
console.log(platypus === duck);*/

/* Functional Mixins */

//Factory Functions

function Basketball(color){
  return {
    color: color,
    numDots: 35000
  };
}

const orangeBasketball = Basketball('orange');
const myBB = Basketball('blue and green');
const yourBB = Basketball('purple');
const bouncy = Basketball('neon pink');

/*console.log(orangeBasketball);
console.log(myBB);
console.log(yourBB);
console.log(bouncy);*/

function Radio(mode){
  let on = false;

  return{
    mode: mode,
    turnOn: function (){
      on = true;
    },
    isOn: function (){
      return on;
    }
  };
}

let fmRadio = Radio('fm');

/*console.log(fmRadio);
console.log(fmRadio.on);
console.log(fmRadio.isOn());
fmRadio.turnOn();
console.log(fmRadio.isOn());*/


function CoffeeMaker(object){
  let needsRefill = false;

  return Object.assign({}, object, {
    pourAll: function (){
      needsRefill = true;
    },
    isEmpty: function (){
      return needsRefill;
    }


  });
}

const mixedCoffeeMaker = CoffeeMaker({ style: 'percolator' });
//console.log(mixedCoffeeMaker);

function IceCreamFactory(obj){
  let isCold = true;

  return Object.assign({}, obj, {
    melt: function (){
      isCold = false;
    },
    isCold: function (){
      return isCold;
    }

  });
}

let iceCream = IceCreamFactory({});
//console.log(iceCream);

function ConeFactory(obj){
  let isDry = true;

  return Object.assign({}, obj, {
    soggy: function (){
      isDry = false;
    },
    isDry: function(){
      return isDry;
    }
  });
}

let iceCreamCone = IceCreamFactory(ConeFactory({}));//apply function composition to return both IceCreamFactory and ConeFactory properties via iceCreameCone
//console.log(iceCreamCone);

//Module Pattern

let person = (function (){
  let name = 'Veronika';//set private variables for class person here

  return{
    getName: function (){
      return name;
    },
    setName: function (myName){
      name = myName;
    }
  };
}());

console.log(person.name);
console.log(person.getName());
person.setName('Not Veronika');
console.log(person.getName());







