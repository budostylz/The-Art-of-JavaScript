##AJAX Tutorial

http://www.w3schools.com/ajax/default.asp

## AJAX Steps

  1. Create AJAX Object
  2. Identify Result Handler(Identify State)
  3. Making a Request
  4. Handling Server Response
  

// send the request
x.send();

// Attach a 'readystatechange' listener to the request 
//  object, with a callback function which
//  will be called when the request completes 
x.addEventListener("readystatechange", function(){
//  Check here for new state and HTTP response code
//   and handle the response
});
