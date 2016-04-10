// send the request
x.send();

// Attach a 'readystatechange' listener to the request 
//  object, with a callback function which
//  will be called when the request completes 
x.addEventListener("readystatechange", function(){
//  Check here for new state and HTTP response code
//   and handle the response
});