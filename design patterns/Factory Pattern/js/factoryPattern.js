/*
    Creational: Based on the concept of creating an object.
    Factory Pattern: 
        This is particularly useful if the object creation process is relatively complex, e.g. if it strongly depends on dynamic factors or application configuration.(Addy Osmani)

    When to Use This Pattern:
        The Factory pattern can be especially useful when applied to the following situations:
            •When our object or component setup involves a high level of complexity
            •When we need to easily generate different instances of objects depending on the environment we are in
            •When we're working with many small objects or components that share the same properties
            •When composing objects with instances of other objects that need only satisfy an API contract (aka, duck typing) to work. This is useful for decoupling.
    (Addy Osmani)

    When Not to Use This Pattern
        Unless providing an interface for object creation is a design goal for the library or framework we are writing, I would suggest sticking to explicit constructors to avoid the unnecessary overhead.(Addy Osmani)

*/

// A constructor for defining new cars. Constructors used behind the scenes.
function Car(options) {
    console.log("step 3");
    //some defaults
    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "silver";
}

//A constructor for defining new trucks
function Truck(options) {
    this.state = options.state || "used",
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
}

//Define a skeleton vehicle factory
function VehicleFactory() { console.log("step 1"); }

//Define the prototypes and utilities for this factory

//Our default vehicleClass is Car 
VehicleFactory.prototype.vehicleClass = Car;

//Our Factory method for creating new Vehicle instances
VehicleFactory.prototype.createVehicle = function (options) {
    console.log("step 2");
    console.log(options);//Passed in options of car properties
    switch (options.vehicleType) {
        case "car":
            this.vehicleClass = Car;
            break;
        case "truck":
            this.vehicleClass = Truck;
            break;
        //defaults to VehicleFactory.prototype.vehicleClass (Car)

    }//end switch

    return new this.vehicleClass(options);
};



//Create an instance of our factory that makes cars and trucks
//var carFactory = new VehicleFactory(); //start point

/*var car = carFactory.createVehicle({
    vehicleType: "car",
    color: "yellow",
    doors: 6
});*/

//Test to confirm our car was created using the vehicleClass/prototype Car

//Outputs: true
//console.log(car instanceof Car);

//Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
//console.log(car);

/*-------Approach 1: modify a Vehicle Factory instance to use the Truck class*/

/*var movingTruck = carFactory.createVehicle({
    vehicleType: "truck",
    state: "like new",
    color: "red",
    wheelSize: "small"
});

//Test to confirm our truck was created with the vheicleClass/prototype Truck

//Outputs: true
console.log(movingTruck instanceof Truck);

//Outputs: Truck object of color "red", a "like new" state and a "small" wheelSize
console.log(movingTruck);*/

/*Approach 2: Subclass Vehicle Factory to create a factory class that builds Trucks*/

/*function TruckFactory() { }
TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;

var truckFactory = new TruckFactory();
var myBigTruck = truckFactory.createVehicle({
    state: "omg..so bad.",
    color: "pink",
    wheelSize: "so big"
});*/

//Confirms that myBigTruck was created with the prototype Truck
//Outputs: true
//console.log(myBigTruck instanceof Truck);

//Outputs: Truck object with the color 'pink', wheelSize 'so big' and state 'omg, so bad'
//console.log(myBigTruck);








