 let screen = document.getElementById('screen');
 


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
function sqrt(num) {
	num = screen.value;
	screen.value = Math.sqrt(num);
}


function percent(num) {
	num = screen.value;
	screen.value =  num / 100 ;
}


function square(num) {
	num = screen.value;
	screen.value = num * num;
}


