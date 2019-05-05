const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
//console.log(...books);

const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
//console.log(...primes);

/*
 * Instructions: Use the spread operator to combine the `fruits` and `vegetables` arrays into the `produce` array.
 */

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
const produce = [...fruits, ...vegetables];

console.log(produce);

