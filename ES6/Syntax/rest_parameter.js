const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
//console.log(total, subtotal, tax, items);

printPackageContents('cheese', 'eggs', 'milk', 'bread');
function printPackageContents(...items){
    for (const item of items){
        //console.log(item)
    }
}

//arguments
function sum1() {
    let total = 0;  
    for(const argument of arguments) {
      total += argument;
      console.log('Argument: ' +argument);
    }
    console.log('Total Arguments: ' + total);
    return total;
  }

//...Rest replacing arguments
function sum2(...nums) {
    let total = 0;  
    for(const num of nums) { 
      total += num;
      console.log('Num: ' + num);
    }
    console.log('Total Arguments: ' + total);
    return total;
  }

  //sum1(1,2)
  sum2(1,2)