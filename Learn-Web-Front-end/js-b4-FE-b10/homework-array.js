//  Bài 1. Cho 1 mảng gồm tên của 5 học viên. Hãy viết function sắp xếp lại thứ tự các học viên theo 
// bảng chữ cái và in ra màn hình danh sách học viên kèm theo số thứ tự sau khi sắp xếp.
// 	•	Tham số truyền vào là 1 mảng gồm tên của 5 người.
// 	•	Kết quả: In ra màn hình danh sách các học viên theo thứ tự bảng chữ cái (tiếng Anh)
// 		 mỗi người trên 1 dòng.
// 	•	Gợi ý: dùng phương thức join() để biến 1 mảng thành 1 chuỗi 
// 		và chèn thêm ký tự <br> để hiển thị xuống dòng trong HTML.

function sapXep(arr) {
	
	arr.sort();

	var newArr = arr.forEach(function(item,index) {
		console.log(`${index}: ${item}`);
	})

}

sapXep(['Quyết', 'Duy Anh', 'Vương', 'Thiện', 'Trung']);


// Bài 2. Cho 1 mảng các số bất kỳ.
// Tạo ra 1 mảng mới chỉ chứa các số chẵn lấy ra từ mảng trên và sắp xếp theo thứ tự giảm dần.

function evenNumbers(arr) {

	var newArr = arr.filter(function(item) {
		return item % 2 == 0;
	})

	return newArr.sort(function(a,b) {
		return b - a;
	});

}

evenNumbers([1,2,3,4,5,6,7,8,9]);


// Bài 3. Cho 1 mảng chỉ gồm các giá trị true và false. 
// Hãy kiểm tra xem giá trị true xuất hiện lần đầu trong mảng ở vị trí nào.

var arr = [false, false, true, false, true];

console.log(arr.indexOf(true));


// Bài 4. Cho 1 chuỗi, hãy viết hàm đảo ngược chuỗi đó. 
// Ví dụ cho chuỗi "hello" thì kết quả trả về sẽ là "olleh". 
// Gợi ý: 1 chuỗi tương tự 1 mảng với mỗi phần tử là 1 ký tự trong chuỗi.

function reverseString(str) {

	var newStr = '';

	for (var i = str.length - 1; i >= 0; i--) {
		newStr = newStr + str[i];
	}

	return newStr;

	//Cách 2

	// var convertStrToArr = str.split('');
	
	// var reverseArr = convertStrToArr.reverse();
	
	// var newStr = reverseArr.join('');
	
	// return newStr;

}

reverseString('techmaster');


// Bài 5. Viết hàm truyền vào một mảng các số và tính ra tổng các số đó.

function sum(arr) {

	var result = arr.reduce(function(acc, cur) {
		return acc + cur;
	});

	return result;
}

sum([2,4,6,8]);


// Bài 6: Cho một mảng các chuỗi là tên các học viên. 
// Viết hàm lọc ra những học viên  có tên bắt đầu bằng chữ H (không phân biệt hoa thường)

function filterWord(arr) {

	var newArr = arr.filter(function(item) {
		return item.charAt(0) == 'h' || item.charAt(0) == 'H';
    // return item.toLowerCase().charAt(0) == 'h';
    // return item.toUpperCase().charAt(0) == 'H';
	});

	return newArr;

}

filterWord(['Honda','Audi','BMW','huyndai','Thaco', 'Hello']);


//Bài 7

function checkTheDoor(num) {

  var isClosed = true;
  
  var i = 1;
  
  while (i <= 100) {
    
    if (num % i == 0) {
      
      isClosed = !isClosed;
    
    }
    
    i++;
  }

  return isClosed;    //false
}


checkTheDoor(100);




// Bài 8: Cho 1 mảng như sau. Viết function sắp xếp lại thứ tự các học viên 
// theo bảng chữ cái và in ra màn hình danh sách học viên kèm theo số id.
// 
// [
//   {name: "Alibaba", id: 1},
//   {name: "Kane", id: 2},
//   {name: "Steven", id: 3},
//   {name: "Mike", id: 4},
//   {name: "Suzy", id: 5}
// ]

// Kết quả sau khi sắp xếp phải là:
// [
//   {name: "Alibaba", id: 1}
//   {name: "Kane", id: 2}
//   {name: "Mike", id: 4}
//   {name: "Steven", id: 3}
//   {name: "Suzy", id: 5}
// ]


function sortArr(arr) {
 
  var newArr = arr.sort(function(a, b) {
 
  if (a.name < b.name) return -1;

  else if (a.name > b.name) return 1;

  else return 0;

});
 
  return newArr;

}

sortArr([
  {name: "Alibaba", id: 1},
  {name: "Kane", id: 2},
  {name: "Steven", id: 3},
  {name: "Mike", id: 4},
  {name: "Suzy", id: 5}
]);





















