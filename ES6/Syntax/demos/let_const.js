/*function getClothing(isCold) {
    if (isCold) {
      var freezing = 'Grab a jacket!';
    } else {
      var hot = 'It’s a shorts kind of day.';
      console.log(freezing);
    }
  }*/

  /*
  function getClothing(isCold) {
    if (isCold) {
      const freezing = 'Grab a jacket!';
    } else {
      const hot = 'It’s a shorts kind of day.';
      console.log(freezing);
    }
  }
  */
  //getClothing(false);

  /*
let instructor = 'James';
instructor = 'Richard';
console.log(instructor);
*/

/*
 * Programming Quiz: Using Let and Const (1-1)
 */

const CHARACTER_LIMIT = 255;
const posts = [
	"#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!",
	"Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app",
	"I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"
];

// prints posts to the console
function displayPosts() {
	for (let i = 0; i < posts.length; i++) {
		console.log(posts[i].slice(0, CHARACTER_LIMIT));
	}
}

displayPosts();
