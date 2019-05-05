function greet(name = 'Student', greeting = 'Welcome') {
    return `${greeting} ${name}!`;
  }
  
  console.log( greet() ); // Welcome Student!
  console.log( greet('James') ); // Welcome James!
  console.log( greet('Richard', 'Howdy') ); // Howdy Richard!