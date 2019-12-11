/* First-Class Functions */

//higher-order function
function alertThenReturn() {
  alert('Message 1!');

  return function () {
    alert('Message 2!');
  };
}

function higherOrderFunction(){
  return function (){
    return 8;
  }
}

//console.log( higherOrderFunction()() )

//const innerFunction = alertThenReturn();

//alertThenReturn()
//alertThenReturn()()
//innerFunction()


const musicData = [
  { artist: 'Adele', name: '25', sales: 1731000 },
  { artist: 'Drake', name: 'Views', sales: 1608000 },
  { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
  { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
  { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
  { artist: 'Original Broadway Cast Recording', 
    name: 'Hamilton: An American Musical', sales: 820000 },
  { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
  { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
  { artist: 'Rihanna', name: 'Anti', sales: 603000 },
  { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

//array.map()
const albumSalesStrings = musicData.map(function (record){
  let message = `${record.name} by ${record.artist} sold ${record.sales} copies`;
  return message;
})


//console.log(albumSalesStrings);

//array.filter()
const results = musicData.filter(function (album) {
  return album.name.length >= 10 && album.name.length <= 25
})

console.log( results )
