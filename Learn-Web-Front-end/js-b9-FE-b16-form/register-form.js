jQuery(document).ready(function($) {

	
	$('form').on("submit", function(event) {
		
		let $isMale = $("#male").prop('checked');
		let $isFemale = $("#female").prop('checked');
		
		//Check họ tên

		if (!$("#name").val()) {
			$("#name").next("span").text('* Bạn cần nhập họ tên');
			$("#name").css({border: "1px solid red"});
			event.preventDefault();
		}
		else if (!/^([a-zA-Z])[a-zA-Z_-]*[\w_-]*[\S]$|^([a-zA-Z])[0-9_-]*[\S]$|^[a-zA-Z]*[\S]$/.test($("#name").val())) {
			$("#name").next("span").text('Tên bắt đầu bằng kí tự chữ. Bao gồm: chữ, số và dấu _');
			$("#name").css({border: "1px solid red"});
			event.preventDefault();
		}
		else {
			$("#name").next("span").text('');
			$("#name").css({border: "1px solid #a9a9a9"});
		}


		//Check email

		if (!$("#email").val()) {
			$("#email").next("span").text('* Bạn cần nhập email');
			$("#email").css({border: "1px solid red"});
			event.preventDefault();
		}

		else if ($("#email").val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null) {
			$("#email").next("span").text('* Email không hợp lệ');
			$("#email").css({border: "1px solid red"});
			event.preventDefault();
		}

		else {
			$("#email").next("span").text('');
			$("#email").css({border: "1px solid #a9a9a9"});
	
		}


		//Check Số điện thoại

		if (!$("#phone").val()) {
			$("#phone").next("span").text('* Bạn chưa nhập số điện thoại');
			$("#phone").css({border: "1px solid red"});
			event.preventDefault();
		}
		else if (!/((09|03|07|08|05)+([0-9]{8})\b)/g.test($("#phone").val())) {
			$("#phone").next("span").text('* Số điện thoại không hợp lệ');
			$("#phone").css({border: "1px solid red"});
			event.preventDefault();
		}

		else {
			$("#phone").next("span").text('');
			$("#phone").css({border: "1px solid #a9a9a9"});
	
		}


		//Check password

		if (!$("#pass").val()) {
			$("#pass").next("span").text('* Mật khẩu không được bỏ trống');
			$("#pass").css({border: "1px solid red"});
			event.preventDefault();
		}
		else {
			$("#pass").next("span").text('');
			$("#pass").css({border: "1px solid #a9a9a9"});
		}


		//Check conf-pass

		if (!$("#conf-pass").val()) {
			$("#conf-pass").next("span").text('* Cần nhập lại mật khẩu');
			$("#conf-pass").css({border: "1px solid red"});
			event.preventDefault();
		}
		else if ($("#conf-pass").val() !== $("#pass").val()) {
			$("#conf-pass").next("span").text('* Chưa khớp mật khẩu');
			$("#conf-pass").css({border: "1px solid red"});
			event.preventDefault();
		}
		
		else {
			$("#conf-pass").next("span").text('');
			$("#conf-pass").css({border: "1px solid #a9a9a9"});
		}

		//Check ngày tháng năm

		if (!$("#date").val()) {
			$("#date").next('span').text('* Bạn cần chọn ngày tháng năm sinh');
			event.preventDefault();
		}
		else {
			$("#date").next('span').text('');
		}


		//Check giới tính

		if ($isMale == false && $isFemale == false) {
			$("#lab").next("span").text('* Bạn cần chọn giới tính');
			event.preventDefault();
		}
		else {
			$("#lab").next().next("span").text('');
		}

		
		if ($("#name").val() && $("#email").val() && $("#phone").val() && $("#pass").val() && $("#conf-pass").val() && $("#date").val() && (isMale == true || isFemale == true)) {
			alert('Đăng ký thành công');
		}
		

	});
});