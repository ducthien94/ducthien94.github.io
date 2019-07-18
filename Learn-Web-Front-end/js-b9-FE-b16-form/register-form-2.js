jQuery(document).ready(function($) {
	
	

	$(".username-error").hide();
	$(".email-error").hide();
	$(".phone-error").hide();
	$(".pass-error").hide();
	$(".conf-pass-error").hide();
	$(".date-error").hide();
	$(".gender-error").hide();


//Validate username

$("#name").blur(function(event) {

		// if (!$("#name").val()) {
		// 	$(".username-error").text('* Tên không được để trống');
		// 	$("#name").css({border: "1px solid red"});
		// 	$(".username-error").show();
		// }

		if (!/^([a-zA-Z])[a-zA-Z_-]*[\w_-]*[\S]$|^([a-zA-Z])[0-9_-]*[\S]$|^[a-zA-Z]*[\S]$/.test($("#name").val())) {
			$(".username-error").text('* Tên không hợp lệ');
			$("#name").css({border: "1px solid red"});
			$(".username-error").show();
			event.preventDefault();
		}

		else {
			$(".username-error").show();
			$(".fas").css({
				color: '#59b300'
			});
			$("#name").css({border: "1px solid #a9a9a9"});
		}

	});



//Validate email

$("#email").blur(function(event) {

		// if (!$("#email").val()) {
		// 	$(".email-error").text('* Email không được để trống');
		// 	$("#email").css({border: "1px solid red"});
		// 	$(".email-error").show();
		// }

		if ($("#email").val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null) {
			$(".email-error").text('* Email không hợp lệ');
			$("#email").css({border: "1px solid red"});
			$(".email-error").show();
			event.preventDefault();
		}

		else {
			$(".email-error").show();
			$(".fas").css({
				color: '#59b300'
			});
			$("#email").css({border: "1px solid #a9a9a9"});;
		}

	});



//Validate phone number

$("#phone").blur(function(event) {


		// if (!$("#phone").val()) {
		// 	$(".phone-error").text('* Số ĐT không được bỏ trống');
		// 	$("#phone").css({border: "1px solid red"});
		// 	$(".phone-error").show();
		// }

		if (!/((09|03|07|08|05)+([0-9]{8})\b)/g.test($("#phone").val())) {
			$(".phone-error").text('* Số điện thoại không hợp lệ');
			$("#phone").css({border: "1px solid red"});
			$(".phone-error").show();
			event.preventDefault();
		}

		else {
			$(".phone-error").show();
			$(".fas").css({
				color: '#59b300'
			});
			$("#phone").css({border: "1px solid #a9a9a9"});

		}

	});



//Validate password

$("#pass").blur(function(event) {

	if (!$("#pass").val()) {
		$(".pass-error").text('* Mật khẩu không được bỏ trống');
		$("#pass").css({border: "1px solid red"});
		$(".pass-error").show();
		event.preventDefault();
	}
	else {
		$(".pass-error").show();
		$(".fas").css({
			color: '#59b300'
		});
		$("#pass").css({border: "1px solid #a9a9a9"});
	}


});


//Validate confirm password

$("#conf-pass").blur(function(event) {

	if (!$("#conf-pass").val()) {
		$(".conf-pass-error").text("* Cần nhập lại mật khẩu");
		$("#conf-pass").css({border: "1px solid red"});
		$(".conf-pass-error").show();
	}
	if ($("#conf-pass").val() !== $("#pass").val()) {
		$(".conf-pass-error").text("* Mật khẩu chưa khớp");
		$("#conf-pass").css({border: "1px solid red"});
		$(".conf-pass-error").show();
		event.preventDefault();
	}
	else {
		$(".conf-pass-error").show();
		$(".fas").css({
			color: '#59b300'
		});
			// $("#conf-pass").css({border: "1px solid #a9a9a9"});
		}

	});


//Check ngày tháng năm

$("#date").blur(function(event) {

	if (!$("#date").val()) {
		$(".date-error").text('* Bạn cần chọn ngày tháng năm sinh');
		$(".date-error").show();
		event.preventDefault();
	}
	else {
		$(".date-error").show();
		$(".fas").css({
			color: '#59b300'
		});

	}

});


//Check gender

$("#male").click(function() {

	$(".gender-error").show();
	$(".fas").css({
		color: '#59b300'
	});

})

$("#female").click(function() {

	$(".gender-error").show();
	$(".fas").css({
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
	else {
		$(".username-error").css({
			color: '#59b300'
		});
		$("#name").css({border: "1px solid #a9a9a9"});
		$(".username-error").html('<i class="fas fa-check-circle"></i>');

	}


	if (!$("#email").val()) {
		$(".email-error").text('* Email không được để trống');
		$("#email").css({border: "1px solid red"});
		$(".email-error").show();
		event.preventDefault();
	}
	else {
		$(".email-error").css({
			color: '#59b300'
		});
		$("#email").css({border: "1px solid #a9a9a9"});
		$(".email-error").html('<i class="fas fa-check-circle"></i>');

	}


	if (!$("#phone").val()) {
		$(".phone-error").text('* Số ĐT không được bỏ trống');
		$("#phone").css({border: "1px solid red"});
		$(".phone-error").show();
	}
	else {
		$(".phone-error").css({
			color: '#59b300'
		});
		$("#phone").css({border: "1px solid #a9a9a9"});
		$(".phone-error").html('<i class="fas fa-check-circle"></i>');

	}



	if (!$("#pass").val()) {
		$(".pass-error").text('* Mật khẩu không được bỏ trống');
		$("#pass").css({border: "1px solid red"});
		$(".pass-error").show();
		event.preventDefault();
	}
	else {
		$(".pass-error").css({
			color: '#59b300'
		});
		$("#pass").css({border: "1px solid #a9a9a9"});
		$(".pass-error").html('<i class="fas fa-check-circle"></i>');

	}


	if (!$("#conf-pass").val()) {
		$(".conf-pass-error").text("* Cần nhập lại mật khẩu");
		$("#conf-pass").css({border: "1px solid red"});
		$(".conf-pass-error").show();
		event.preventDefault();
	}
	else {
		$(".conf-pass-error").css({
			color: '#59b300'
		});
		$("#conf-pass").css({border: "1px solid #a9a9a9"});
		$(".conf-pass-error").html('<i class="fas fa-check-circle"></i>');

	}


	if (!$("#date").val()) {
		$(".date-error").text('* Bạn cần chọn ngày tháng năm sinh');
		$(".date-error").show();
		event.preventDefault();
	}
	else {
		$(".date-error").css({
			color: '#59b300'
		});
		$("#date").css({border: "1px solid #a9a9a9"});
		$(".date-error").html('<i class="fas fa-check-circle"></i>');

	}

	
	if ($isMale == false && $isFemale == false) {

		$(".gender-error").text('Bạn cần chọn giới tính');
		$(".gender-error").show();
		event.preventDefault();
	}





})





});