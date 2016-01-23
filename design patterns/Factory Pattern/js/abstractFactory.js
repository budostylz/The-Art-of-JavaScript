/*
    Creational: Based on the concept of creating an object.
    Abstract Factory: 
       Creates an instance of several families of classes without detailing concrete classes. (Addy Osmani)

    When to Use This Pattern:
       An Abstract Factory should be used where a system must be independent from the way the objects it creates are generated or it needs to work with multiple types of objects.(Addy Osmani)

*/

var abstractVehicleFactory = (function () {

    //Storage for our vehicle types
    var types = {};

    return {
        getVehicle: function (type, customizations) {
            console.log("step 2");
            var Vehicle = types[type];
            console.log(Vehicle);//Vehicle is undefined, so it hits null

            return (Vehicle ? new Vehicle(customizations) : null)
        },

        registerVehicle: function (type, Vehicle) {
            
            var proto = Vehicle.prototype;
            console.log("step 1");

            //only register classes that fullfill the vehicle contract   
            if (proto.drive && proto.breakDown) {
                console.log(true);
                    types[type] = Vehicle;
                }
            return abstractVehicleFactory;
        }
    };
})();

// Usage:
abstractVehicleFactory.registerVehicle("car", Car);
abstractVehicleFactory.registerVehicle("truck", Truck);

//Instantiate a new car based on the abstract vehicle type
var car = abstractVehicleFactory.getVehicle("car", {
    color: "lime green",
    state: "like new"
})

// Instantiate a new truck in a similar manner
var truck = abstractVehicleFactory.getVehicle("truck", {
    wheelSize: "medium",
    color: "neon yellow"
});




