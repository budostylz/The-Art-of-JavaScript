//destructuring array
const point = [10, 25, -34];
const [x, y, z] = point;
console.log(x, y, z);

const point_ignored = [10, 25, -34];
const [a, , c] = point_ignored;
console.log(a, c);

let positions = ['Gabrielle', 'Jarrod', 'Kate', 'Fernando', 'Mike', 'Walter'];
let [first, second, third] = positions;
console.log(first,second,third);

//destructuring object
const gemstone = {
    type: 'quartz',
    color: 'rose',
    carat: 21.29
  };
  
  const {type, color, carat} = gemstone;
  
  console.log(type, color, carat);

  //getArea returns function invocation or NaN
  const circle = {
    radius: 10,
    color: 'orange',
    getArea: function() {
      return Math.PI * this.radius * this.radius;
    },
    getCircumference: function() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  let {radius, getArea, getCircumference} = circle;
  //console.log(getArea);

