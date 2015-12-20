

function Employee(firstName, lastName, department) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
    this.hireDate = new Date();
    this.getName = function () {
        return this.firstName + ' ' + this.lastName;
    }
}



var e1 = new Employee('Shaun', 'Lewis', 'Software Engineering');

//create method by accessing object's prototype
Employee.prototype.getNameBackwards = function () {

    return this.lastName + " " + this.firstName;
}

console.log(e1.getNameBackwards());







