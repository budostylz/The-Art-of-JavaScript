//simple fetch: run this in console
fetch('https://api.unsplash.com/search/photos?page=1&query=flowers');

let searchedForText = 'trees';


/*
//basic fetch setup
fetch('https://api.unsplash.com/search/photos?page=1&query=flowers')
  .then(function(response) {
      console.log('response')
      console.log(response)
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });

  */

  /*

  //returns response only

  fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
    headers: {
            Authorization: 'Client-ID abc123'
        }
    }).then(function(response) {
        console.log(response)
        debugger; // work with the returned response
   });

   */

   /*
  fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
    headers: {
        Authorization: 'Client-ID abc123'
    }
    }).then(function(response) {
        console.log(response.json);
        return response.json();
    });
    */

    /*
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
    headers: {
        Authorization: 'Client-ID abc123'
    }
    }).then(function(response) {
        return response.json();
    }).then(addImage);

    function addImage(data) {
        debugger;
    }
    */

    fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
    headers: {
        Authorization: 'Client-ID abc123'
    }
    }).then(response => response.json())
    .then(addImage);

    function addImage(data) {
        console.log(data);
        debugger;
    }

