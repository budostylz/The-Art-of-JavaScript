//browser can keep track of state

var hash = window.location.hash;//includes the #
var content = hash.charAt(1);//Get the second character
switch (content){
	case 2:
		//show tab 2
	break;

	case 3:
		//show tab 3
	break;

	case 1:
	default:
		//show tab 1
	break;
}

function setTab(e){
	if(typeof e == 'undefined') var e = window.event;

	//store tab in variable
	//window.location.hash = '#' + tab;
}

