# Ajax call with the Fetch API
https://youtu.be/_nFeVVBzWa4

# What is Fetch
Fetch is the new way to make network requests! After looking at all of the manual setup that needs to go into setting up an XMLHttpRequest, you might be feeling (like I sure did!) that a lot of complexity went into making a simple request. If all I want is an image from Unsplash, why do I need to do all this setup before I can even make the request? I just want an image file, so let me just ask for the file without having to drill through the unnecessarily complicated XHR spec.

Fetch is a new API that was built to make requesting resources (primarily across a network) a whole lot easier. One thing that makes the new Fetch API a lot nicer than the old XHR way of doing things is that Fetch is promise-based!

Hopefully you're sold that Fetch is the way of the future for making requests, so let's see it in action!

⚠️ Fetch Is Promise-based ⚠️
As mentioned above, the new Fetch API utilizes Promises under the hood. If you've got a handle on how Promises work, then give yourself a pat on the back then skip down to the next section. If the word "Promises" makes you feel a little queasy and unsure of your life's future, don't panic! Breathe! Then head over to our short course on JavaScript Promises to level up your JavaScript muscles.

⚠️ Might Need A Polyfill ⚠️

## Can I use Fetch
https://caniuse.com/#feat=fetch

## window.fetch polyfill
https://github.com/github/fetch

## Write The Fetch Request
Ok, let's look at a sample fetch request, and then we'll make a fetch request for an image from Unsplash.

        fetch('<URL-to-the-resource-that-is-being-requested>');

So yeah...that's it. In it's smallest form, a Fetch request is just the fetch() function and a string to the resource that's being requested. It's just so short and easy to read (sigh I think I'm in love!). Let's take a peek at what a real request looks like:

        fetch('https://api.unsplash.com/search/photos?page=1&query=flowers');

If you try running this Fetch request on the console, then you should get a Promise returned to you.

💡 Cross-Origin Issues? 💡
Did you just try running the Fetch request and it didn't work? Were you running it on Unsplash's website? If not, make sure you go to https://unsplash.com/, open the console, and try running it from there.

## Unsplash
https://unsplash.com

Did you just try running the Fetch request and it didn't work? Were you running it on Unsplash's website? If not, make sure you go to https://unsplash.com/, open the console, and try running it from there.

Just because Fetch is new and awesome and is replacing the XHR object for making asynchronous network requests doesn't mean it can bypass the rules for making those network requests. Fetch requests still need to obey the cross-origin protocol of how resources are shared. This means that, by default, you can only make requests for assets and data on the same domain as the site that will end up loading the data.

Remember that Unsplash requires an Authorization header to make a request through its API. Check out these links on Fetch's documentation to see how to add an Authorization header to the Fetch request.

 https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch

 https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

 https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

 ## Changing The HTTP Method
So the default HTTP method for a Fetch request is the GET method. We can choose a different HTTP method by passing a method property in the configuration object:

        fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
            method: 'POST'
        });

This will send the request with the POST HTTP header.

Fetch's specification does not limit what HTTP methods can be used, although it does recommend that all methods are written in uppercase for consistency with the HTTP Verbs specification.

# Handle The Response
Ok, you've learned about making a Fetch request, and you've sent a few of them off...but nothing happened because we didn't tell our code to handle the response. Let's get our code ready to handle the response.

Remember that Fetch is Promise-based. This means that when we fire of the Fetch request, it will automatically return a promise that we can use to listen for the response.

💡 Javascript Promises Reminder 💡
Dealing with the returned data from a Fetch request is all done with Promises, so if any of this looks confusing or you don't know how .then() works or why it's needed, check out our course on JavaScript Promises.

Since a Fetch request returns a Promise, then all you have to do is call .then() on that Promise.

        fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
            headers: {
                Authorization: 'Client-ID abc123'
            }
        }).then(function(response) {
            debugger; // work with the returned response
        });

If you haven't already, put the code above in our JavaScript file and search for something. Because we added a debugger line inside the .then() function, the code will pause on the debugger line when the response is finally returned.

## The Response Object
See how the response that's returned is of the Response type? This Response object is new with the Fetch API and is what's returned when a Fetch request resolves.

Ok, so that's great and all, but did you notice anything weird about the response object? It didn't have any of the data that we searched for! That's because a response object has information about the response itself, it doesn't have the data...yet. To actually get the data, we need to get the "body" of the response.

Since the Unsplash API we're using will return JSON to us, we just need to call .json() on the response variable.

        fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
            headers: {
                Authorization: 'Client-ID abc123'
            }
        }).then(function(response) {
            return response.json();
        });

The .json() method on a Response object returns a Promise, so we need to chain on another .then() to actually get and start using the returned data. This time, let's call addImage to pass it the returned data:

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

There are a number of methods on a Response object. Each one will let the code handle different response types.

For example, the .json() method that we've looked at will take the response and convert it to from JSON. What happens if we requested an image, instead?

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Making_fetch_requests

https://davidwalsh.name/fetch

## ES6 Arrow Function
You might be thinking that this Fetch request is starting to look like a lot of code...and it is. One quick way to shrink the amount of code is to use an ES6 Arrow function! We can convert the first .then() function that gets the response, calls the .json() method on it, and returns a Promise all to a single line with an Arrow function:

        // without the arrow function
        }).then(function(response) {
            return response.json();
        })

        // using the arrow function
        }).then(response => response.json())

So the new request would be:

        fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
            headers: {
                Authorization: 'Client-ID abc123'
            }
        }).then(response => response.json())
        .then(addImage);

        function addImage(data) {
            debugger;
        }

## Display The Image On The Page
We're making our request to Unsplash, it's returning a response that we're then converting to JSON, and now we're seeing the actual JSON data. Fantastic! All we need to do now is display the image and caption on the page.

Here's the code that I'm using:

        function addImage(data) {
            let htmlContent = '';
            const firstImage = data.results[0];

            if (firstImage) {
                htmlContent = `<figure>
                    <img src="${firstImage.urls.small}" alt="${searchedForText}">
                    <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
                </figure>`;
            } else {
                htmlContent = 'Unfortunately, no image was returned for your search.'
            }

            responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
        }

This code will:

    get the first image that's returned from Unsplash
    create a <figure> tag with the small image
    creates a <figcaption> that displays the text that was searched for along with the first name of the person that took the image
    if no images were returned, it displays an error message to the user

## Handling Errors
Our app is now done with getting the image from Unsplash!...almost. We're requesting the image and adding it to the page, but this is only one possible outcome. Granted, it's the most likely way that the app will end up, but we're not handling any errors. What errors could possible happen you ask? A couple I can think of are:

        Issues with the network
        Issues with the fetch request
        Unsplash not having an image for the searched term

We're handling this last one in the addImage function. For the other two, we can use chain on a .catch() method to the Fetch request!

Again, because a Fetch request returns a Promise .catch() is available to us from the Promise API.

So let's add a .catch() method to handle errors:

        fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
            headers: {
                Authorization: 'Client-ID abc123'
            }
        }).then(response => response.json())
        .then(addImage)
        .catch(e => requestError(e, 'image'));

        function addImage(data) {
            debugger;
        }

        function requestError(e, part) {
            console.log(e);
            responseContainer.insertAdjacentHTML('beforeend', `<p class="network-warning">Oh no! There was an error making a request for the ${part}.</p>`);
        }

This code adds the requestError function and adds a .catch() request to the end of the Promise chain. The .catch() function will receive an error object (that we're storing in the e variable) and in turn calls requestError passing along the error object and the request that failed. If the Promise rejects anywhere along the line, the requestError function will log the error and display a warning message to the user that the request failed for some reason.

## Fetch Outro
https://youtu.be/Z8YyDT4YSsE
