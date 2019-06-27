 //Bài 1. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép chuỗi đó lên 10 lần, 
 //ngăn cách nhau bởi ký tự "-". 
 //Ví dụ cho chuỗi "123" thì kết quả sẽ là "123-123-123-123-123-123-123-123-123-123"

 function copyString(str) {
  
  var newStr = '';
  
  for (var i = 1; i <= 10; i++) {
    console.log(newStr = newStr + str +'-');
  }
  
  return newStr.substring(0,newStr.length - 1);

}

copyString('Techmaster');




//Bài 2: Cho 1 số nguyên dương n. Viết hàm tính n giai thừa (n!)
function factorial(num) {
  var result = 1;
  var i = 1;

  if (num < 0) {
    return false;
  }
  
  else if (num == 0 || num == 1) {
    return 1;
  }
  
  else {
    while (i <= num) {
      result = result * i;
      i++;
    }
  }

  return result;
}

factorial(4);  //24
factorial(5);  //120


//Bài 3-a. Cho 1 chuỗi, hãy viết hàm đảo ngược chuỗi đó. 
// Ví dụ cho chuỗi "hello" thì kết quả trả về sẽ là "olleh". 
// Gợi ý: 1 chuỗi tương tự 1 mảng với mỗi phần tử là 1 ký tự trong chuỗi.

function reserverString(str) {
  var i = str.length - 1;
  var newStr = '';
  
  for ( ; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
}
reserverString('techmaster');   //retsamhcet

// Bài 3-b: Viết nốt lời bài hát sau: 

// 99 bottles of beer on the wall
// 99 bottles of beer
// Take one down, pass it around
// 98 bottles of beer on the wall

// 98 bottles of beer on the wall
// 98 bottles of beer
// Take one down, pass it around
// 97 bottles of beer on the wall

// ... vân vân cho tới khi đạt tới số 0.

function song() {
  var number_1 = 99;
  var number_2 = 98;
  
  while (number_1 >= 0) {
    while (number_2 >= 0) {
      document.write(`${number_1} bottles of beer on the wall`);
      document.write(`<br>`);
      document.write(`${number_1} bottles of beer`);
      document.write(`<br>`);
      document.write(`Take one down, pass it around`);
      document.write(`<br>`);
      document.write(`${number_2} bottles of beer on the wall`);
      document.write(`<br>`);
      document.write(`<br>`);
      number_1--;
      number_2--;
    }
  }
}

song();

//Code bài giải
function writeLyrics () {
      for (var i = 99; i > 0 ; i--) {
        document.write(`${i} bottles of beer on the wall <br>`);
        document.write(`${i} bottles of beer <br>`);
        document.write(`Take one down, pass it around <br>`);
        document.write(`${i - 1} bottles of beer on the wall <br>`);
        document.write(`<br>`);
      }
    }




// Bài 4: Viết game Đoán Số như sau:

// Máy tính sẽ chọn ra 1 số ngẫu nhiên trong khoảng từ 1 đến 10.

// Người chơi sẽ được hỏi "số ngẫu nhiên đó là bao nhiêu?" và phải nhập vào 1 số (dùng prompt() ). 

// Ở mỗi lượt đoán, máy tính sẽ thông báo cho người chơi biết:
// "nhỏ hơn rồi" (nếu số họ đoán nhỏ hơn kết quả)
// "lớn hơn rồi" (nếu số họ đoán lớn hơn kết quả)
// "bạn đã đoán đúng" (nếu số họ đoán bằng kết quả)
// "thông tin nhập vào không hợp lệ" (nếu thứ họ nhập vào không thể đem so sánh với kết quả được)

// Nếu họ đoán sai, họ có thể đoán tiếp. Quá trình lặp lại tương tự.

// Trò chơi kết thúc khi người chơi đoán đúng, hoặc họ bấm "Cancel" ở hộp thoại prompt().

// [Nâng cao] (phần này ai làm được thì làm)
// Người chơi chỉ có 3 lượt đoán.
// Khi họ đoán lượt đầu tiên và sai, máy tính sẽ thông báo cho họ "còn 2 lượt", 
// cứ như thế cho tới khi họ không còn lượt nào. Và "game over".

function game() {

  var randomNumber = Math.floor(Math.random() * 10) + 1;
  var answer = (`Đáp án là ${randomNumber}`);
  var turn = 3;
  var input;
  

  while (input != randomNumber) {

    input = prompt('Mời bạn đoán số ngẫu nhiên từ 1-10');

    if (input === null) {
        return null;
      }
      

    if (input == randomNumber) {
      alert(`Chúc mừng bạn đã đoán đúng`);
      break;
    } 
    

    if (input < randomNumber) {
      turn--;
      alert(`Nhỏ hơn rồi. Bạn còn ${turn} lượt`);
      
      
    }

    if (input > randomNumber) {
      turn--;
      alert(`Lớn hơn rồi. Bạn còn ${turn} lượt`);

    }

    if (turn == 0) {
      alert(`Bạn đã thua cuộc. ${answer}`);
      break;
    }

    
  }

}




