//* Bài 1 //
// let a = parseInt(prompt("Nhập vào cạnh A"));
// let area = a * a;
// let paremeter = a * 4;
// console.log("Chu vi hình vuông của bạn là:" + paremeter);
// console.log("Diện tích hình vuông của bạn là:" + area);

// * Bài 2 //
// let a = parseInt(prompt("Nhập vào cạnh a"));
// let b = parseInt(prompt("Nhập vào cạnh b"));
// let area = a * b;
// let paremeter = (a + b) * 2;
// console.log("Chu vi hình chữ nhật của bạn là:" + paremeter);
// console.log("Diện tích hình chữ nhật của bạn là:" + area);

// ? Bài 3 //
// let a = parseInt(prompt("Nhập vào số A"));
// let b = parseInt(prompt("Nhập vào số B"));
// let result;
// let calculation = prompt("Nhập phép tính: + hoặc - hoặc * hoặc /");
// switch (calculation) {
//     case "+":
//         result = a + b;
//         break;
//     case "-":
//         result = a - b;
//         break;
//     case "*":
//         result = a * b;
//         break;
//     case "/":
//         result = a / b;
//         break;
// }
// console.log("Kết quả phép tính của bạn là:" + result);

// * Bài 4 //
// let studentID = prompt("Nhập mã sinh viên của bạn:");
// let studentName = prompt("Nhập tên của bạn:");
// let studentAge = prompt("Nhập tuổi của bạn:");
// let studentGender = prompt("Nhập giới tính của bạn:");
// let studentEmail = prompt("Nhập email của bạn:");
// let studentPhone = prompt("Nhập số điện thoại của bạn:");
// const address = "Tầng 7 tháp A tòa nhà Sông Đà, Phạm Hùng, Mỹ Đình, Hà Nội."
// console.log("*******************STUDENT INFOMATION********************");
// console.log("StudentID: " + studentID + " " + "Name: " + studentName + " " + "Age: " + studentAge);
// console.log("Gender: " + studentGender + " " + "Email: " + studentEmail + " " + "Phone: " + studentPhone);
// console.log(address);

//? Bài 5 //
// let a = parseFloat(prompt("Nhập cạnh A"));
// let b = parseFloat(prompt("Nhập cạnh B"));
// let c = parseFloat(prompt("Nhập cạnh C"));
// let checkRight1 =  ((a * a) + (b * b)) == (c * c);
// let checkRight2 =  ((a * a) + (c * c)) == (b * b);
// let checkRight3 =  ((b * b) + (c * c)) == (a * a);
// if ((a + b) > c || (a + c) > b || (b + c) > c) {
//     if ( a == b && b == c ) {
//         console.log("Đây là tam giác đều.");
//     } else if ( a == b  || a == c || b == c ) {
//         console.log("Đây là tam giác cân.");
//     } else if ( checkRight1 || checkRight2 || checkRight3 ) {
//         console.log("Đây là tam giác vuông");
//     } else if ( (a == b) && checkRight1 || (b == c) && checkRight2 || ( b == c) && checkRight3 ) {
//         console.log("Đây là tam giác vuông cân.");
//     } else {
//         console.log("Đây là tam giác thường.");
//     }
// } else {
//     console.log("Đây không phải là tam giác.");
// }

// //? Bài 6 //
// let year = parseInt(prompt("Enter a year"));
// let month = parseInt(prompt("Enter a month"));
// let isLeapYear = false;

// if (year % 4 == 0) {
//   if (year % 100 == 0) {
//     if (year % 400 == 0) {
//       isLeapYear = true;
//     }
//   } else {
//     isLeapYear = true;
//   }
// }

// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("Có 31 ngày.");
//     break;
//   case 2:
//     if (isLeapYear) {
//         console.log("Có 29 ngày.");
//         break;
//     } else {
//         console.log("Có 28 ngày.");
//         break;
//     }
//     default:
//         if (month > 12 || month < 1) {
//             console.log("Tỉnh lại đi, làm gì có tháng " + month);
//             break;
//         }
//         console.log("Có 30 ngày.");
// }

// * Bài 7 //
// let num = parseInt(prompt("Nhập 1 số từ 0-9"));
// switch (num) {
//   case 0:
//     console.log("Không");
//     break;
//   case 1:
//     console.log("Một");
//     break;
//   case 2:
//     console.log("Hai");
//     break;
//   case 3:
//     console.log("Ba");
//     break;
//   case 4:
//     console.log("Bốn");
//     break;
//   case 5:
//     console.log("Năm");
//     break;
//   case 6:
//     console.log("Sáu");
//     break;
//   case 7:
//     console.log("Bảy");
//     break;
//   case 8:
//     console.log("Tám");
//     break;
//   case 9:
//     console.log("Chín");
//     break;
// }

// ! Bài 8 //
// let num = parseInt(prompt("Nhập 1 số có 3 chữ số:"))
// let hundered = parseInt(num/100);
// let residual = num % 100;
// let dozen = parseInt(residual/10);
// let unit = residual % 10;
// let result = unit + "" + dozen + "" + hundered;
// console.log(result);

// ! Bài 9 //
// let second = parseInt(prompt("Nhập vào số giây"));
// let hours = parseInt(second / 3600);
// let minutes = parseInt((second % 3600)/60);
// let seconds = second % 60;
// let result = hours + " hours " + ":" + minutes + " minutes " + ":" + seconds + " seconds";
// console.log(result);

//? Bài 10 //
let num = parseInt(prompt("Nhập vào 1 số:"));
let totalDivisor = 0;
let checkNum;
    if (num < 2) {
        console.log(num," không phải là số nguyên tố.");
      } else if (num == 2) {
        console.log(num," là số nguyên tố.");
      } else {
        for (let i = 2; i < num; i++) {
          checkNum = num % i;
          if (checkNum == 0) {
            console.log(num," không phải là số nguyên tố.");
            break;
          }
        }
        if (checkNum != 0) {
          console.log(num," là số nguyên tố.");
        }
      }

for (i = 1; i < num; i++) {
  if (num % i == 0) {
    totalDivisor += i;
  }
}
if (totalDivisor == num && num != 0) {
  console.log("Đây là số hoàn hảo.");
} else {
  console.log("Đây không phải là số hoàn hảo.");
}

// ! Bài 11 //
// let oldNum = parseInt(prompt("Nhập vào số tiêu thụ điện cũ"));
// let newNum = parseInt(prompt("Nhập vào số tiêu thụ điện mới"));
// let paidNum = newNum - oldNum;
// let payment = 0;
// const subscriber = 10000;

// if (paidNum <= 50) {
//   payment = paidNum * 700 + subscriber;
// } else if (paidNum <= 100) {
//   payment = 50 * 700 + (paidNum - 50) * 900 + subscriber;
// } else if (paidNum <= 150) {
//   payment = 50 * 700 + 50 * 900 + (paidNum - 100) * 1100 + subscriber;
// } else {
//   payment = 50 * 700 + 50 * 900 + 50 * 1100 + (paidNum - 150) * 1300 + subscriber;
// }
// console.log("Tiền điện bạn cần phải trả là: " + payment + "VNĐ");
