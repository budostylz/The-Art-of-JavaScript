"use strict";

//empty map
//const employees = new Map();
//console.log(employees);
//set map objects
var employees = new Map();
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
}); //console.log(employees);
//delete employees

employees.delete('julia@udacity.com');
employees.delete('richard@udacity.com'); //console.log(employees);
//clear map

employees.clear(); //console.log(employees);
//check Map elements

var members = new Map();
members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25); //console.log(members.has('Xavier'));
//console.log(members.has('Marcus'));
//get value from key
//console.log(members.get('Evelyn'));
//using default iterator

var iteratorObjForKeys = members.keys(); //console.log( iteratorObjForKeys.next());
//console.log( iteratorObjForKeys.next());
//console.log( iteratorObjForKeys.next());

var iteratorObjForValues = members.values(); //console.log( iteratorObjForKeys.next());
//console.log( iteratorObjForKeys.next());
//console.log( iteratorObjForKeys.next());
//using for...of Loop

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = members[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var member = _step.value;
  } //console.log(member);
  //using forEach Loop

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return != null) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

members.forEach(function (value, key) {
  return console.log(key, value);
});