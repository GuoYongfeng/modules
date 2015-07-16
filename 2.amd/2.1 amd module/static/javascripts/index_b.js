define(['./index_a.js'], function(A){


	function B(){
		A();
		alert('module B');
	}

	return B;
})