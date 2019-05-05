//breaks with createGrid() : array destructuring
function createGrid([width = 5, height = 5]) {
    return `Generates a ${width} x ${height} grid`;
  }
  
  //console.log( createGrid([]) ); // Generates a 5 x 5 grid
  //console.log( createGrid([2]) ); // Generates a 2 x 5 grid
  //console.log( createGrid([2, 3]) ); // Generates a 2 x 3 grid
  //console.log( createGrid([undefined, 3]) ); // Generates a 5 x 3 grid
  //console.log(createGrid()); //errors out

  function createGrid2([width = 5, height = 5] = []) {
    return `Generates a ${width} x ${height} grid`;
  }

  //console.log(createGrid2());

  //object destructuring
  function createSundae({scoops = 1, toppings = ['Hot Fudge']}) {
    const scoopText = (scoops === 1) ? 'scoop' : 'scoops';
    return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
  }
  
  console.log(createSundae({})); // Your sundae has 1 scoop with Hot Fudge toppings.
  console.log(createSundae({scoops: 2})); // Your sundae has 2 scoops with Hot Fudge toppings.
  console.log( createSundae({scoops: 2, toppings: ['Sprinkles']})); // Your sundae has 2 scoops with Sprinkles toppings.
  console.log(createSundae({toppings: ['Cookie Dough']})); // Your sundae has 1 scoop with Cookie Dough toppings.
  //console.log(createSundae());//error out

  //create sundae with object default
  function createSundae2({scoops = 1, toppings = ['Hot Fudge']} = {}) {
    const scoopText = scoops === 1 ? 'scoop' : 'scoops';
    return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
}

  console.log(createSundae2());