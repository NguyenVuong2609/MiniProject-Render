//? Bài 10 //
let num = parseInt(prompt("Nhập vào 1 số:"));
let checkNum;
let totalDivisor = 0;
if (num < 2) {
  console.log("Đây không phải là số nguyên tố.");
} else if (num == 2) {
  console.log("Đây là số nguyên tố.");
} else {
  for (let i = 2; i < num; i++) {
    checkNum = num % i;
    if (checkNum == 0) {
      console.log("Đây không phải là số nguyên tố.");
      break;
    } else {
      console.log("Đây là số nguyên tố.");
      break;
    }
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