function arithmetic1(){

	//use now for now() browsers || use getTime() for older browsers
	var now = Date.now() || (newDate()).getTime();

	//set two week interval
	var interval = 1000 * 60 * 60* 24 * 14;

	//set two weeks into the future
	var diff = now + interval;

	//set current dtg
	var present = new Date();

	var two_weeks_ahead = new Date(diff);

	console.log(present);
	console.log(two_weeks_ahead);
}

//load arithmetic1() when browser loads
window.onload = arithmetic1;