 $(function() {
 	
 	let $screen = $("#screen");
 	let val = "";

 	$(".btn").click(function(event) {
 		$val = $(event.target).text();
 		
 		$screen.html($val);
 	});
 	
 });
