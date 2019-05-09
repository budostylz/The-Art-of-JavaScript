# The Web is Growing Up
https://youtu.be/ue0FpyoZhts


Code doesn't work in old browsers
The code we've been looking at in this course is not supported by older browsers. Older browsers that were developed prior to the release of ES6 were developed to support the version of JavaScript at the time (which was ES5.1). If you try running any ES6 code in an older browser, it won't work.

Attempting to run an arrow function in Safari 9, which does not support arrow functions. The result is a syntax error.

https://classroom.udacity.com/nanodegrees/nd019/parts/dd3570ff-515e-48d6-ac3c-771174cb5d40/modules/9c5b7af0-0943-4d6e-b672-520440885aba/lessons/2baa2512-b298-4796-aa5a-9135d82ff298/concepts/17ce250d-ac1d-43de-b994-0c83978b30b8#

## ECMAScript Compatibility Table
http://kangax.github.io/compat-table/es6/

## Ecma International
https://en.wikipedia.org/wiki/Ecma_International

## What is Ecma International
http://www.ecma-international.org/memento/index.html

## ECMAScript® 2015 Language Specification
http://www.ecma-international.org/ecma-262/6.0/index.html

## Resources for developers, by developers.
https://developer.mozilla.org/en-US/

## Google Chrome
https://www.chromestatus.com/features#ES6

## EdgeHTML Platform Status
https://developer.microsoft.com/en-us/microsoft-edge/platform/status/?q=ES6

## Mozilla Firefox 
https://platform-status.mozilla.org

## WebKit(Safari)
https://webkit.org/status/

## HTML5 Cross Browser Polyfills
https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills

## Polyfill
https://en.wikipedia.org/wiki/Polyfill_(programming)

## An example polyfill
The code below is a polyfill for the new ES6 String method, startsWith():

        if (!String.prototype.startsWith) {
            String.prototype.startsWith = function (searchString, position) {
                position = position || 0;
                return this.substr(position, searchString.length) === searchString;
            };
        }

## String.prototype.startsWith
https://github.com/mathiasbynens/String.prototype.startsWith/blob/master/startswith.js

## Polyfill Walkthrough
https://youtu.be/vDmB-gT-U88

## Transpilling
https://youtu.be/Ku2NATTmgks

## Babel Transpiller
https://babeljs.io/repl

