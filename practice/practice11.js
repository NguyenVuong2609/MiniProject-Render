// ! Bài 11 //
let oldNum = parseInt(prompt("Nhập vào số tiêu thụ điện cũ"));
let newNum = parseInt(prompt("Nhập vào số tiêu thụ điện mới"));
let paidNum = newNum - oldNum;
let payment = 0;
const subscriber = 10000;
const level1 = 700;
const level2 = 900;
const level3 = 1100;
const level4 = 1300;

if (paidNum <= 50) {
  payment = paidNum * level1 + subscriber;
} else if (paidNum <= 100) {
  payment = 50 * level1 + (paidNum - 50) * level2 + subscriber;
} else if (paidNum <= 150) {
  payment = 50 * level1 + 50 * level2 + (paidNum - 100) * level3 + subscriber; 
} else {
  payment = 50 * level1 + 50 * level2 + 50 * level3 + (paidNum - 150) * level4 + subscriber;
}
console.log(payment);