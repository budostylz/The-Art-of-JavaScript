## Intro
https://youtu.be/82iDVtbr7cY

## What is a Test?
https://youtu.be/KraMqFbLUGU

## Always Failing
https://youtu.be/F8IPoI2E75g

```javascript

function add(x, y){
    return x + y;
}

add(2, 3)

```
## Few Expectations

* Do function add exist?
* Do add(2, 3) return the value of 6?
* Do add('2', '3') return the value of 6?

## Defining Expectations
https://youtu.be/c2yjCKfqstA

<a href="https://stackoverflow.com/questions/588004/is-floating-point-math-broken">Is floating point math broken?</a>

## Refactoring add()
https://youtu.be/tQ1BIQga90E


```javascript


function add(x, y){

    //1. Expect x and y to be integer data types
    if(typeof x && typeof y) !== 'number'{
        throw new Error('Params must be a number'); 
    }

    var result;
    result = x + y;

    //2. Expect 2 + 3 = 5
    //3. Expect 0.1 + 0.2 = 0.3
    if(parseInt(result) !== result){
        result = parseFloat(result.toFixed(1));
    }

    return result;

}

add(x, y)


```

## Writing Expectations in Code
https://youtu.be/GL4TaIugLX4

```javascript

// Example
// Expect add(2, 3) to equal 5
expect(add(2, 3)).toBe(5);

// Example
// Expect add() to throw an error if x/y are not numbers
expect(add(2, 'test')).toThrow();

// You try this test:
// Expect add(0.1, 0.2) to equal 0.3
expect(add(0.1, 0.2)).toBe(0.3)


```

## Solution
https://youtu.be/A5SQ6WjnLAQ

## Lesson Conclusion
https://youtu.be/iiXllTFTOYY


