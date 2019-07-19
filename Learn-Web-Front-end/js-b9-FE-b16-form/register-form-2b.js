jQuery(document).ready(function($) {
	


//Validate username

$("#name").on("input", function(event) {

		// if (!$("#name").val()) {
		// 	$(".username-error").text('* Tên không được để trống');
		// 	$("#name").css({border: "1px solid red"});
		// 	$(".username-error").show();
		// }

		if (!/^([a-zA-Z])[a-zA-Z_-]*[\w_-]*[\S]$|^([a-zA-Z])[0-9_-]*[\S]$|^[a-zA-Z]*[\S]$/.test($("#name").val())) {
			$(".username-error").text('* Tên không hợp lệ');
			$(".username-error").css({
				color: 'red'
			});
			$("#name").css({border: "2px solid red"});
			event.preventDefault();
		}

		else {
			$(".username-error").html('<i class="fas fa-check-circle"></i>');
			$(".username-error").css({
				color: '#59b300'
			});
			$("#name").css({border: "1px solid #a9a9a9"});
		}

	});



//Validate email

$("#email").on("input", function(event) {

		// if (!$("#email").val()) {
		// 	$(".email-error").text('* Email không được để trống');
		// 	$("#email").css({border: "1px solid red"});
		// 	$(".email-error").show();
		// }

		if ($("#email").val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null) {
			$(".email-error").text('* Email không hợp lệ');
			$(".email-error").css({
				color: 'red'
			});
			$("#email").css({border: "2px solid red"});
			event.preventDefault();
		}

		else {
			$(".email-error").html('<i class="fas fa-check-circle"></i>');
			$(".email-error").css({
				color: '#59b300'
			});
			$("#email").css({border: "1px solid #a9a9a9"});;
		}

	});



//Validate phone number

$("#phone").on("input", function(event) {


		// if (!$("#phone").val()) {
		// 	$(".phone-error").text('* Số ĐT không được bỏ trống');
		// 	$("#phone").css({border: "1px solid red"});
		// 	$(".phone-error").show();
		// }

		if (!/((09|03|07|08|05)+([0-9]{8})\b)/g.test($("#phone").val())) {
			$(".phone-error").text('* Số ĐT không hợp lệ');
			$(".phone-error").css({
				color: 'red'
			});
			$("#phone").css({border: "2px solid red"});
			event.preventDefault();
		}

		else {
			$(".phone-error").html('<i class="fas fa-check-circle"></i>');
			$(".phone-error").css({
				color: '#59b300'
			});
			$("#phone").css({border: "1px solid #a9a9a9"});;

		}

	});



//Validate password

$("#pass").on("input", function(event) {

	if (!$("#pass").val()) {
		$(".pass-error").text('* Mật khẩu không hợp lệ');
			$(".pass-error").css({
				color: 'red'
			});
			$("#pass").css({border: "2px solid red"});
			event.preventDefault();
	}
	else {
		$(".pass-error").html('<i class="fas fa-check-circle"></i>');
			$(".pass-error").css({
				color: '#59b300'
			});
			$("#pass").css({border: "1px solid #a9a9a9"});;
	}


});


//Validate confirm password

$("#conf-pass").on("input", function(event) {

	if (!$("#conf-pass").val()) {
		$(".conf-pass-error").text('* Cần nhập lại mật khẩu');
			$(".conf-pass-error").css({
				color: 'red'
			});
			$("#conf-pass").css({border: "2px solid red"});
			event.preventDefault();
	}
	else if ($("#conf-pass").val() !== $("#pass").val()) {
		$(".conf-pass-error").text('* Mật khẩu chưa khớp');
			$(".conf-pass-error").css({
				color: 'red'
			});
			$("#conf-pass").css({border: "2px solid red"});
			event.preventDefault();
	}
	else {
		$(".conf-pass-error").html('<i class="fas fa-check-circle"></i>');
			$(".conf-pass-error").css({
				color: '#59b300'
			});
			$("#conf-pass").css({border: "1px solid #a9a9a9"});;
		}

	});


//Check ngày tháng năm

$("#date").on("input",function(event) {

	if (!$("#date").val()) {
		$(".date-error").text('* Bạn cần chọn ngày tháng năm sinh');
		event.preventDefault();
	}
	else {
		$(".date-error").html('<i class="fas fa-check-circle"></i>');
		$(".date-error").css({
			color: '#59b300'
		});

	}

});


//Check gender

$("#male").click(function() {

	$(".gender-error").html('<i class="fas fa-check-circle"></i>');
	$(".gender-error").css({
		color: '#59b300'
	});

})

$("#female").click(function() {

	$(".gender-error").html('<i class="fas fa-check-circle"></i>');
	$(".gender-error").css({
		color: '#59b300'
	});


})


$("form").on("submit", function(event) {

	let $isMale = $("#male").prop('checked');
	let $isFemale = $("#female").prop('checked');

	if (!$("#name").val()) {
		$(".username-error").text('* Tên không được để trống');
		$("#name").css({border: "1px solid red"});
		$(".username-error").show();
		event.preventDefault();
	}



	if (!$("#email").val()) {
		$(".email-error").text('* Email không được để trống');
		$("#email").css({border: "1px solid red"});
		$(".email-error").show();
		event.preventDefault();
	}


	if (!$("#phone").val()) {
		$(".phone-error").text('* Số ĐT không được bỏ trống');
		$("#phone").css({border: "1px solid red"});
		$(".phone-error").show();
	}


	if (!$("#pass").val()) {
		$(".pass-error").text('* Mật khẩu không được bỏ trống');
		$("#pass").css({border: "1px solid red"});
		$(".pass-error").show();
		event.preventDefault();
	}


	if (!$("#conf-pass").val()) {
		$(".conf-pass-error").text("* Cần nhập lại mật khẩu");
		$("#conf-pass").css({border: "1px solid red"});
		$(".conf-pass-error").show();
		event.preventDefault();
	}


	if (!$("#date").val()) {
		$(".date-error").text('* Bạn cần chọn ngày tháng năm sinh');
		$(".date-error").show();
		event.preventDefault();
	}

	
	if (!$isMale && !$isFemale) {

		$(".gender-error").text('Bạn cần chọn giới tính');
		$(".gender-error").show();
		event.preventDefault();
	}





})





});