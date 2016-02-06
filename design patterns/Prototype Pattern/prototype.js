var myCar = {

    name: "Ford Escort",

    drive: function () {
        console.log(" We're driving.");
    },

    panic: function () {
        console.log("Wait. How do you stop this thing?");
    }
};

//Use Object.create to instantiate a new car
//var yourCar = Object.create( myCar );

//Now we can see that one is a prototype of the other
//console.log(yourCar.name);

/*----------------------Example 2 (not meant ro be compiled)------------------------------*/

/*
var vehicle = {
    getModel: function () {
        console.log("The model of this vehicle is.. " + this.model);
    }
};

var car = Object.create(vehicle, {

    "id": {
        value: MY_GLOBAL.nextId(),
        // writable: false, configurable:false by default
        enumerable: true
    },

    "model": {
        value: "Ford",
        enumerable: true
    }

});

*/

var vehiclePrototype = {

    init: function ( carModel ) {
        this.model = carModel;
    },

    getModel: function () {
        console.log("The model of this vehicle is.. " + this.model);
    }
};

function vehicle( model ) {
    function F() { };//empty class F
    F.prototype = vehiclePrototype;//create F class definition using prototype for vehiclePrototype

    var f = new F();//instantiate class F

    f.init(model);//call F init() method
    
    return f;//return this.model
}

var car = vehicle("Ford Escort");// start point
car.getModel();//end point


//linking prototype to object instance
/*var beget = (function () {
    
    function F() { }

    return function (proto) {
        F.prototype = proto;
        return new F();
    }


})();*/