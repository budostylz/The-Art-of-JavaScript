const student = {
    name: 'Richard Kalehoff',
    guardian: 'Mr. Kalehoff'
  };
  
const teacher = {
    name: 'Mrs. Wilson',
    room: 'N231'
  }
  
  let message = student.name + ' please see ' + teacher.name + ' in ' + teacher.room + ' to pick up your report card.';

  //console.log(message);

  let note = teacher.name + ',\n\n' +
  'Please excuse ' + student.name + '.\n' +
  'He is recovering from the flu.\n\n' +
  'Thank you,\n' +
  student.guardian;

  //console.log(note);

  let message2 = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;

  //console.log(message2);


const me = {
      myName: 'Shaun',
      greeting: 'Hello, my name is'
  }

const greeting = `${me.greeting} ${me.myName}`;
//console.log(greeting);

var multiNote = `${teacher.name},

  Please excuse ${student.name}.
  He is recovering from the flu.

  Thank you,
  ${student.guardian}`;

  console.log(multiNote);


  