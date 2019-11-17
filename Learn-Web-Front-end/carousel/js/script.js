$(function() {

	$(".nextBtn").click(function() {
		let currentImg = $(".active");
		let nextImg = currentImg.next();
		if(nextImg.length) {
			currentImg.removeClass('active');
			nextImg.addClass('active');
		}	
	})


	$(".prevBtn").click(function() {
		let currentImg = $(".active");
		let prevImg = currentImg.prev();
		if(prevImg.length) {
			currentImg.removeClass('active');
			prevImg.addClass('active');
		}
	})


});