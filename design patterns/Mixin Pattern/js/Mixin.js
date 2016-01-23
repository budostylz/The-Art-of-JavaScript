/*
    
    Mixin Pattern: 
       In object-oriented programming languages, a mixin is a class that contains methods for use by other classes without having to be the parent class of those other classes.(WikiPedia)

    When to Use This Pattern:
      Mixins assist in decreasing functional repetition and increasing function re-use in a system. 
      Where an application is likely to require shared behaviour across object instances,
      we can easily avoid any duplication by maintaining this shared functionality in a Mixin 
      and thus focusing on implementing only the functionality in our system which is truly distinct.(Addy Osmani)

    When Not to Use the Pattern
        That said, the downsides to Mixins are a little more debatable. 
        Some developers feel that injecting functionality into an object prototype is a 
        bad idea as it leads to both prototype pollution and a level of uncertainty 
        regarding the origin of our functions. In large systems this may well be the case.

        I would argue that strong documentation can assist in minimizing the amount 
        of confusion regarding the source of mixed in functions, 
        but as with every pattern, if care is taken during implementation we should be okay.

    (Addy Osmani)


*/

/*
var myMixins = {
    moveUp: function () {
        console.log("move up");
    },

    moveDown: function () {
        console.log("move down");
    },

    stop: function () {
        console.log("stop! in the name of love!");
    }

};

//A skeleton carAnimator constructor
function CarAnimator() {
    this.moveLeft = function () {
        console.log("move left");
    };
}

//A skeleton personAnimator constructor
function PersonAnimator() {
    this.moveRandomly = function () { };
}

//Extend both constructors with our Mixin
_.extend(CarAnimator.prototype, myMixins);
_.extend(PersonAnimator.prototype, myMixins);

//Create a new instance of carAnimator
var myAnimator = new CarAnimator();
myAnimator.moveLeft();
myAnimator.moveDown();
myAnimator.stop();

//Outputs:
//move left
//move down
//stop! in the name of love!

*/

/*-------------------------------------*/

//Define a simple Car constructor
var Car = function (settings) {
    console.log("step 2");
    this.model = settings.model || "no model provided";
    this.color = settings.color || "no colour provided";
};

//Mixin
var Mixin = function () { };

Mixin.prototype = {
    driveForward: function () {
        console.log("drive forward");
    },

    driveBackward: function () {
        console.log("drive backward");
    },

    driveSideways: function (){
        console.log("drive sideways");
    }
};

//Extend an existing object with a method from another
function augment(receivingClass, givingClass) {
    
    console.log("step 1");
    //only provide certain methods
    if (arguments[2]) {
        for (var i = 2, len = arguments.length; i < len; i++) {
            //console.log(arguments[i]);
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
            
        }
    }
    //provide all methods
    else {
        for (var methodName in givingClass.prototype) {
            //console.log(methodName);
            //check to make sure the receiving class doesn't
            //have a method of the same name as the one currently 
            //being processed
            if (!Object.hasOwnProperty.call(receivingClass.prototype, methodName)) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }

            //Alternatively (check prototype chain as well)
            //if ( !receivingClass.prototype[methodName]){
            // receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            //}
        }
    }
}

// Augment the Car constructor to include "driveForward" and "driveBackward"
//augment(Car, Mixin, "driveForward", "driveBackward");

//Create a new Car
/*var myCar = new Car({
    model: "Ford Escort",
    color: "blue"
});*/

//Test to make sure we now have access to the methods
//myCar.driveForward();
//myCar.driveBackward();

//We can also augment Car to include all functions from our mixin
// by not explicitly listing a selection of them
augment(Car, Mixin);

var mySportsCar = new Car({
    model: "Porsche",
    color: "red"
});

mySportsCar.driveSideways();


