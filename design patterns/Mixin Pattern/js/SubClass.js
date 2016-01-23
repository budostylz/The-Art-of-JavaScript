/*
    Should B need to invoke a method in A that has been overridden, we refer to this as method chaining. 
    Should B need to invoke the constructor A (the superclass), we call this constructor chaining.
        (Addy Osmani)

*/

//Person SuperClass
var Person = function (firstName, lastName) {
    console.log("Step 1 and 3");
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = "male";
};

// a new instance of Person can then easily be created as follows:
var clark = new Person("Clark", "Kent");

//Define a subclass constructor for 'Superhero':
var Superhero = function (firstName, lastName, powers) {

   
    console.log("step 2");
    /*Invoke the superclass constructor on the new object
    then use .call() to invoke the construcor as a method of
    the object to be initialized*/

    Person.call(this, firstName, lastName);

    //Finally, store their powers, a new array of traits not found in a normal person
    this.powers = powers;


};

Superhero.prototype = Object.create(Person.prototype); //Superhero inheriting attributes from Person
var superman = new Superhero("Clark", "Kent", ["flight", "heat-vision"]);//create superman
console.log(superman);

