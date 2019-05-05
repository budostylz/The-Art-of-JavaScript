// empty parameter list requires parentheses
const sayHi = () => console.log('Hello Udacity Student!');
sayHi();

// multiple parameters requires parentheses
const orderIceCream = (flavor, cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);
orderIceCream('chocolate', 'waffle');

//block body syntax
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map( name => {
    name = name.toUpperCase();
    return `${name} has ${name.length} characters in their name`;
  });
console.log(upperizedNames);