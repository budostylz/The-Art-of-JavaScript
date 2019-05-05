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

# For...of Loop
Finally, we have the mighty for...of loop.

For...of loop
The for...of loop is used to loop over any type of data that is iterable.

You write a for...of loop almost exactly like you would write a for...in loop, except you swap out in with of and you can drop the index.

        const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        for (const digit of digits) {
        console.log(digit);
        }

This makes the for...of loop the most concise version of all the for loops.

TIP: It’s good practice to use plural names for objects that are collections of values. That way, when you loop over the collection, you can use the singular version of the name when referencing individual values in the collection. For example, for (const button of buttons) {...}.

https://youtu.be/2GTqDo9bbOM

But wait, there’s more! The for...of loop also has some additional benefits that fix the weaknesses of the for and for...in loops.

You can stop or break a for...of loop at anytime.

        const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        for (const digit of digits) {
        if (digit % 2 === 0) {
            continue;
        }
        console.log(digit);
        }

And you don’t have to worry about adding new properties to objects. The for...of loop will only loop over the values in the object.

        Array.prototype.decimalfy = function() {
        for (i = 0; i < this.length; i++) {
            this[i] = this[i].toFixed(2);
        }
        };

        const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        for (const digit of digits) {
        console.log(digit);
        }

# Spread... Operator

## Iterators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Iterators

Time to switch gears for a moment and check out the spread operator!

Spread operator
The spread operator, written with three consecutive dots ( ... ), is new in ES6 and gives you the ability to expand, or spread, iterable objects into multiple elements.

Let’s take a look at a few examples to see how it works.

        const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
        console.log(...books);

        const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
        console.log(...primes);

If you look at the output from the examples, notice that both the array and set have been expanded into their individual elements. So how is this useful?

## Combining arrays with concat
One example of when the spread operator can be useful is when combining arrays.

If you’ve ever needed to combine multiple arrays, prior to the spread operator, you were forced to use the Array’s concat() method.

        const fruits = ["apples", "bananas", "pears"];
        const vegetables = ["corn", "potatoes", "carrots"];
        const produce = fruits.concat(vegetables);
        console.log(produce);

This isn’t terrible, but wouldn’t it be nice if there was a shorthand way to write this code?

For example, something like…

## Upcoming const Warning
If you're following along by copy/pasting the code, then you've already declared the produce variable with the const keyword. The following code will try to redeclare and reassign the variable, so depending on how you're running the code, it might throw an error.

Remember that variables declared with const cannot be redeclared or reassigned in the same scope.

        const produce = [fruits, vegetables];
        console.log(produce);

Unfortunately, that doesn’t work.

Instead of combining both arrays, this code actually adds the fruits array at the first index and the vegetables array at the second index of the produce array.

Check out spread_operator.html

# ...Rest Parameter
If you can use the spread operator to spread an array into multiple elements, then certainly there should be a way to bundle multiple elements back into an array, right?

In fact, there is! It’s called the rest parameter, and it’s another new addition in ES6.

## Rest parameter
The rest parameter, also written with three consecutive dots ( ... ), allows you to represent an indefinite number of elements as an array. This can be helpful in a couple of different situations.

One situation is when assigning the values of an array to variables. For example,

    const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
    const [total, subtotal, tax, ...items] = order;
    console.log(total, subtotal, tax, items);

This code takes the values of the order array and assigns them to individual variables using destructuring (as you saw in the Destructuring section earlier in this lesson). total, subtotal, and tax are assigned the first three values in the array, however, items is where you want to pay the most attention.

By using the rest parameter, items is assigned the rest of the values in the array (as an array).

https://youtu.be/vRtfwfqnVSs

You can think of the rest parameter like the opposite of the spread operator; if the spread operator is like unboxing all of the contents of a package, then the rest parameter is like taking all the contents and putting them back into the package.

## Variadic functions
Another use case for the rest parameter is when you’re working with variadic functions. Variadic functions are functions that take an indefinite number of arguments.

For example, let’s say we have a function called sum() which calculates the sum of an indefinite amount of numbers. How might the sum() function be called during execution?

    sum(1, 2);
    sum(10, 36, 7, 84, 90, 110);
    sum(-23, 3000, 575000);

There’s literally an endless number of ways the sum() function could be called. Regardless of the amount of numbers passed to the function, it should always return the total sum of the numbers.

## Using the arguments object
In previous versions of JavaScript, this type of function would be handled using the arguments object. The arguments object is an array-like object that is available as a local variable inside all functions. It contains a value for each argument being passed to the function starting at 0 for the first argument, 1 for the second argument, and so on.

If we look at the implementation of our sum() function, then you’ll see how the arguments object could be used to handle the variable amount of numbers being passed to it.

## The arguments object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

        function sum() {
        let total = 0;  
        for(const argument of arguments) {
            total += argument;
        }
        return total;
        }

Now this works fine, but it does have its issues:

1. If you look at the definition for the sum() function, it doesn’t have any parameters.
        This is misleading because we know the sum() function can handle an indefinite amount of arguments.
2. It can be hard to understand.
        If you’ve never used the arguments object before, then you would most likely look at this code and wonder where the arguments object is even coming from. Did it appear out of thin air? It certainly looks that way.

## Using the rest parameter
Fortunately, with the addition of the rest parameter, you can rewrite the sum() function to read more clearly.

        function sum(...nums) {
        let total = 0;  
        for(const num of nums) {
            total += num;
        }
        return total;
        }

This version of the sum() function is both more concise and is easier to read. Also, notice the for...in loop has been replaced with the new for...of loop.

## Outro
https://youtu.be/EG4B0JEkLzk




