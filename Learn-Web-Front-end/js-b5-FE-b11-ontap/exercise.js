//PHẦN XỬ LÝ SỐ

//Bài 1
// Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu

function calculateVolumn(r) {
	
	var result = ((4 * (Math.PI * (r * r * r))) / 3);

	if (r >= 0 && r != null) {

		return Number(result.toFixed(3));

	}

	else return false;
	
}


calculateVolumn(5); 


 // Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. 
 // Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7). 

 function sum(a, b) {

 	let result = 0;

 	if (a < b) {

 		for (let  i = a + 1; i < b; i++) {
 			result += i;
 		}
 	}

 	else if (a > b) {

 		for (let i = b + 1; i < a; i++) {
 			result +=i;
 		}
 	}


 	else return false;

 	return result;

 }



sum(6,1);  //14
sum(3,8);  //22



 // Bài 3: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, 
 // kết quả trả về true hoặc false

 function checkPrimeNumber(num) {

 	if (num < 2) return false;

 	else {

 		for (let i = 2; i < num; i++) {
 			if (num % i == 0) return false;
 		}

 	}

 	return true;

 }

checkPrimeNumber(2);  //true
checkPrimeNumber(15); //false


 // Bài 4: Cho 1 số nguyên dương bất kỳ.
 // Tính tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng tham số truyền vào

 function sum(num) {

 	let result_1 = 0;
 	let result_2 = 0;


 	for (let i = 0; i <= num; i++) {

 		if (checkPrimeNumber(i) == true) {
 			result_1 += i;
 		}

 	}

 	return result_1;

 	if (num = !isNaN(num)) {

 		for (let j = 0; j <= num; j++){

 			if (checkPrimeNumber(j) == true ) {
 				result_2 += j;
 			}

 		}

 	}

 	return result_2;
 	
 }   




 sum(7); //17 (2 + 3 + 5 + 7)
 sum(4); //5 (2 + 3)



// Bài 5: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó

function check(num) {

	let isNumber = !isNaN(num);
	let isInteger = Number.isInteger(num);

	if (isNumber && isInteger && num >= 0) return true;
	else return false;

}

function sum(num) {

	if (check(num)) {

		let result = 0;

		for (let i = 0; i <= num; i++) {
			if (num % i == 0) {
				result += i;
			}
		}

		return result;

	}

	else return false;

}

sum(6);   //12


// Bài 6: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số chẵn thuộc dãy
// Fibonacci (0, 1, 1, 2, 3, 5, 8, ...) mà nhỏ hơn hoặc bằng tham số truyền vào.


// Kiểm tra điều kiện
function check(num) {

	let isNumber = !isNaN(num);
	let isInteger = Number.isInteger(num);

	if (isNumber && isInteger && num >= 0) return true;
	else return false;

}

//Tính số fibonacci

function fbnc(num) {

	if (check(num)) {
		if (num == 0) return 0;

		else if (num == 1 || num == 2) return 1;

		else {
			return fbnc(num - 1) + fbnc(num - 2);
		}
	}

}

//Tính tổng các số chẵn thỏa mãn điều kiện

function sum(num) {

	if (fbnc(num)) {
		let result = 0;

		for (let i = 0; i < num; i++) {

			if (fbnc(i) % 2 == 0 && fbnc(i) <= num) {
				result += fbnc(i);
			}

		}

		return result;
	}
}
sum(10); //10 (F(0) + F(3) + F(6) = 0 + 2 + 8 = 10)


//XỬ LÝ CHUỖI

//Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ.
// VD: ''HELLO world'' => ''Hello World''

function convertString(str) {

	let arr = str.split(' ');
	let newArr = [];  

	for (let i = 0; i < arr.length; i++) {

		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1).toLowerCase();  

		newArr.push(arr[i]); 
	}
	return newArr.join(' '); 
}

convertString('hôm nAy lÀ mỘT ngày nắNg nÓng'); //'Hôm Nay Là Một Ngày Nắng Nóng'


 // Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. 
 // Ví dụ: ''HELLO world'' => ''hello-world''

 function convertString(str) {

 	let arr = str.split(' ');
 	let newArr = [];

 	for (let  i = 0; i < arr.length; i++) {

 		newArr.push(arr[i].toLowerCase());

 	}

 	return newArr.join('-');


 }

convertString('hôm nAy lÀ mỘT ngày nắNg nÓng'); //'hôm-nay-là-một-ngày-nắng-nóng'


 //XỬ LÝ MẢNG 	
 

 // Bài 1: Viết hàm loại bỏ các giá trị sai trong 1 mảng. 
 // Các giá trị sai bao gồm: false, null, undefined, NaN, 0, ''''.

 function remove(arr) {

 	let newArr = arr.filter(element => element);

 	return newArr;
 }


remove([NaN, false, '', null, 1,,,,2,3,7,0, undefined]); //[1,2,3,7]


// Bài 3: Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. 
// Ví dụ với tham số [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về [''aba'', ''vcd'']. 


function filterByLength(arr) {

	let newArr = [];

	let arr1 = arr.sort(function(a, b) {
		return b.length - a.length;
	});

	newArr.push(arr1[0]);

	for (let i = 1; i < arr1.length; i++) {

		if (arr1[i].length === arr1[0].length) {
			newArr.push(arr1[i]);
		}

	}

	return newArr;

}

filterByLength(['aba', 'aa','ad','c','vcd']); //['aba', 'vcd']


//XỬ LÝ OBJECT

 // Bài 2: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }. 
 // Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên. 

 function calculateTheAverageAge(arr) {

 	let result = 0;

 	for (let i = 0; i < arr.length; i++ ) {
 		result += arr[i].age;
 	}

 	return result / arr.length;
 }


 calculateTheAverageAge([
 	{name: 'My', gender: 'female', age: 20},
 	{name: 'Vương', gender: 'male', age: 22},
 	{name: 'Duy Anh', gender: 'male', age: 20},
 	{name: 'Thiện', gender: 'male', age: 24},
 	{name: 'Quyết', gender: 'male', age: 24},
 	{name: 'Trung', gender: 'male', age: 19},
 	{name: 'Hưng', gender: 'male', age: 20},
 	{name: 'Quy', gender: 'male', age: 19}
 	])

//21


// Bài 3: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }. 
// Viết hàm sắp xếp lại mảng trên theo tuổi học viên từ cao đến thấp. 

function sortByAge(arr) {

	arr = arr.sort((a, b) => b.age - a.age);

	return arr;
}


sortByAge([
	{name: 'My', gender: 'female', age: 20},
	{name: 'Vương', gender: 'male', age: 22},
	{name: 'Duy Anh', gender: 'male', age: 20},
	{name: 'Thiện', gender: 'male', age: 24},
	{name: 'Quyết', gender: 'male', age: 24},
	{name: 'Trung', gender: 'male', age: 19},
	{name: 'Hưng', gender: 'male', age: 20},
	{name: 'Quy', gender: 'male', age: 19}
	])

// [ { name: 'Thiện', gender: 'male', age: 24 },
//   { name: 'Quyết', gender: 'male', age: 24 },
//   { name: 'Vương', gender: 'male', age: 22 },
//   { name: 'My', gender: 'female', age: 20 },
//   { name: 'Duy Anh', gender: 'male', age: 20 },
//   { name: 'Hưng', gender: 'male', age: 20 },
//   { name: 'Trung', gender: 'male', age: 19 },
//   { name: 'Quy', gender: 'male', age: 19 } ]


// Bài 4: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }.
// Viết hàm sắp xếp lại mảng trên theo tên học viên (không phân biệt hoa thường). 

function sortByName(arr) {

	arr = arr.sort(function(a, b) {
		
		let name1 = a.name.toUpperCase(0);
		let name2 = b.name.toUpperCase(0);
		
		if (name1 < name2) return -1;
		
		else if (name1 > name2) return 1;
		
		else return 0;

	})

	return arr;
}

sortByName([
	{name: 'My', gender: 'female', age: 20},
	{name: 'Vương', gender: 'male', age: 22},
	{name: 'Duy Anh', gender: 'male', age: 20},
	{name: 'thiện', gender: 'male', age: 24},
	{name: 'Quyết', gender: 'male', age: 24},
	{name: 'trung', gender: 'male', age: 19},
	{name: 'hưng', gender: 'male', age: 20},
	{name: 'quy', gender: 'male', age: 19}
	])

// [ { name: 'Duy Anh', gender: 'male', age: 20 },
//   { name: 'hưng', gender: 'male', age: 20 },
//   { name: 'My', gender: 'female', age: 20 },
//   { name: 'quy', gender: 'male', age: 19 },
//   { name: 'Quyết', gender: 'male', age: 24 },
//   { name: 'thiện', gender: 'male', age: 24 },
//   { name: 'trung', gender: 'male', age: 19 },
//   { name: 'Vương', gender: 'male', age: 22 } ]



 // Bài 5: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }. 
 // Viết hàm lọc ra những sinh viên nào có tên bắt đầu bằng chữ ''H'' hoặc ''h''.


 function filterByName(arr) {

 	let newArr = arr.filter(function(item) {

 		return item.name[0].toUpperCase() === 'H';

 	})

 	return newArr;

 }


 filterByName([
 	{name: 'My', gender: 'female', age: 20},
 	{name: 'Vương', gender: 'male', age: 22},
 	{name: 'Duy Anh', gender: 'male', age: 20},
 	{name: 'Thiện', gender: 'male', age: 24},
 	{name: 'Quyết', gender: 'male', age: 24},
 	{name: 'Trung', gender: 'male', age: 19},
 	{name: 'Hưng', gender: 'male', age: 20},
 	{name: 'Quy', gender: 'male', age: 19},
 	{name: 'hưnng', gender: 'male', age: 20}
 	])


// [ { name: 'Hưng', gender: 'male', age: 20 },
//  { name: 'hưnng', gender: 'male', age: 20 } ]


//TỔNG HỢP

// Bài 1: Cho 2 số a và b. Viết hàm giải phương trình bậc nhất dạng ax + b = 0. 

function giaiPhuongTrinh(a, b) {

	let nghiem = -b / a;

	if (a == 0 && b == 0) {
		console.log('Phương trình có vô số nghiệm');
	}

	else if (a == 0 && b != 0) {
		console.log('Phương trình có nghiệm là x = 0');
	}

	else if (a != 0 && b == 0) {
		console.log('Phương trình vô nghiệm');
	}

	else {
		console.log(`Phương trình có nghiệm là: ${nghiem}`);
	}

}
giaiPhuongTrinh(2,4);

// Bài 2: Cho 3 số a, b và c. Viết hàm giải phương trình bậc 2 dạng ax² + bx + c = 0. 


function giaiPhuongTrinhB2(a, b, c) {
	if (a !== 0) {
		let delta = b * b - (4 * a * c);

		if (delta < 0) {
			console.log('Phương trình vô nghiệm');
		}

		else if (delta == 0) {
			console.log(`Phương trình có nghiệm kép là ${-(b / (2 * a))}`)
		}

		else {
			console.log(`Phương trình có 2 nghiệm là ${(- b - Math.sqrt(delta)) /(2 * a)} và ${(- b + Math.sqrt(delta)) / (2 * a)}`)
		}

	}
	else return false;
}


giaiPhuongTrinhB2(3, 5, 2); //Phương trình có 2 nghiệm là -1 và -0.6666666666666666
giaiPhuongTrinhB2(2, 4, 2); //Phương trình có nghiệm kép là -1
giaiPhuongTrinhB2(3, 5, 4); //Phương trình vô nghiệm




// Bài 4: Một con ốc sên leo từ đáy giếng lên miệng giếng, biết ban ngày leo được x mét, 
// ban đêm lại bị tụt xuống y mét, hỏi sau bao nhiêu ngày thì ốc sên sẽ lên được đến miệng giếng. 
// Viết hàm giải bài toán trên với 3 tham số h là chiều cao của giếng, x và y như mô tả trên. 

function tinhNgay(x, y, h) {

	let cd_1 = (x > 0);
	let cd_2 = (y > 0);
	let cd_3 = (x > y);
	let cd_4 = (h > 0);
	let cd_5 = (h >= (x - y));

	if (cd_1 && cd_2 && cd_3 && cd_4 && cd_5) {

		let soNgay = (((h - x) / (x - y)) + 1).toFixed(1);
		console.log(`Số ngày ốc sên cần để đến miệng giếng là ${Number(soNgay)} ngày`);
	}
	else return false;

}
tinhNgay(4,1,9);


// Bài 5: Cho 1 số nguyên, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó 
// sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).
// Ví dụ với tham số 53751 thì kết quả là 13557.

function sortNumber(num) {

	let convertToString = num.toString();
	
	let convertToArray = convertToString.split('');
	
	let sortByNumber = convertToArray.sort((a, b) => a - b);
	
	let result = Number(sortByNumber.join(''));

	return result;

}

sortNumber(53751); //13557