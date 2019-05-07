# Symbols Intro
https://youtu.be/kbVmzEQ4Hr0

# Symbols
A symbol is a unique and immutable data type that is often used to identify object properties.

To create a symbol, you write Symbol() with an optional string as its description.

        const sym1 = Symbol('apple');
        console.log(sym1);

        Symbol(apple)

This will create a unique symbol and store it in sym1. The description "apple" is just a way to describe the symbol, but it can’t be used to access the symbol itself.

And just to show you how this works, if you compare two symbols with the same description…

        const sym2 = Symbol('banana');
        const sym3 = Symbol('banana');
        console.log(sym2 === sym3);
        
        false

…then the result is false because the description is only used to describe the symbol. It’s not used as part of the symbol itself—each time a new symbol is created, regardless of the description.

Still, this can be hard to wrap your head around, so let’s use the example from the previous video to see how symbols can be useful. Here’s the code to represent the bowl from the example.

        const bowl = {
            'apple': { color: 'red', weight: 136.078 },
            'banana': { color: 'yellow', weight: 183.15 },
            'orange': { color: 'orange', weight: 170.097 }
        };

The bowl contains fruit which are objects that are properties of the bowl. But, we run into a problem when the second banana gets added.

        const bowl = {
            'apple': { color: 'red', weight: 136.078 },
            'banana': { color: 'yellow', weight: 183.151 },
            'orange': { color: 'orange', weight: 170.097 },
            'banana': { color: 'yellow', weight: 176.845 }
        };
        console.log(bowl);
        Object {apple: Object, banana: Object, orange: Object}

Instead of adding another banana to the bowl, our previous banana is overwritten by the new banana being added to the bowl. To fix this problem, we can use symbols.

        const bowl = {
        [Symbol('apple')]: { color: 'red', weight: 136.078 },
        [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
        [Symbol('orange')]: { color: 'orange', weight: 170.097 },
        [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
        };
        console.log(bowl);
        Object {Symbol(apple): Object, Symbol(banana): Object, Symbol(orange): Object, Symbol(banana): Object}

By changing the bowl’s properties to use symbols, each property is a unique Symbol and the first banana doesn’t get overwritten by the second banana.

# Iteration & Iterable Protocols

## Before you move on, let’s spend some time looking at two new protocols in ES6:

        the iterable protocol
        the iterator protocol

These protocols aren’t built-ins, but they will help you understand the new concept of iteration in ES6, as well as show you a use case for symbols.

## The Iterable Protocol
The iterable protocol is used for defining and customizing the iteration behavior of objects. What that really means is you now have the flexibility in ES6 to specify a way for iterating through values in an object. For some objects, they already come built-in with this behavior. For example, strings and arrays are examples of built-in iterables.

        const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (const digit of digits) {
            console.log(digit);
        }
        0 
        1 
        2 
        3 
        4 
        5 
        6 
        7 
        8 
        9

If you recall from earlier lesson 1, any object that is iterable can use the new for...of loop. Later in this lesson, you’ll also learn about Sets and Maps which are other examples of built-in iterables.

## How it Works
In order for an object to be iterable, it must implement the iterable interface. If you come from a language like Java or C, then you’re probably familiar with interfaces, but for those of you who aren’t, that basically means that in order for an object to be iterable it must contain a default iterator method. This method will define how the object should be iterated.

The iterator method, which is available via the constant [Symbol.iterator], is a zero arguments function that returns an iterator object. An iterator object is an object that conforms to the iterator protocol.

## The Iterator Protocol
The iterator protocol is used to define a standard way that an object produces a sequence of values. What that really means is you now have a process for defining how an object will iterate. This is done through implementing the .next() method.

## How it Works
An object becomes an iterator when it implements the .next() method. The .next() method is a zero arguments function that returns an object with two properties:

        1. value : the data representing the next value in the sequence of values within the object
        2. done : a boolean representing if the iterator is done going through the sequence of values
        If done is true, then the iterator has reached the end of its sequence of values.
        If done is false, then the iterator is able to produce another value in its sequence of values.

Here’s the example from earlier, but instead we are using the array’s default iterator to step through the each value in the array.

        const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const arrayIterator = digits[Symbol.iterator]();

        console.log(arrayIterator.next());
        console.log(arrayIterator.next());
        console.log(arrayIterator.next());

        Object {value: 0, done: false}
        Object {value: 1, done: false}
        Object {value: 2, done: false}

# A Set in Mathematics
If you think back to mathematics, a set is a collection of distinct items. For example, {2, 4, 5, 6} is a set because each number is unique and appears only once. However, {1, 1, 2, 4} is not a set because it contains duplicate entries (the 1 is in there more than once!).

In JavaScript, we can already represent something similar to a mathematical set using an array.

        const nums = [2, 4, 5, 6];

However, arrays do not enforce items to be unique. If we try to add another 2 to nums, JavaScript won't complain and will add it without any issue.

        nums.push(2);
        console.log(nums);
        [2, 4, 5, 6, 2]

    …and now nums is no longer a set in the mathematical sense.

# Sets
In ES6, there’s a new built-in object that behaves like a mathematical set and works similarly to an array. This new object is conveniently called a "Set". The biggest differences between a set and an array are:

        Sets are not indexed-based - you do not refer to items in a set based on their position in the set
        items in a Set can’t be accessed individually

Basically, a Set is an object that lets you store unique items. You can add items to a Set, remove items from a Set, and loop over a Set. These items can be either primitive values or objects.

## How to Create a Set
There’s a couple of different ways to create a Set. The first way, is pretty straightforward:

        const games = new Set();
        console.log(games);
        Set {}

This creates an empty Set games with no items.

If you want to create a Set from a list of values, you use an array:

        const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
        console.log(games);

        Set {'Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart'}

Notice the example above automatically removes the duplicate entry "Super Mario Bros." when the Set is created. Pretty neat!

# Modifying Sets
After you’ve created a Set, you’ll probably want to add and delete items from the Set. So how do you that? You use the appropriately named, .add() and .delete() methods:

        const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);

        games.add('Banjo-Tooie');
        games.add('Age of Empires');
        games.delete('Super Mario Bros.');

        console.log(games);

        Set {'Banjo-Kazooie', 'Mario Kart', 'Banjo-Tooie', 'Age of Empires'}

    On the other hand, if you want to delete all the items from a Set, you can use the .clear() method.

        games.clear()
        console.log(games);
        Set {}

TIP: If you attempt to .add() a duplicate item to a Set, you won’t receive an error, but the item will not be added to the Set. Also, if you try to .delete() an item that is not in a Set, you won’t receive an error, and the Set will remain unchanged.

.add() returns the Set if an item is successfully added. On the other hand, .delete() returns a Boolean (true or false) depending on successful deletion.

# Working With Sets

## Checking The Length
Once you’ve constructed your Set, there are a couple of different properties and methods you can use to work with Sets.

Use the .size property to return the number of items in a Set:

        const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
        console.log(months.size);

        12

Remember, Sets can’t be accessed by their index like an array, so you use the .size property instead of .length property to get the size of the Set.

## Checking If An Item Exists
Use the .has() method to check if an item exists in a Set. If the item is in the Set, then .has() will return true. If the item doesn’t exist in the Set, then .has() will return false.

        console.log(months.has('September'));
        true

## Retrieving All Values
Finally, use the .values() method to return the values in a Set. The return value of the .values() method is a SetIterator object.

        console.log(months.values());
        SetIterator {'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'}

    More on the SetIterator object in a second!

TIP: The .keys() method will behave the exact same way as the .values() method by returning the values of a Set within a new Iterator Object. The .keys() method is an alias for the .values() method for similarity with maps. You’ll see the .keys() method later in this lesson during the Maps section.

# Sets & Iterators
The last step to working with Sets is looping over them.

If you remember back to our discussion on the new iterable and iterator protocols in ES6, then you’ll recall that Sets are built-in iterables. This means two things in terms of looping:

    1. You can use the Set’s default iterator to step through each item in a Set, one by one.
    2. You can use the new for...of loop to loop through each item in a Set.

## Using the SetIterator
Because the .values() method returns a new iterator object (called SetIterator), you can store that iterator object in a variable and loop through each item in the Set using .next().

        const iterator = months.values();
        iterator.next();

        Object {value: 'January', done: false}

    And if you run .next() again?

        iterator.next();

        Object {value: 'February', done: false}

    And so on until done equals true which marks the end of the Set.

https://youtu.be/Hd205fgC7qo

## Using a for...of Loop
An easier method to loop through the items in a Set is the for...of loop.

        const colors = new Set(['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'brown', 'black']);
        for (const color of colors) {
        console.log(color);
        }

        red 
        orange 
        yellow 
        green 
        blue 
        violet 
        brown 
        black

# What is a WeakSet?
A WeakSet is just like a normal Set with a few key differences:

        1. a WeakSet can only contain objects
        2. a WeakSet is not iterable which means it can’t be looped over
        3. a WeakSet does not have a .clear() method

You can create a WeakSet just like you would a normal Set, except that you use the WeakSet constructor.

        let student1 = { name: 'James', age: 26, gender: 'male' };
        let student2 = { name: 'Julia', age: 27, gender: 'female' };
        let student3 = { name: 'Richard', age: 31, gender: 'male' };

        const roster = new WeakSet([student1, student2, student3]);
        console.log(roster);

        WeakSet {Object {name: 'Julia', age: 27, gender: 'female'}, Object {name: 'Richard', age: 31, gender: 'male'}, Object {name: 'James', age: 26, gender: 'male'}}

    …but if you try to add something other than an object, you’ll get an error!

        roster.add('Amanda')

            Uncaught TypeError: Invalid value used in weak set(…)

This is expected behavior because WeakSets can only contain objects. But why should it only contain objects? Why would you even use a WeakSet if normal Sets can contain objects and other types of data? Well, the answer to that question has more to do with why WeakSets do not have a .clear() method...

## Garbage Collection
In JavaScript, memory is allocated when new values are created and is "automatically" freed up when those values are no longer needed. This process of freeing up memory after it is no longer needed is what is known as garbage collection.

WeakSets take advantage of this by exclusively working with objects. If you set an object to null, then you’re essentially deleting the object. And when JavaScript’s garbage collector runs, the memory that object previously occupied will be freed up to be used later in your program.

        student3 = null;
        console.log(roster);

        WeakSet {Object {name: 'Julia', age: 27, gender: 'female'}, Object {name: 'James', age: 26, gender: 'male'}}

https://youtu.be/yAOA1otYfBM

What makes this so useful is you don’t have to worry about deleting references to deleted objects in your WeakSets, JavaScript does it for you! When an object is deleted, the object will also be deleted from the WeakSet when garbage collection runs. This makes WeakSets useful in situations where you want an efficient, lightweight solution for creating groups of objects.

The point in time when garbage collection happens depends on a lot of different factors. Check out MDN’s documentation to learn more about the algorithms used to handle garbage collection in JavaScript.

## Memory Management
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management#Garbage_collection

# Maps
https://youtu.be/H5DJPfcN2P4

# Creating & Modifying Maps

# Maps
If Sets are similar to Arrays, then Maps are similar to Objects because Maps store key-value pairs similar to how objects contain named properties with values.

Essentially, a Map is an object that lets you store key-value pairs where both the keys and the values can be objects, primitive values, or a combination of the two.

# How to Create a Map
To create a Map, simply type:

        const employees = new Map();
        console.log(employees);
        Map {}

This creates an empty Map employee with no key-value pairs.

# Modifying Maps
Unlike Sets, you can’t create Maps from a list of values; instead, you add key-values by using the Map’s .set() method.

        const employees = new Map();

        employees.set('james.parkes@udacity.com', { 
            firstName: 'James',
            lastName: 'Parkes',
            role: 'Content Developer' 
        });
        employees.set('julia@udacity.com', {
            firstName: 'Julia',
            lastName: 'Van Cleve',
            role: 'Content Developer'
        });
        employees.set('richard@udacity.com', {
            firstName: 'Richard',
            lastName: 'Kalehoff',
            role: 'Content Developer'
        });

        console.log(employees);
        Map {'james.parkes@udacity.com' => Object {...}, 'julia@udacity.com' => Object {...}, 'richard@udacity.com' => Object {...}}

The .set() method takes two arguments. The first argument is the key, which is used to reference the second argument, the value.

To remove key-value pairs, simply use the .delete() method.

        employees.delete('julia@udacity.com');
        employees.delete('richard@udacity.com');
        console.log(employees);

        Map {'james.parkes@udacity.com' => Object {firstName: 'James', lastName: 'Parkes', role: 'Course Developer'}}

Again, similar to Sets, you can use the .clear() method to remove all key-value pairs from the Map.

        employees.clear()
        console.log(employees);
        Map {}

TIP: If you .set() a key-value pair to a Map that already uses the same key, you won’t receive an error, but the key-value pair will overwrite what currently exists in the Map. Also, if you try to .delete() a key-value that is not in a Map, you won’t receive an error, and the Map will remain unchanged.

The .delete() method returns true if a key-value pair is successfully deleted from the Map object, and false if unsuccessful. The return value of .set() is the Map object itself if successful.

# Working with Maps
After you’ve built your Map, you can use the .has() method to check if a key-value pair exists in your Map by passing it a key.

        const members = new Map();

        members.set('Evelyn', 75.68);
        members.set('Liam', 20.16);
        members.set('Sophia', 0);
        members.set('Marcus', 10.25);

        console.log(members.has('Xavier'));
        console.log(members.has('Marcus'));

        false
        true

And you can also retrieve values from a Map, by passing a key to the .get() method.

        console.log(members.get('Evelyn'));
        75.68
# Looping Through Maps
You’ve created a Map, added some key-value pairs, and now you want to loop through your Map. Thankfully, you’ve got three different options to choose from:

    1. Step through each key or value using the Map’s default iterator
    2. Loop through each key-value pair using the new for...of loop
    3. Loop through each key-value pair using the Map’s .forEach() method

1. Using the MapIterator
Using both the .keys() and .values() methods on a Map will return a new iterator object called MapIterator. You can store that iterator object in a new variable and use .next() to loop through each key or value. Depending on which method you use, will determine if your iterator has access to the Map’s keys or the Map’s values.

        let iteratorObjForKeys = members.keys();
        iteratorObjForKeys.next();
        Object {value: 'Evelyn', done: false}

Use .next() to the get the next key value.

        iteratorObjForKeys.next();
        Object {value: 'Liam', done: false}

And so on.

        iteratorObjForKeys.next();
        Object {value: 'Sophia', done: false}

On the flipside, use the .values() method to access the Map’s values, and then repeat the same process.

        let iteratorObjForValues = members.values();
        iteratorObjForValues.next();
        Object {value: 75.68, done: false}

2. Using a for...of Loop
Your second option for looping through a Map is with a for...of loop.

        for (const member of members) {
            console.log(member);
        }
        ['Evelyn', 75.68]
        ['Liam', 20.16]
        ['Sophia', 0]
        ['Marcus', 10.25]

However, when you use a for...of loop with a Map, you don’t exactly get back a key or a value. Instead, the key-value pair is split up into an array where the first element is the key and the second element is the value. If only there were a way to fix this?

3. Using a forEach Loop
Your last option for looping through a Map is with the .forEach() method.

        members.forEach((value, key) => console.log(key, value));

        'Evelyn' 75.68
        'Liam' 20.16
        'Sophia' 0
        'Marcus' 10.25

Notice how with the help of an arrow function, the forEach loop reads fairly straightforward. For each value and key in members, log the value and key to the console.

# What is a WeakMap?
A WeakMap is just like a normal Map with a few key differences:

a WeakMap can only contain objects as keys,
a WeakMap is not iterable which means it can’t be looped and
a WeakMap does not have a .clear() method.
You can create a WeakMap just like you would a normal Map, except that you use the WeakMap constructor.

        const book1 = { title: 'Pride and Prejudice', author: 'Jane Austen' };
        const book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' };
        const book3 = { title: 'Gulliver’s Travels', author: 'Jonathan Swift' };

        const library = new WeakMap();
        library.set(book1, true);
        library.set(book2, false);
        library.set(book3, true);

        console.log(library);

        WeakMap {Object {title: 'Pride and Prejudice', author: 'Jane Austen'} => true, Object {title: 'The Catcher in the Rye', author: 'J.D. Salinger'} => false, Object {title: 'Gulliver’s Travels', author: 'Jonathan Swift'} => true}

…but if you try to add something other than an object as a key, you’ll get an error!

        library.set('The Grapes of Wrath', false);
        Uncaught TypeError: Invalid value used as weak map key(…)

This is expected behavior because WeakMap can only contain objects as keys. Again, similar to WeakSets, WeakMaps leverage garbage collection for easier use and maintainability.

## Garbage Collection
In JavaScript, memory is allocated when new values are created and is "automatically" freed up when those values are no longer needed. This process of freeing up memory after it is no longer needed is what is known as garbage collection.

WeakMaps take advantage of this by exclusively working with objects as keys. If you set an object to null, then you’re essentially deleting the object. And when JavaScript’s garbage collector runs, the memory that object previously occupied will be freed up to be used later in your program.

        book1 = null;
        console.log(library);
        WeakMap {Object {title: 'The Catcher in the Rye', author: 'J.D. Salinger'} => false, Object {title: 'Gulliver’s Travels', author: 'Jonathan Swift'} => true}

https://youtu.be/sUE_JjiF_q4

Erratum: In the previous video animation, const is use to declare the book1 variable. book1 is then reassigned to null -- however, this wouldn't be possible because the variable identifier cannot be reassigned (i.e., you'll see Uncaught TypeError: Assignment to constant variable.). Instead, we recommend using let rather than const to declare book1, which allows for reassignment.

What makes this so useful is you don’t have to worry about deleting keys that are referencing deleted objects in your WeakMaps, JavaScript does it for you! When an object is deleted, the object key will also be deleted from the WeakMap when garbage collection runs. This makes WeakMaps useful in situations where you want an efficient, lightweight solution for creating groupings of objects with metadata.

The point in time when garbage collection happens is dependent on a lot of different factors. Check out MDN’s documentation to learn more about the algorithms used to handle garbage collection in JavaScript.

## Garbage collection
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management#Garbage_collection

# Promises Intro
https://youtu.be/8L1a-_c8mCg

## Promises
A JavaScript Promise is created with the new Promise constructor function - new Promise(). A promise will let you start some work that will be done asynchronously and let you get back to your regular work. When you create the promise, you must give it the code that will be run asynchronously. You provide this code as the argument of the constructor function:

        new Promise(function () {
            window.setTimeout(function createSundae(flavor = 'chocolate') {
                const sundae = {};
                // request ice cream
                // get cone
                // warm up ice cream scoop
                // scoop generous portion into cone!
            }, Math.random() * 2000);
        });

This code creates a promise that will start in a few seconds after I make the request. Then there are a number of steps that need to be made in the createSundae function.

# Indicated a Successful Request or a Failed Request
But once that's all done, how does JavaScript notify us that it's finished and ready for us to pick back up? It does that by passing two functions into our initial function. Typically we call these resolve and reject.

The function gets passed to the function we provide the Promise constructor - typically the word "resolve" is used to indicate that this function should be called when the request completes successfully. Notice the resolve on the first line:

        new Promise(function (resolve, reject) {
            window.setTimeout(function createSundae(flavor = 'chocolate') {
                const sundae = {};
                // request ice cream
                // get cone
                // warm up ice cream scoop
                // scoop generous portion into cone!
                resolve(sundae);
            }, Math.random() * 2000);
        });

Now when the sundae has been successfully created, it calls the resolve method and passes it the data we want to return - in this case the data that's being returned is the completed sundae. So the resolve method is used to indicate that the request is complete and that it completed successfully.

If there is a problem with the request and it couldn't be completed, then we could use the second function that's passed to the function. Typically, this function is stored in an identifier called "reject" to indicate that this function should be used if the request fails for some reason. Check out the reject on the first line:

        new Promise(function (resolve, reject) {
            window.setTimeout(function createSundae(flavor = 'chocolate') {
                const sundae = {};
                // request ice cream
                // get cone
                // warm up ice cream scoop
                // scoop generous portion into cone!
                if ( /* iceCreamConeIsEmpty(flavor) */ ) {
                    reject(`Sorry, we're out of that flavor :-(`);
                }
                resolve(sundae);
            }, Math.random() * 2000);
        });

So the reject method is used when the request could not be completed. Notice that even though the request fails, we can still return data - in this case we're just returning text that says we don't have the desired ice cream flavor.

A Promise constructor takes a function that will run and then, after some amount of time, will either complete successfully (using the resolve method) or unsuccessfully (using the reject method). When the outcome has been finalized (the request has either completed successfully or unsuccessfully), the promise is now fulfilled and will notify us so we can decide what to do with the response.

# Promises Return Immediately
The first thing to understand is that a Promise will immediately return an object.

        const myPromiseObj = new Promise(function (resolve, reject) {
            // sundae creation code
        });

That object has a .then() method on it that we can use to have it notify us if the request we made in the promise was either successful or failed. The .then() method takes two functions:

        1. the function to run if the request completed successfully
        2. the function to run if the request failed to complete

        mySundae.then(function(sundae) {
            console.log(`Time to eat my delicious ${sundae}`);
        }, function(msg) {
            console.log(msg);
            self.goCry(); // not a real method
        });

As you can see, the first function that's passed to .then() will be called and passed the data that the Promise's resolve function used. In this case, the function would receive the sundae object. The second function will be called and passed the data that the Promise's reject function was called with. In this case, the function receives the error message "Sorry, we're out of that flavor :-(" that the reject function was called with in the Promise code above.

# Promise
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

# More Promises
https://youtu.be/8CxDIR2tH9A?t=61

# Proxies
https://youtu.be/lYXhxgt6suk

To create a proxy object, we use the Proxy constructor - new Proxy();. The proxy constructor takes two items:

the object that it will be the proxy for
an object containing the list of methods it will handle for the proxied object
The second object is called the handler.

## A Pass Through Proxy
The simplest way to create a proxy is to provide an object and then an empty handler object.

        var richard = {status: 'looking for work'};
        var agent = new Proxy(richard, {});

        agent.status; // returns 'looking for work'

The above doesn't actually do anything special with the proxy - it just passes the request directly to the source object! If we want the proxy object to actually intercept the request, that's what the handler object is for!

The key to making Proxies useful is the handler object that's passed as the second object to the Proxy constructor. The handler object is made up of a methods that will be used for property access. Let's look at the get:

# Get Trap
The get trap is used to "intercept" calls to properties:

        const richard = {status: 'looking for work'};
        const handler = {
            get(target, propName) {
                console.log(target); // the `richard` object, not `handler` and not `agent`
                console.log(propName); // the name of the property the proxy (`agent` in this case) is checking
            }
        };
        const agent = new Proxy(richard, handler);
        agent.status; // logs out the richard object (not the agent object!) and the name of the property being accessed (`status`)

In the code above, the handler object has a get method (called a "trap" since it's being used in a Proxy). When the code agent.status; is run on the last line, because the get trap exists, it "intercepts" the call to get the status property and runs the get trap function. This will log out the target object of the proxy (the richard object) and then logs out the name of the property being requested (the status property). And that's all it does! It doesn't actually log out the property! This is important - if a trap is used, you need to make sure you provide all the functionality for that specific trap.

## Accessing the Target object from inside the proxy
If we wanted to actually provide the real result, we would need to return the property on the target object:

        const richard = {status: 'looking for work'};
        const handler = {
            get(target, propName) {
                console.log(target);
                console.log(propName);
                return target[propName];
            }
        };
        const agent = new Proxy(richard, handler);
        agent.status; // (1)logs the richard object, (2)logs the property being accessed, (3)returns the text in richard.status

Notice we added the return target[propName]; as the last line of the get trap. This will access the property on the target object and will return it.

## Having the proxy return info, directly
Alternatively, we could use the proxy to provide direct feedback:

        const richard = {status: 'looking for work'};
        const handler = {
            get(target, propName) {
                return `He's following many leads, so you should offer a contract as soon as possible!`;
            }
        };
        const agent = new Proxy(richard, handler);
        agent.status; // returns the text `He's following many leads, so you should offer a contract as soon as possible!`

With this code, the Proxy doesn't even check the target object, it just directly responds to the calling code.

So the get trap will take over whenever any property on the proxy is accessed. If we want to intercept calls to change properties, then the set trap needs to be used!

The set trap is used for intercepting code that will change a property. The set trap receives: the object it proxies the property that is being set the new value for the proxy

        const richard = {status: 'looking for work'};
        const handler = {
            set(target, propName, value) {
                if (propName === 'payRate') { // if the pay is being set, take 15% as commission
                    value = value * 0.85;
                }
                target[propName] = value;
            }
        };
        const agent = new Proxy(richard, handler);
        agent.payRate = 1000; // set the actor's pay to $1,000
        agent.payRate; // $850 the actor's actual pay

In the code above, notice that the set trap checks to see if the payRate property is being set. If it is, then the proxy (the agent) takes 15 percent off the top for her own commission! Then, when the actor's pay is set to one thousand dollars, since the payRate property was used, the code took 15% off the top and set the actual payRate property to 850;

## Other Traps
So we've looked at the get and set traps (which are probably the ones you'll use most often), but there are actually a total of 13 different traps that can be used in a handler!

1. the get trap - lets the proxy handle calls to property access
2. the set trap - lets the proxy handle setting the property to a new value
3. the apply trap - lets the proxy handle being invoked (the object being proxied is a function)
4. the has trap - lets the proxy handle the using in operator
5. the deleteProperty trap - lets the proxy handle if a property is deleted
6. the ownKeys trap - lets the proxy handle when all keys are requested
7. the construct trap - lets the proxy handle when the proxy is used with the new keyword as a  constructor
8. the defineProperty trap - lets the proxy handle when defineProperty is used to create a new property on the object
9. the getOwnPropertyDescriptor trap - lets the proxy handle getting the property's descriptors
10. the preventExtenions trap - lets the proxy handle calls to Object.preventExtensions() on the proxy object
11. the isExtensible trap - lets the proxy handle calls to Object.isExtensible on the proxy object
12. the getPrototypeOf trap - lets the proxy handle calls to Object.getPrototypeOf on the proxy object
13. the setPrototypeOf trap - lets the proxy handle calls to Object.setPrototypeOf on the proxy object

As you can see, there are a lot of traps that let the proxy manage how it handles calls back and forth to the proxied object.

# Proxies vs. ES5 Getter/Setter
Initially, it can be a bit unclear as to why proxies are all that beneficial when there are already getter and setter methods provided in ES5. With ES5's getter and setter methods, you need to know before hand the properties that are going to be get/set:

        var obj = {
            _age: 5,
            _height: 4,
            get age() {
                console.log(`getting the "age" property`);
                console.log(this._age);
            },
            get height() {
                console.log(`getting the "height" property`);
                console.log(this._height);
            }
        };

With the code above, notice that we have to set get age() and get height() when initializing the object. So when we call the code below, we'll get the following results:

        obj.age; // logs 'getting the "age" property' & 5
        obj.height; // logs 'getting the "height" property' & 4

But look what happens when we now add a new property to the object:

        obj.weight = 120; // set a new property on the object
        obj.weight; // logs just 120

Notice that a getting the "weight" property message wasn't displayed like the age and height properties produced.

With ES6 Proxies, we do not need to know the properties beforehand:

        const proxyObj = new Proxy({age: 5, height: 4}, {
            get(targetObj, property) {
                console.log(`getting the ${property} property`);
                console.log(targetObj[property]);
            }
        });

        proxyObj.age; // logs 'getting the age property' & 5
        proxyObj.height; // logs 'getting the height property' & 4

All well and good, just like the ES5 code, but look what happens when we add a new property:

        proxyObj.weight = 120; // set a new property on the object
        proxyObj.weight; // logs 'getting the weight property' & 120

See that?!? A weight property was added to the proxy object, and when it was later retrieved, it displayed a log message!

So some functionality of proxy objects may seem similar to existing ES5 getter/setter methods. But with proxies, you do not need to initialize the object with getters/setters for each property when the object is initialized.

# Proxies Recap
A proxy object sits between a real object and the calling code. The calling code interacts with the proxy instead of the real object. To create a proxy:

    use the new Proxy() constructor
        pass the object being proxied as the first item
        the second object is a handler object
    the handler object is made up of 1 of 13 different "traps"
    a trap is a function that will intercept calls to properties let you run code
    if a trap is not defined, the default behavior is sent to the target object

Proxies are a powerful new way to create and manage the interactions between objects.

# Generators
Whenever a function is invoked, the JavaScript engine starts at the top of the function and runs every line of code until it gets to the bottom. There's no way to stop the execution of the function in the middle and pick up again at some later point. This "run-to-completion" is the way it's always been:

Pausable Functions
If we _do_ want to be able to pause a function mid-execution, then we'll need a new type of function available to us in ES6 - generator functions! Let's look at one:

        function* getEmployee() {
            console.log('the function has started');

            const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

            for (const name of names) {
                console.log( name );
            }

            console.log('the function has ended');
        }

Notice the asterisk (i.e. *) right after the function keyword? That asterisk indicates that this function is actually a generator!

Now check out what happens when we try running this function:

        getEmployee();

        // this is the response I get in Chrome:
        getEmployee {[[GeneratorStatus]]: "suspended", [[GeneratorReceiver]]: Window}

...umm, what? Where's the "the function has started" text from the top of the function? And why didn't we get any names printed to the console?

## Generators & Iterators
When a generator is invoked, it doesn't actually run any of the code inside the function. Instead, it creates and returns an iterator. This iterator can then be used to execute the actual generator's inner code.

        const generatorIterator = getEmployee();
        generatorIterator.next();

Produces the code we expect:

        the function has started
        Amanda
        Diego
        Farrin
        James
        Kagure
        Kavita
        Orit
        Richard
        the function has ended

Now if you tried the code out for yourself, the first time the iterator's .next() method was called it ran all of the code inside the generator. Did you notice anything? The code never paused! So how do we get this magical, pausing functionality?

## The Yield Keyword
The yield keyword is new and was introduced with ES6. It can only be used inside generator functions. yield is what causes the generator to pause. Let's add yield to our generator and give it a try:

        function* getEmployee() {
            console.log('the function has started');

            const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

            for (const name of names) {
                console.log(name);
                yield;
            }

            console.log('the function has ended');
        }

Notice that there's now a yield inside the for...of loop. If we invoke the generator (which produces an iterator) and then call .next(), we'll get the following output:

        const generatorIterator = getEmployee();
        generatorIterator.next();

Logs the following to the console:

        the function has started
        Amanda

It's paused! But to really be sure, let's check out the next iteration:

        generatorIterator.next();

Logs the following to the console:

        Diego

So it remembered exactly where we left off! It took the next item in the array (Diego), logged it, and then hit the yield again, so it paused again.

Now pausing is all well and good, but what if we could send data from the generator back to the "outside" world? We can do this with yield.

## Yielding Data to the "Outside" World
Instead of logging the names to the console and then pausing, let's have the code "return" the name and then pause.

        function* getEmployee() {
            console.log('the function has started');

            const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

            for (const name of names) {
                yield name;
            }

            console.log('the function has ended');
        }

Notice that now instead of console.log(name); that it's been switched to yield name;. With this change, when the generator is run, it will "yield" the name back out to the function and then pause its execution. Let's see this in action:

        const generatorIterator = getEmployee();
        let result = generatorIterator.next();
        result.value // is "Amanda"

        generatorIterator.next().value // is "Diego"
        generatorIterator.next().value // is "Farrin"

# Sending Data into/out of a Generator

So we can get data out of a generator by using the yield keyword. We can also send data back into the generator, too. We do this using the .next() method:

        function* displayResponse() {
            const response = yield;
            console.log(`Your response is "${response}"!`);
        }

        const iterator = displayResponse();

        iterator.next(); // starts running the generator function
        iterator.next('Hello Udacity Student'); // send data into the generator
        // the line above logs to the console: Your response is "Hello Udacity Student"!

Calling .next() with data (i.e. .next('Richard')) will send data into the generator function where it last left off. It will "replace" the yield keyword with the data that you provided.

So the yield keyword is used to pause a generator and used to send data outside of the generator, and then the .next() method is used to pass data into the generator. Here's an example that makes use of both of these to cycle through a list of names one at a time:

        function* getEmployee() {
            const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
            const facts = [];

            for (const name of names) {
                // yield *out* each name AND store the returned data into the facts array
                facts.push(yield name); 
            }

            return facts;
        }

        const generatorIterator = getEmployee();

        // get the first name out of the generator
        let name = generatorIterator.next().value;

        // pass data in *and* get the next name
        name = generatorIterator.next(`${name} is cool!`).value; 

        // pass data in *and* get the next name
        name = generatorIterator.next(`${name} is awesome!`).value; 

        // pass data in *and* get the next name
        name = generatorIterator.next(`${name} is stupendous!`).value; 

        // you get the idea
        name = generatorIterator.next(`${name} is rad!`).value; 
        name = generatorIterator.next(`${name} is impressive!`).value;
        name = generatorIterator.next(`${name} is stunning!`).value;
        name = generatorIterator.next(`${name} is awe-inspiring!`).value;

        // pass the last data in, generator ends and returns the array
        const positions = generatorIterator.next(`${name} is magnificent!`).value; 

        // displays each name with description on its own line
        positions.join('\n'); 

Generators are a powerful new kind of function that is able to pause its execution while also maintaining its own state. Generators are great for iterating over a list of items one at a time so you can handle each item on its own before moving on to the next one. You can also use generators to handle nested callbacks. For example, let's say that an app needs to get a list of all repositories and the number of times they've been starred. Well, before you can get the number of stars for each repository, you'd need to get the user's information. Then after retrieving the user's profile the code can then take that information to find all of the repositories.

Generators will also be used heavily in upcoming additions to the JavaScript language. One upcoming feature that will make use of them is async functions.

## ecmascript-asyncawait
https://github.com/tc39/ecmascript-asyncawait