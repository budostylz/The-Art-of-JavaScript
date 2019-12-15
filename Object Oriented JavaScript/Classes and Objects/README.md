## Intro

<a href='https://youtu.be/ZkmB9xKYrVg' target='_blank'>Intro</a>

<a href='https://youtu.be/2qGt43Ia4qk' target='_blank'>Properties and Methods</a>

<a href='https://youtu.be/pZAL0144Sb4' target='_blank'>Categories/Classification of Objects</a>

## Constructor Functions

<a href='https://youtu.be/7XpQpOnkCSk' target='_blank'>Constructor Functions</a>

<a href='https://github.com/udacity/OOJS-screencasts/blob/master/L3-objects-and-classes/11-comparing-objects.js' target='_blank'>Creating a New Object</a>

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new' target='_blank'>new operator</a>

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof' target='_blank'>instanceof</a>

## the this Keyword

Four ways to set `this`

1. First, calling a constructor function with the new keyword sets this to a newly-created object. Recall that creating an instance of Cat earlier had set this to the new bailey object.

2. On the other hand, calling a function that belongs to an object (i.e., a method) sets this to the object itself. Recall that earlier, the dog object's barkTwice() method was able to access properties of dog itself.

3. Third, calling a function on its own (i.e., simply invoking a regular function) will set this to window, which is the global object if the host environment is the browser.

4. The fourth way to call functions allows us to set this ourselves! Don't worry about this approach for now; we'll take a deep dive in the very next section.

![Calling This](https://github.com/budostylz/The-Art-of-JavaScript/blob/master/Object%20Oriented%20JavaScript/Classes%20and%20Objects/callingThis.PNG "Calling This")

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this' target='_blank'>this</a>

## Setting Our Own `this`

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call' target='_blank'>Function.prototype.call()</a>

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply' target='_blank'>Function.prototype.apply()</a>

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind' target='_blank'>Function.prototype.bind()</a>

## Prototypal Inheritance

![Prototypal Inheritance](https://github.com/budostylz/The-Art-of-JavaScript/blob/master/Object%20Oriented%20JavaScript/Classes%20and%20Objects/prototype.PNG "Prototypal Inheritance")

## Finding Properties and Methods on the Prototype Chain

1. First, the JavaScript engine will look at the object's own properties. This means that any properties and methods defined directly in the object itself will take precedence over any properties and methods elsewhere if their names are the same (similar to variable shadowing in the scope chain).

2. If it doesn't find the property in question, it will then search the object's constructor's prototype for a match.

3. If the property doesn't exist in the prototype, the JavaScript engine will continue looking up the chain.

4. At the very end of the chain is the Object() object, or the top-level parent. If the property still cannot be found, the property is undefined.

<a href='http://www.objectplayground.com/' target='_blank'>Object Playground</a>

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty' target='_blank'>Object.prototype.hasOwnProperty()</a>

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf' target='_blank'>Object.prototype.isPrototypeOf()</a>

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf' target='_blank'>Object.getPrototypeOf()</a>

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor' target='_blank'>Object.prototype.constructor</a>

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain' target='_blank'>Inheritance and the prototype chain</a>

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create' target='_blank'>Object.create()</a>






## <a href='https://github.com/budostylz/The-Art-of-JavaScript/blob/master/Object%20Oriented%20JavaScript/Classes%20and%20Objects/practice.js' target='_blank'>Practice Code</a>






































