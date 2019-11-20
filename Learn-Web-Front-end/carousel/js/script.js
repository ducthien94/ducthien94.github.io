$(function() {

	$(".next").click(function() {
		let currentImg = $(".active");
		let nextImg = currentImg.next();
		if(nextImg.length) {
			currentImg.removeClass('active');
			nextImg.addClass('active');
		}	
	})


	$(".prev").click(function() {
		let currentImg = $(".active");
		let prevImg = currentImg.prev();
		if(prevImg.length) {
			currentImg.removeClass('active');
			prevImg.addClass('active');
		}
	})

	$(".carousel__items > img:gt(0)").hide();
	setInterval(function() { 
		$('.carousel__items > img:first').fadeOut('slow').next().fadeIn('slow').end().appendTo('.carousel__items');
	},  3000);


});