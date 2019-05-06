//empty set
const games = new Set();
console.log(games);

//set
const games2 = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
console.log(games2);

//add remove element
const games3 = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);

games3.add('Banjo-Tooie');
games3.add('Age of Empires');
games3.delete('Super Mario Bros.');

console.log(games3);

//set size
const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
console.log(months.size);

//check if item exists
console.log(months.has('September'));

//retrieve all values
console.log(months.values());

//using iterator
const iterator = months.values();
console.log( iterator.next() );
console.log( iterator.next() );
console.log( iterator.next() );

//using for..of
const colors = new Set(['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'brown', 'black']);
for (const color of colors) {
  console.log(color);
}