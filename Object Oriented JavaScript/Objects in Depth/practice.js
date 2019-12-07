/*intro*/

const mileTimes = [7.50, 6.25, 10.60, 8.88];

//console.log(mileTimes[mileTimes.length - 1])

const populations = {
    china: 1379000000,
    brazil: 207700000,
    india: 1324000000,
    unitedStates: 323100000
  };

//console.log(populations.brazil)

const greetings = {
    hello: {
      english: 'hi',
      french: 'bonjour',
      portuguese: 'oi'
    },
    goodbye: {
      english: 'bye',
      french: 'au revoir',
      portuguese: 'tchau'
    }
  };

//console.log(greetings.hello.portuguese)

/*create and modify properties*/

/*let house = {
    color: 'green',
    numRooms: 4,
    numWindows: 8,
    forSale: false
  };*/

//console.log(house)

//delete house.numWindows

//console.log(house)

let house = {
    color: 'green',
    numRooms: 4,
    forSale: false
  };

//console.log(house)
house.hasGarage = true
//console.log(house)

/*invoking object methods*/ 

const developer = {
    name: 'Andrew',
    sayHello: function () {
      console.log('Hi there!');
    }
  };

  //developer.sayHello();

  //developer['sayHello']();

  const myArray = [ function alerter() { alert('Hello!'); } ];

  //console.log( myArray[0]() )

  const bell = {
    color: 'gold',
    ring: function () {
      console.log('Ring ring ring!');
    }
  };

  //console.log( bell['ring']() )

  const tree = {
    type: 'redwood',
    leaves: 'green',
    height: 80,
    age: 15,
    growOneFoot: function () {
      this.height += 1;
    }
  };

  //console.log(tree.growOneFoot())

  const chameleon = {
      color: 'green',
      changeColor: function () {
          if( this.color === 'green'){
            this.color = 'pink';
            console.log(this.color)
          }else if( this.color === 'pink'){
            this.color = 'green';
            console.log(this.color)
          }
      }
  }

  //console.log(chameleon.changeColor())

  /* Beware of Globals */ 
  function whoThis () {
    debugger
    this.trickyish = true
  }
  
  //whoThis()

  let currentlyEating = 'ice cream';

window.currentlyEating === currentlyEating 
//debugger
//console.log(window.currentlyEating)

/* Extracting Properties and Values */
const dictionary = {
    car: 'automobile',
    apple: 'healthy snack',
    cat: 'cute furry animal',
    dog: 'best friend'
  };

//console.log( Object.keys(dictionary) )
//console.log( Object.values(dictionary) )

const triangle = {
    type: 'polygon',
    sides: 3,
    sumOfAngles: 180,
    equilateral: true,
    equiangular: true
  };

console.log( Object.keys(triangle) )
