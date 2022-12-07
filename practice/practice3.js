// ? Bài 3 //
let a = parseInt(prompt("Nhập vào số A"));
let b = parseInt(prompt("Nhập vào số B"));
let result;
let calculation = prompt("Nhập phép tính: + hoặc - hoặc * hoặc /");
switch (calculation) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        result = a / b;
        break;
}
console.log("Kết quả phép tính của bạn là:" + result);