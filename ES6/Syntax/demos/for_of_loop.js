

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//for loop
//console.log('Looping using for')
for (let i = 0; i < digits.length; i++) {
  //console.log(digits[i]);
}

//for in
//console.log('Looping using for in')
for (const index in digits) {
  //console.log(digits[index]);
}

/*
    for in iterates over new function added to array prototype
*/
//console.log('Add function to array prototype')
Array.prototype.decimalfy = function() {
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i].toFixed(2);
    }
  };
  
  
  for (const index in digits) {
    //console.log(digits[index]);
  }

  //for of
  console.log('Looping using for of')
  for (const digit of digits) {
    //console.log(digit);
  }
  console.log('Continue using for of')
  for (const digit of digits) {
    if (digit % 2 === 0) {
        continue;
    }
    console.log(digit);
    }

  