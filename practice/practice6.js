//? Bài 6 //
let year = parseInt(prompt("Enter a year"));
let month = parseInt(prompt("Enter a month"));
let isLeapYear = false;

if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      isLeapYear = true;
    }
  } else {
    isLeapYear = true;
  }
}

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Có 31 ngày.");
    break;
  case 2:
    if (isLeapYear) {
        console.log("Có 29 ngày.");
        break;
    } else {
        console.log("Có 28 ngày.");
        break;
    }
    default:
        if (month > 12 || month < 1) {
            console.log("Tỉnh lại đi, làm gì có tháng " + month);
            break;
        }
        console.log("Có 30 ngày.");
}