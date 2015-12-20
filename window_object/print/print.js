console.log(typeof window.print);

if(typeof window.print === 'function'){
	document.getElementById('printLink').onclick = function(){
		window.print();
	}
}else{consolee.log(false);}
