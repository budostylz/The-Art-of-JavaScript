var U = {

	$: function(id) {
		'use strict';
		if(typeof id === 'string'){
			return document.getElementById(id);
		}

	},//End of $()

	setText: function(id, message){
		'use strict';
		if((typeof id === 'string' && (typeof message === 'string'))){
			var output = this.$(id);

			if(!output) return false;
			if(output.textContent != undefined){
				output.textContent = message;
			}else{
				output.innerText = message;
			}

			return true;
		}

	},

	addEvent: function(obj, type, fn){
		'use strict'
		if(obj && obj.addEventListener){
			obj.addEventListener(type, fn, false);

		}else if(obj && obj.attachEvent){
			obj.attachEvent('on' + type, fn);
			console.log(true);
		}
	},

	removeEvent: function(obj, type, fn){
		'use strict';
		if(obj && obj.removeEventListener){
			obj.removeEventListener(type, fn, false);
		}else if(obj && obj.detachEvent){
			obj,detachEvent('on' + type, fn);
		}

	}//end removeEvent()


};


function updateDuration(){
	'use strict'
	var now = new Date();
	var message = 'It has been ' + now.getTime();
	message += ' seconds since the epoch. (mouseover to update);'
	U.setText('output', message);
}

window.onload = function(){
	'use strict';
	 U.addEvent(U.$('output'), 'mouseover', updateDuration);
	 updateDuration();

};

