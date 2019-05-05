
## Udacity ES6
https://www.udacity.com/course/es6-javascript-improved--ud356

# Let and Const

## Hoisting
Hoisting is a result of how JavaScript is interpreted by your browser. Essentially, before any JavaScript code is executed, all variables are "hoisted", which means they're raised to the top of the function scope. So at run-time, the getClothing() function actually looks more like this…

https://youtu.be/znkyiX50Ehk

## let and const
Variables declared with let and const eliminate this specific issue of hoisting because they’re scoped to the block, not to the function. Previously, when you used var, variables were either scoped globally or locally to an entire function scope.

If a variable is declared using let or const inside a block of code (denoted by curly braces { }), then the variable is stuck in what is known as the temporal dead zone until the variable’s declaration is processed. This behavior prevents variables from being accessed only until after they’ve been declared.

https://youtu.be/tQ02WllxScU

## Rules for using let and const
let and const also have some other interesting properties.

Variables declared with let can be reassigned, but can’t be redeclared in the same scope.
Variables declared with const must be assigned an initial value, but can’t be redeclared in the same scope, and can’t be reassigned.

## Use cases
The big question is when should you use let and const? The general rule of thumb is as follows:

    use let when you plan to reassign new values to a variable, and
    use const when you don’t plan on reassigning new values to a variable.

Since const is the strictest way to declare a variable, we suggest that you always declare variables with const because it'll make your code easier to reason about since you know the identifiers won't change throughout the lifetime of your program. If you find that you need to update a variable or change it, then go back and switch it from const to let.

That’s pretty straightforward, right? But what about var?

## What about var?
Is there any reason to use var anymore? Not really.

There are some arguments that can be made for using var in situations where you want to globally define variables, but this is often considered bad practice and should be avoided. From now on, we suggest ditching var in place of using let and const.

# Template Literals
Prior to ES6, the old way to concatenate strings together was by using the string concatenation operator ( + ).

        const student = {
        name: 'Richard Kalehoff',
        guardian: 'Mr. Kalehoff'
        };

        const teacher = {
        name: 'Mrs. Wilson',
        room: 'N231'
        }

        let message = student.name + ' please see ' + teacher.name + ' in ' + teacher.room + ' to pick up your report card.';
        Returns: Richard Kalehoff please see Mrs. Wilson in N231 to pick up your report card.

This works alright, but it gets more complicated when you need to build multi-line strings.

        let note = teacher.name + ',\n\n' +
        'Please excuse ' + student.name + '.\n' +
        'He is recovering from the flu.\n\n' +
        'Thank you,\n' +
        student.guardian;

## String interpolation
https://en.wikipedia.org/wiki/String_interpolation

## Template Literals
Template literals are essentially string literals that include embedded expressions.

Denoted with backticks (` `) instead of single quotes ( '' ) or double quotes ( "" ), template literals can contain placeholders which are represented using ${expression}. This makes it much easier to build strings.

Here's the previous examples using template literals.

        let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;

        Returns: Richard Kalehoff please see Mrs. Wilson in N231 to pick up your report card.

By using template literals, you can drop the quotes along with the string concatenation operator. Also, you can reference the object's properties inside expressions.

Here, you try. Change the greeting string below to use a template literal. Also, feel free to swap in your name for the placeholder.

...but what about the multi-line example from before?

https://youtu.be/fTWnGsGlmrM

Here’s where template literals really shine. In the animation above, the quotes and string concatenation operator have been dropped, as well as the newline characters ( \n ). That's because template literals also preserve newlines as part of the string!

TIP: Embedded expressions inside template literals can do more than just reference variables. You can perform operations, call functions and use loops inside embedded expressions!

# Destructuring

In ES6, you can extract data from arrays and objects into distinct variables using destructuring.

This probably sounds like something you’ve done before, for example, look at the two code snippets below that extract data using pre-ES6 techniques:

    const point = [10, 25, -34];

    const x = point[0];
    const y = point[1];
    const z = point[2];

    console.log(x, y, z);

Prints: 10 25 -34

The example above shows extracting values from an array.

    const gemstone = {
    type: 'quartz',
    color: 'rose',
    carat: 21.29
    };

    const type = gemstone.type;
    const color = gemstone.color;
    const carat = gemstone.carat;

    console.log(type, color, carat);

Prints: quartz rose 21.29

And this example shows extracting values from an object.

Both are pretty straightforward, however, neither of these examples are actually using destructuring.

So what exactly is destructuring?

## Destructuring
Destructuring borrows inspiration from languages like Perl and Python by allowing you to specify the elements you want to extract from an array or object on the left side of an assignment. It sounds a little weird, but you can actually achieve the same result as before, but with much less code; and it's still easy to understand.

Let’s take a look at both examples rewritten using destructuring.

## Destructuring values from an array

    const point = [10, 25, -34];

    const [x, y, z] = point;

    console.log(x, y, z);

Prints: 10 25 -34

In this example, the brackets [ ] represent the array being destructured and x, y, and z represent the variables where you want to store the values from the array. Notice how you don’t have to specify the indexes for where to extract the values from because the indexes are implied.

TIP: You can also ignore values when destructuring arrays. For example, const [x, , z] = point; ignores the y coordinate and discards it.

In this example, the curly braces { } represent the object being destructured and type, color, and carat represent the variables where you want to store the properties from the object. Notice how you don’t have to specify the property from where to extract the values. Because gemstone has a property named type, the value is automatically stored in the type variable. Similarly, gemstone has a color property, so the value of color automatically gets stored in the color variable. And it's the same with carat.

TIP: You can also specify the values you want to select when destructuring an object. For example, let {color} = gemstone; will only select the color property from the gemstone object.

# Object Literal Shorthand

A recurring trend in ES6 is to remove unnecessary repetition in your code. By removing unnecessary repetition, your code becomes easier to read and more concise. This trend continues with the introduction of new shorthand ways for initializing objects and adding methods to objects.

Let’s see what those look like.

## Object literal shorthand
You’ve probably written code where an object is being initialized using the same property names as the variable names being assigned to them.

But just in case you haven’t, here’s an example.

        let type = 'quartz';
        let color = 'rose';
        let carat = 21.29;

        const gemstone = {
        type: type,
        color: color,
        carat: carat
        };

        console.log(gemstone);

Do you see the repetition? Doesn't type: type, color: color, and carat:carat seem redundant?

The good news is that you can remove those duplicate variables names from object properties _if_ the properties have the same name as the variables being assigned to them.

https://youtu.be/HF0PN1vHsSY

Speaking of shorthand, there’s also a shorthand way to add methods to objects.

To see how that looks, let’s start by adding a calculateWorth() method to our gemstone object. The calculateWorth() method will tell us how much our gemstone costs based on its type, color, and carat.

        let type = 'quartz';
        let color = 'rose';
        let carat = 21.29;

        const gemstone = {
        type,
        color,
        carat,
        calculateWorth: function() {
            // will calculate worth of gemstone based on type, color, and carat
        }
        };

In this example, an anonymous function is being assigned to the property calculateWorth, but is the function keyword really needed? In ES6, it’s not!

## Shorthand method names
Since you only need to reference the gemstone’s calculateWorth property in order to call the function, having the function keyword is redundant, so it can be dropped.

        let gemstone = {
            type,
            color,
            carat,
            calculateWorth() { ... }
        };

## Checkup
https://youtu.be/6wcZNHqmGuc

# Iteration
https://youtu.be/Xsc9fRxOw5o

# For...of Loop

## Iteration Protocols
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

The for...of loop is the most recent addition to the family of for loops in JavaScript.

It combines the strengths of its siblings, the for loop and the for...in loop, to loop over any type of data that is iterable (meaning it follows the iterable protocol which we'll look at in lesson 3). By default, this includes the data types String, Array, Map, and Set—notably absent from this list is the Object data type (i.e. {}). Objects are not iterable, by default.

Before we look at the for...of loop, let’s first take a quick look at the other for loops to see where they have weaknesses.

## The for loop
The for loop is obviously the most common type of loop there is, so this should be a quick refresher.

        const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        for (let i = 0; i < digits.length; i++) {
            console.log(digits[i]);
        }

Really the biggest downside of a for loop is having to keep track of the counter and exit condition.

In this example, we’re using the variable i as a counter to keep track of the loop and to access values in the array. We’re also using digits.length to determine the exit condition for the loop. If you just glance at this code, it can sometimes be confusing exactly what’s happening; especially for beginners.

While for loops certainly have an advantage when looping through arrays, some data is not structured like an array, so a for loop isn’t always an option.

## The for...in loop
The for...in loop improves upon the weaknesses of the for loop by eliminating the counting logic and exit condition.

        const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        for (const index in digits) {
            console.log(digits[index]);
        }

But, you still have to deal with the issue of using an index to access the values of the array, and that stinks; it almost makes it more confusing than before.

Also, the for...in loop can get you into big trouble when you need to add an extra method to an array (or another object). Because for...in loops loop over all enumerable properties, this means if you add any additional properties to the array's prototype, then those properties will also appear in the loop.

        Array.prototype.decimalfy = function() {
        for (let i = 0; i < this.length; i++) {
            this[i] = this[i].toFixed(2);
        }
        };

        const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        for (const index in digits) {
        console.log(digits[index]);
        }
