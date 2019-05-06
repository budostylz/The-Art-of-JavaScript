const sym1 = Symbol('apple');
console.log(sym1);

const sym2 = Symbol('banana');
const sym3 = Symbol('banana');
console.log(sym2 === sym3);

/*
//overwrites previous banana
const bowl = {
    'apple': { color: 'red', weight: 136.078 },
    'banana': { color: 'yellow', weight: 183.151 },
    'orange': { color: 'orange', weight: 170.097 },
    'banana': { color: 'yellow', weight: 176.845 }
  };
  console.log(bowl);
  */

  
//bannana not overwritten using symbols
 const bowl = {
    [Symbol('apple')]: { color: 'red', weight: 136.078 },
    [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
    [Symbol('orange')]: { color: 'orange', weight: 170.097 },
    [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
  };
  console.log(bowl);