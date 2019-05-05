# Functions
https://youtu.be/CCfficj6zG0

# Arrow Functions
ES6 introduces a new kind of function called the arrow function. Arrow functions are very similar to regular functions in behavior, but are quite different syntactically. The following code takes a list of names and converts each one to uppercase using a regular function:

        const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function(name) { 
        return name.toUpperCase();
        });

The code below does the same thing except instead of passing a regular function to the map() method,it passes an arrow function. Notice the arrow in the arrow function ( => ) in the code below:

        const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
            name => name.toUpperCase()
        );

The only change to the code above is the code inside the map() method. It takes a regular function and changes it to use an arrow function.

NOTE: Not sure how map() works? It's a method on the Array prototype. You pass a function to it, and it calls that function once on every element in the array. It then gathers the returned values from each function call and makes a new array with those results. For more info, check out MDN's documentation.

## Array​.prototype​.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map


## Convert a function to an arrow function

        const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function(name) { 
        return name.toUpperCase();
        });

With the function above, there are only a few steps for converting the existing "normal" function into an arrow function.

        remove the function keyword
        remove the parentheses
        remove the opening and closing curly braces
        remove the return keyword
        remove the semicolon
        add an arrow ( => ) between the parameter list and the function body

## Converting a normal function into an arrow function.
https://youtu.be/CM4j786p3Vs

#Using Arrow Functions
Regular functions can be either function declarations or function expressions, however arrow functions are always expressions. In fact, their full name is "arrow function expressions", so they can only be used where an expression is valid. This includes being:

        stored in a variable,
        passed as an argument to a function,
        and stored in an object's property.

One confusing syntax is when an arrow function is stored in a variable.

        const greet = name => `Hello ${name}!`;

In the code above, the arrow function is stored in the greet variable and you'd call it like this:

        greet('Asser');

If you recall, the parameter list appears before the arrow function's arrow (i.e. =>). If there's only one parameter in the list, then you can write it just like the example above. But, if there are two or more items in the parameter list, or if there are zero items in the list, then you need to wrap the list in parentheses:

        // empty parameter list requires parentheses
        const sayHi = () => console.log('Hello Udacity Student!');
        sayHi();

        // multiple parameters requires parentheses
        const orderIceCream = (flavor, cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);
        orderIceCream('chocolate', 'waffle');

## Concise and block body syntax
All of the arrow functions we've been looking at have only had a single expression as the function body:

        const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
        name => name.toUpperCase()
        );

This format of the function body is called the "concise body syntax". The concise syntax:

        has no curly braces surrounding the function body
        and automatically returns the expression.

If you need more than just a single line of code in your arrow function's body, then you can use the "block body syntax".

        const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map( name => {
            name = name.toUpperCase();
            return `${name} has ${name.length} characters in their name`;
        });

Important things to keep in mind with the block syntax:

        it uses curly braces to wrap the function body
        and a return statement needs to be used to actually return something from the function.

So arrow functions are awesome!

        The syntax is a lot shorter,
        it's easier to write and read short, single-line functions,
        and they automatically return when using the concise body syntax!

WARNING: Everything's not all ponies and rainbows though, and there are definitely times when you might not want to use an arrow function. So before you wipe from your memory how to write a traditional function, check out these implications:

        there's a gotcha with the this keyword in arrow functions
            go to the next lesson to find out the details!

        arrow functions are only expressions
            there's no such thing as an arrow function declaration

https://youtu.be/8xOKUtvI1lc

# Arrow Functions and the "this"
https://youtu.be/JCDcj_tKnmY

# "this" and Regular Functions
To get a handle on how this works differently with arrow functions, let's do a quick recap of how this works in a standard function. 

The value of the this keyword is based completely on how its function (or method) is called. this could be any of the following:

1. A new object
If the function is called with new:

        const mySundae = new Sundae('Chocolate', ['Sprinkles', 'Hot Fudge']); 

In the code above, the value of this inside the Sundae constructor function is a new object because it was called with new.

2. A specified object
If the function is invoked with call/apply:

        const result = obj1.printName.call(obj2);

In the code above, the value of this inside printName() will refer to obj2 since the first parameter of call() is to explicitly set what this refers to.

3. A context object
If the function is a method of an object:

        data.teleport();

In the code above, the value of this inside teleport() will refer to data.

4. The global object or undefined
If the function is called with no context:

        teleport();

In the code above, the value of this inside teleport() is either the global object or, if in strict mode, it's undefined.

## You Don't Know JS: this & Object Prototypes-Chapter 2: this All Makes Sense Now!
https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md

## You Don't Know JS (book series)
https://github.com/getify/You-Dont-Know-JS/blob/master/README.md

## "this" and Arrow Functions
With regular functions, the value of this is set based on how the function is called. With arrow functions, the value of this is based on the function's surrounding context. In other words, the value of this inside an arrow function is the same as the value of this outside the function.

Let's check out an example with this in regular functions and then look at how arrow functions will work.

        // constructor
        function IceCream() {
        this.scoops = 0;
        }

        // adds scoop to ice cream
        IceCream.prototype.addScoop = function() {
        setTimeout(function() {
            this.scoops++;
            console.log('scoop added!');
        }, 500);
        };

        const dessert = new IceCream();
        dessert.addScoop();

        After running the code above, you'd think that dessert.scoops would be 1 after half a millisecond. But, unfortunately, it's not:

        console.log(dessert.scoops);
        Prints:
        NaN
    
Can you tell why?

The function passed to setTimeout() is called without new, without call(), without apply(), and without a context object. That means the value of this inside the function is the global object and NOT the dessert object. So what actually happened was that a new scoops variable was created (with a default value of undefined) and was then incremented (undefined + 1 results in NaN):

console.log(scoops);

Prints:
NaN

One way around this is to use closure:

        // constructor
        function IceCream() {
        this.scoops = 0;
        }

        // adds scoop to ice cream
        IceCream.prototype.addScoop = function() {
        const cone = this; // sets `this` to the `cone` variable
        setTimeout(function() {
            cone.scoops++; // references the `cone` variable
            console.log('scoop added!');
        }, 0.5);
        };

        const dessert = new IceCream();
        dessert.addScoop();

        Prints:
        1

When addScoop() is called, the value of this inside addScoop() refers to dessert. Since an arrow function is passed to setTimeout(), it's using its surrounding context to determine what this refers to inside itself. So since this outside of the arrow function refers to dessert, the value of this inside the arrow function will also refer to dessert.

Now what do you think would happen if we changed the addScoop() method to an arrow function?

        // constructor
        function IceCream() {
            this.scoops = 0;
        }

        // adds scoop to ice cream
        IceCream.prototype.addScoop = () => { // addScoop is now an arrow function
        setTimeout(() => {
            this.scoops++;
            console.log('scoop added!');
        }, 0.5);
        };

        const dessert = new IceCream();
        dessert.addScoop();

Yeah, this doesn't work for the same reason - arrow functions inherit their this value from their surrounding context. Outside of the addScoop() method, the value of this is the global object. So if addScoop() is an arrow function, the value of this inside addScoop() is the global object. Which then makes the value of this in the function passed to setTimeout() also set to the global object!

# Default Function Parameters
Take a look at this code:

        function greet(name, greeting) {
        name = (typeof name !== 'undefined') ?  name : 'Student';
        greeting = (typeof greeting !== 'undefined') ?  greeting : 'Welcome';

        return `${greeting} ${name}!`;
        }

        greet(); // Welcome Student!
        greet('James'); // Welcome James!
        greet('Richard', 'Howdy'); // Howdy Richard!

        Returns:
        Welcome Student!
        Welcome James!
        Howdy Richard!

What is all that horrible mess in the first two lines of the greet() function? All of that is there to provide default values for the function if the required arguments aren't provided. It's pretty ugly, though...

Fortunately, ES6 has introduced a new way to create defaults. It's called default function parameters.

## Default function parameters
Default function parameters are quite easy to read since they're placed in the function's parameter list:

        function greet(name = 'Student', greeting = 'Welcome') {
        return `${greeting} ${name}!`;
        }

        greet(); // Welcome Student!
        greet('James'); // Welcome James!
        greet('Richard', 'Howdy'); // Howdy Richard!

Wow, that's a lot less code, so much cleaner, and significantly easier to read!

To create a default parameter, you add an equal sign ( = ) and then whatever you want the parameter to default to if an argument is not provided. In the code above, both parameters have default values of strings, but they can be any JavaScript type!

# Defaults and Destructuring 

## Defaults and destructuring arrays
You can combine default function parameters with destructuring to create some pretty powerful functions!

        function createGrid([width = 5, height = 5]) {
        return `Generates a ${width} x ${height} grid`;
        }

        createGrid([]); // Generates a 5 x 5 grid
        createGrid([2]); // Generates a 2 x 5 grid
        createGrid([2, 3]); // Generates a 2 x 3 grid
        createGrid([undefined, 3]); // Generates a 5 x 3 grid

        Returns:
        Generates a 5 x 5 grid
        Generates a 2 x 5 grid
        Generates a 2 x 3 grid
        Generates a 5 x 3 grid

The createGrid() function expects an array to be passed to it. It uses destructuring to set the first item in the array to the width and the second item to be the height. If the array is empty or if it has only one item in it, then the default parameters kick in and give the missing parameters a default value of 5.

There is a problem with this though, the following code will not work:

        createGrid(); // throws an error

This throws an error because createGrid() expects an array to be passed in that it will then destructure. Since the function was called without passing an array, it breaks. But, we can use default function parameters for this!

        function createGrid([width = 5, height = 5] = []) {
        return `Generates a ${width} x ${height} grid`;
        }

See that new = [] in the function's parameter? If createGrid() is called without any argument then it will use this default empty array. And since the array is empty, there's nothing to destructure into width and height, so their default values will apply! So by adding = [] to give the entire parameter a default, the following code will now work:

        createGrid(); // Generates a 5 x 5 grid

## Defaults and destructuring objects
Just like array destructuring with array defaults, a function can have an object be a default parameter and use object destructuring:

        function createSundae({scoops = 1, toppings = ['Hot Fudge']}) {
        const scoopText = scoops === 1 ? 'scoop' : 'scoops';
        return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
        }

        createSundae({}); // Your sundae has 1 scoop with Hot Fudge toppings.
        createSundae({scoops: 2}); // Your sundae has 2 scoops with Hot Fudge toppings.
        createSundae({scoops: 2, toppings: ['Sprinkles']}); // Your sundae has 2 scoops with Sprinkles toppings.
        createSundae({toppings: ['Cookie Dough']}); // Your sundae has 1 scoop with Cookie Dough toppings.

        Returns:
        Your sundae has 1 scoop with Hot Fudge toppings.
        Your sundae has 2 scoops with Hot Fudge toppings.
        Your sundae has 2 scoops with Sprinkles toppings.
        Your sundae has 1 scoop with Cookie Dough toppings.

    Just like the array example before, if you try calling the function without any arguments it won't work:

        createSundae(); // throws an error

    We can prevent this issue by providing a default object to the function:
        function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {}) {
            const scoopText = scoops === 1 ? 'scoop' : 'scoops';
            return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
        }

## Array defaults vs. object defaults
Default function parameters are a simple addition, but it makes our lives so much easier! One benefit of object defaults over array defaults is how they handle skipped options. Check this out:

        function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {}) { … }

...with the createSundae() function using object defaults with destructuring, if you want to use the default value for scoops but change the toppings, then all you need to do is pass in an object with toppings:

        createSundae({toppings: ['Hot Fudge', 'Sprinkles', 'Caramel']});

Compare the above example with the same function that uses array defaults with destructuring.

        function createSundae([scoops = 1, toppings = ['Hot Fudge']] = []) { … }

With this function setup, if you want to use the default number of scoops but change the toppings, you'd have to call your function a little...oddly:

        createSundae([undefined, ['Hot Fudge', 'Sprinkles', 'Caramel']]);

Since arrays are positionally based, we have to pass undefined to "skip" over the first argument (and accept the default) to get to the second argument.

Unless you've got a strong reason to use array defaults with array destructuring, we recommend going with object defaults with object destructuring!

# Class Preview
Here's a quick peek of what a JavaScript class look like:

        class Dessert {
            constructor(calories = 250) {
                this.calories = calories;
            }
            }

            class IceCream extends Dessert {
            constructor(flavor, calories, toppings = []) {
                super(calories);
                this.flavor = flavor;
                this.toppings = toppings;
            }
            addTopping(topping) {
                this.toppings.push(topping);
            }
        }

Notice the new class keyword right in front of Dessert and IceCream, or the new extends keyword in class IceCream extends Dessert? What about the call to super() inside the IceCream's constructor() method.

There are a bunch of new keywords and syntax to play with when creating JavaScript classes. But, before we jump into the specifics of how to write JavaScript classes, we want to point out a rather confusing part about JavaScript compared with class-based languages.

# JavaScript's Illusion of Classes
https://youtu.be/ISfkX503dlQ

# JavaScript Classes

## ES5 "Class" Recap
Since ES6 classes are just a mirage and hide the fact that prototypal inheritance is actually going on under the hood, let's quickly look at how to create a "class" with ES5 code:

        function Plane(numEngines) {
        this.numEngines = numEngines;
        this.enginesActive = false;
        }

        // methods "inherited" by all instances
        Plane.prototype.startEngines = function () {
        console.log('starting engines...');
        this.enginesActive = true;
        };

        var richardsPlane = new Plane(1);
        richardsPlane.startEngines();

        var jamesPlane = new Plane(4);
        jamesPlane.startEngines();

In the code above, the Plane function is a constructor function that will create new Plane objects. The data for a specific Plane object is passed to the Plane function and is set on the object. Methods that are "inherited" by each Plane object are placed on the Plane.prototype object. Then richardsPlane is created with one engine while jamesPlane is created with 4 engines. Both objects, however, use the same startEngines method to activate their respective engines.

Things to note:

        the constructor function is called with the new keyword
        the constructor function, by convention, starts with a capital letter
        the constructor function controls the setting of data on the objects that will be created
        "inherited" methods are placed on the constructor function's prototype object

Keep these in mind as we look at how ES6 classes work because, remember, ES6 classes set up all of this for you under the hood.

## ES6 Classes
Here's what that same Plane class would look like if it were written using the new class syntax:

        class Plane {
            constructor(numEngines) {
                this.numEngines = numEngines;
                this.enginesActive = false;
            }

            startEngines() {
                console.log('starting engines…');
                this.enginesActive = true;
            }
        }

# Convert a Function to a Class
https://youtu.be/JvpG_hX0-_0

# Working with JavaScript Classes

## Class is just a function
Just to prove that there isn't anything special about class, check out this code:

        class Plane {
        constructor(numEngines) {
            this.numEngines = numEngines;
            this.enginesActive = false;
        }

        startEngines() {
            console.log('starting engines…');
            this.enginesActive = true;
        }
        }

        typeof Plane; // function

        Returns: function

That's right—it's just a function! There isn't even a new type added to JavaScript.

⚠️ Where Are All The Commas? ⚠️

Did you notice that there aren't any commas between the method definitions in the Class? Commas are not used to separate properties or methods in a Class. If you add them, you'll get a SyntaxError of unexpected token ,

## Static methods
To add a static method, the keyword static is placed in front of the method name. Look at the badWeather() method in the code below.

        class Plane {
            constructor(numEngines) {
                this.numEngines = numEngines;
                this.enginesActive = false;
            }

            static badWeather(planes) {
                for (plane of planes) {
                plane.enginesActive = false;
                }
            }

            startEngines() {
                console.log('starting engines…');
                this.enginesActive = true;
            }
        }

See how badWeather() has the word static in front of it while startEngines() doesn't? That makes badWeather() a method that's accessed directly on the Plane class, so you can call it like this:

Plane.badWeather([plane1, plane2, plane3]);

## Object-Oriented JavaScript, Build Apps with Maintainable Code
https://www.udacity.com/course/object-oriented-javascript--ud711

## Benefits of classes
1. Less setup
        There's a lot less code that you need to write to create a function
2. Clearly defined constructor function
        Inside the class definition, you can clearly specify the constructor function.
3. Everything's contained
        All code that's needed for the class is contained in the class declaration. Instead of having the constructor function in one place, then adding methods to the prototype one-by-one, you can do everything all at once!

## Things to look out for when using classes
1. class is not magic
        The class keyword brings with it a lot of mental constructs from other, class-based languages. It doesn't magically add this functionality to JavaScript classes.

2. class is a mirage over prototypal inheritance

3. Using classes requires the use of new
        When creating a new instance of a JavaScript class, the new keyword must be used

        class Toy {
        ...
        }

        const myToy1 = Toy(); // throws an error

        Uncaught TypeError: Class constructor Toy cannot be invoked without 'new'

but, adding the new keyword fixes the problem

        const myToy2 = new Toy(); // this works!

# Super and Extends

## Subclasses with ES6
Now that we've looked at creating classes in JavaScript. Let's use the new super and extends keywords to extend a class.

        class Tree {
        constructor(size = '10', leaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null}) {
            this.size = size;
            this.leaves = leaves;
            this.leafColor = null;
        }

        changeSeason(season) {
            this.leafColor = this.leaves[season];
            if (season === 'spring') {
            this.size += 1;
            }
        }
        }

        class Maple extends Tree {
        constructor(syrupQty = 15, size, leaves) {
            super(size, leaves);
            this.syrupQty = syrupQty;
        }

        changeSeason(season) {
            super.changeSeason(season);
            if (season === 'spring') {
            this.syrupQty += 1;
            }
        }

        gatherSyrup() {
            this.syrupQty -= 3;
        }
        }

        const myMaple = new Maple(15, 5);
        myMaple.changeSeason('fall');
        myMaple.gatherSyrup();
        myMaple.changeSeason('spring');

Both Tree and Maple are JavaScript classes. The Maple class is a "subclass" of Tree and uses the extends keyword to set itself as a "subclass". To get from the "subclass" to the parent class, the super keyword is used. Did you notice that super was used in two different ways? In Maple's constructor method, super is used as a function. In Maple's changeSeason() method, super is used as an object!