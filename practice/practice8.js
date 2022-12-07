// ! Bài 8 //
let num = parseInt(prompt("Nhập 1 số có 3 chữ số:"))
let hundered = parseInt(num/100);
let residual = num % 100;
let dozen = parseInt(residual/10);
let unit = residual % 10;
let result = unit + "" + dozen + "" + hundered;
console.log(result);