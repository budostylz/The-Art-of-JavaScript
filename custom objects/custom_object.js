

function Employee(firstName, lastName, department) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
    this.hireDate = new Date();
    this.getName = function () {
        return this.firstName + ' ' + this.lastName;
    }
}

function Department(name) {
    this.name = name;
    this.employees = [];
    this.addEmployee = function (emp) {
        this.employee.push(emp);
        emp.department = this.name;
    };
}

var e1 = new Employee('Shaun', 'Lewis', 'Software Engineering');
var e2 = new Employee('Nokia', 'Android', 'Mobile Development');

console.log(e1.firstName + " " + e1.lastName + " : " + e1.department);
console.log(e2.firstName + " " + e2.lastName + " : " + e2.department);




