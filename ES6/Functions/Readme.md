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

