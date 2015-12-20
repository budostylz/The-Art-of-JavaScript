//set namespace

var someNamespace = {
    someProperty : 23,
    someMethod: function () {
        return "accessing someMethod in someNamespace";
    }

};


var property = someNamespace.someProperty;

var func = someNamespace.someMethod;

console.log("property : " + property + "\n" + "function " + func() );
