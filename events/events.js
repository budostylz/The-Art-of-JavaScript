function reportEvent(e){
	'use strict';

	//get reference to event and event's target
	//browser safe
	 if(typeof e === 'undefined'){
	 		e = window.event;

	 }

	 var target = e.target || e.srcElement;

	 //update output
	 var msg = target.nodeName + ': ' + e.type + '\n';
	 U.$('output').value += msg;



}

function setHandlers(){
	'use strict';

	var events = ['mouseover', 'mouseout', 'click', 'keypress', 'blur'];

	for(var i = 0, count = events.length; i < count; i++){
		console.log(i);
		var checkbox = U.$(events[i]);

		if(checkbox.checked){
			U.addEvent(document.events[i].reportEvent);
		}
		else{
			U.removeEvent(document,events[i], reportEvent);
		}


	}

	U.$('output').value="";
	return false;	
}

window.onload = function(){

	'use strict';
	U.$('theForm').onSubmit =  setHandlers;
}