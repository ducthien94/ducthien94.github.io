 $(function() {
 	
 	let $screen = $("#screen");

 	$(".btn").click(function(event) {

 		let $val = $(event.target).text();
 		$screen.text($val);
 		
 	});

 
 });
