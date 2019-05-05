//normal function
const upperizedNames1 = ['Farrin', 'Kagure', 'Asser'].map(function(name) { 
    return name.toUpperCase();
  });

//arrow function
const upperizedNames2 = ['Farrin', 'Kagure', 'Asser'].map(
    name => name.toUpperCase()
  );

  console.log(upperizedNames2)