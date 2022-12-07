// ! Bài 11 //
let oldNum = parseInt(prompt("Nhập vào số tiêu thụ điện cũ"));
let newNum = parseInt(prompt("Nhập vào số tiêu thụ điện mới"));
let paidNum = newNum - oldNum;
let payment = 0;
const subscriber = 10000;

if (paidNum <= 50) {
  payment = paidNum * 700 + subscriber;
} else if (paidNum <= 100) {
  payment = 50 * 700 + (paidNum - 50) * 900 + subscriber;
} else if (paidNum <= 150) {
  payment = 50 * 700 + 50 * 900 + (paidNum - 100) * 1100 + subscriber; 
} else {
  payment = 50 * 700 + 50 * 900 + 50 * 1100 + (paidNum - 150) * 1300 + subscriber;
}
console.log("Tiền điện bạn cần phải trả là: " + payment + "VNĐ");