/*
//ES5
function Plane(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }
  
  // methods "inherited" by all instances
  Plane.prototype.startEngines = function () {
    console.log('starting engines...');
    this.enginesActive = true;
  };
*/

//ES6
class Plane {
    constructor(numEngines) {
      this.numEngines = numEngines;
      this.enginesActive = false;
    }
  
    startEngines() {
      console.log('starting engines…');
      this.enginesActive = true;
    }
  }
  
  var richardsPlane = new Plane(1);
  richardsPlane.startEngines();
  
  var jamesPlane = new Plane(4);
  jamesPlane.startEngines();