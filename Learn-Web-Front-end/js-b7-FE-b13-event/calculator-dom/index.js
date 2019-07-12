let screen = document.getElementById('screen');
let num; 

// Hiển thị giá trị lên màn hình
function addIndex(val) {
	screen.value += val;		
}

//Khôi phục màn hình về ban đầu

function ac() {
	
	screen.value = "";

}

//Xóa từng chỉ số 1

function del() {

	screen.value = screen.value.substring(0, screen.value.length - 1); 

}

//Kết quả các phép toán +, -, *, /

function result() {

	let kq = eval(screen.value);
	
	screen.value = kq;

}


//Tính căn bậc 2

function sqrt() {
	num = screen.value;

	 if (num >= 1) {
		screen.value = (Math.sqrt(num)).toFixed(5);
	}

	
	else {
		alert('Số không hợp lệ');
		ac();
	}
}


//Tính phần trăm

function percent() {
	num = screen.value;
	
	if(num > 0) {
		screen.value =  num / 100 ;
	}

	else {
		alert('Số không hợp lệ');
		ac();
	}

}

//Tính bình phương

function square() {

	 num = screen.value;

	if(num !== 0) {
		screen.value = num * num;
	}

	else {
		screen.value = 0;
	}

}

//Tính giai thừa 

function factorial() {
	num = screen.value;
	let result = 1;

	if (num >= 0)  {
		if (num == 0 || num == 1) {
			screen.value = 1;
		}

		else {
			for (let i = 1; i <= num; i++) {
				result *= i;
			}
		}

		screen.value = result;
	}

	else {
		alert('Số không hợp lệ');
		ac();
	}
}




