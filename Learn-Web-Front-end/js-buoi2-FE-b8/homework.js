// Bài 1. Sử dụng câu lệnh if để viết 1 hàm với 2 tham số bất kỳ
// kiểm tra xem 2 tham số có phải là number không và tìm ra số lớn nhất trong 2 số đó.

function compare(x, y) {
	if (typeof x == 'number' && typeof y == 'number') {
		if (x > y) {
			document.write(`Số lớn hơn là ${x}`);
		}
		else if (x < y) {
			document.write(`Số lớn hơn là ${y}`);	
		}
		else {
			document.write('Không có kết quả');	
		}
	}
}

compare(6,8);
compare(6,5);
compare(9,9);

// Bài 2. Viết 1 hàm dùng để tính giai thừa của 1 số. 
// Kiểm tra tham số đầu vào phải là 1 số nguyên >= 0,sau đó tính giai thừa và in ra kết quả.

function factorial(n) {
	var result;
	if (n === 0 || n === 1) {
		result = 1;
	}
	else { 
		result = n * factorial(n - 1);
	}
	return result;
}
factorial(5);
factorial(3);

// Bài . Một trang web cho phép người dùng tạo tài khoản. 
// Hãy viết hàm kiểm tra tính hợp lệ của thông tin người dùng nhập vào.
// Nếu hợp lệ trả về "Pass", nếu không hợp lệ trả về "Fail".

function check(obj) {
  if (obj.username == '' && obj.username.length > 20) {
    console.log('Tên người dùng ko hợp lệ');
  }
  else if (obj.password.length < 6 && obj.password.length > 32) {
    console.log;('Mật khẩu phải từ 6-32 kí tự')
  }
  else if (obj.confirm !== obj.password) {
    console.log('Mật khẩu không khớp');
  }
  else {
    console.log('Thông tin hợp lệ');
    return true;  
    }
  return false;
}
 var account = {
 	username: 'Thien',
 	password: 'aaabbb',
 	confirm: 'aaabbb'
 }
check(account);



//Bài . In ra màn hình ngày, tháng năm hiện tại và xác định đó là mùa nào trong năm.
var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();

if (month <= 3) {
  document.write(`Hôm nay là ngày ${day} tháng ${month} năm ${year}`);
  document.write('<br>');
  document.write('Hiện tại đang là mùa xuân');
}
else if (month <= 6) {
  document.write(`Hôm nay là ngày ${day} tháng ${month} năm ${year}`);
  document.write('<br>');
  document.write('Hiện tại đang là mùa hạ');
}
else if (month <= 9) {
  document.write(`Hôm nay là ngày ${day} tháng ${month} năm ${year}`);
  document.write('<br>');
  document.write('Hiện tại đang là mùa thu');
}
else {
   document.write(`Hôm nay là ngày ${day} tháng ${month} năm ${year}`);
  document.write('<br>');
  document.write('Hiện tại đang là mùa đông');
}

//  Bài 2. Một sinh viên có điểm kiểm tra môn lập trình web là x dưới dạng số (0 <= x <= 10).
// Hãy chuyển điểm số sang dạng chữ với điều kiện sau:

// Từ 8.5 đến 10: Điểm A
// Từ 7 đến dưới 8.5: Điểm B
// Từ 5.5 đến dưới 7: Điểm C
// Từ 4 đến dưới 5.5: Điểm D
// Từ 0 đến dưới 4: Điểm F

function chuyenDiem(diem) {
  if (diem >= 0 && diem < 4) {
    document.write('Điểm F');
  }
  else if (diem >= 4 && diem < 5.5) {
   	document.write('Điểm D');
  }
  else if (diem >= 5.5 && diem < 7) {
    document.write('Điểm C');
  }
  else if (diem >= 7 && diem < 8.5) {
    document.write('Điểm B');
  }
  else if (diem >= 8.5 && diem <= 10) {
    document.write('Điểm A');
  }
  else {
    document.write('Điểm không hợp lệ');
  }
}

// Bài 3. Viết hàm translate() có tác dụng dịch từ "Hello" sang 5 thứ tiếng 
//khác nhau (tự chọn) với tham số truyền vào là mã quốc gia, 
//sử dụng switch và mặc định dịch sang tiếng Việt.

function translate(lang) {
	switch (lang) {
		case 'Romania':
		document.write('alo');
		break;
		case 'Hmong':
		document.write('nyob zoo');
		break;
		case 'Indonesia':
		document.write('halo');
		break;
		case 'Serbia':
		document.write('здраво');
		break;
		case 'Belarus':
		document.write('прывітанне');
		break;
		default: 
		document.write('Xin chào');
	}
}