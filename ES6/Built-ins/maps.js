//empty map
//const employees = new Map();
//console.log(employees);

//set map objects
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

//console.log(employees);


//delete employees
employees.delete('julia@udacity.com');
employees.delete('richard@udacity.com');

//console.log(employees);

//clear map
employees.clear()

//console.log(employees);

//check Map elements
const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

//console.log(members.has('Xavier'));
//console.log(members.has('Marcus'));

//get value from key
//console.log(members.get('Evelyn'));

//using default iterator
let iteratorObjForKeys = members.keys();
//console.log( iteratorObjForKeys.next());
//console.log( iteratorObjForKeys.next());
//console.log( iteratorObjForKeys.next());

let iteratorObjForValues = members.values();
//console.log( iteratorObjForKeys.next());
//console.log( iteratorObjForKeys.next());
//console.log( iteratorObjForKeys.next());

//using for...of Loop
for (const member of members) {
    //console.log(member);
  }

//using forEach Loop
members.forEach((value, key) => console.log(key, value));

