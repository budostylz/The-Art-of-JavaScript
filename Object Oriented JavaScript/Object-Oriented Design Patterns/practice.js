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
console.log('platypus',platypus);
console.log('duck',duck);
console.log(platypus === duck);

/* Functional Mixins */

//Factory Function

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

console.log(orangeBasketball);
console.log(myBB);
console.log(yourBB);
console.log(bouncy);





