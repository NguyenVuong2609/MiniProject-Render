let btn7 = document.getElementById("btn7");
btn7.addEventListener("click", function () {
  let num = document.getElementById("stage7").value;
  let j = 2;
  let count = 0;

  function checkNumber(num) {
    let flag = true;
    if (num == 2) {
      flag = true;
    } else {
      for (i = 2; i < num; i++) {
        if (num % i == 0) {
          flag = false;
          break;
        }
      }
    }
    return flag;
  }

  while (count < num) {
    if (checkNumber(j)) {
        console.log(j, " là số nguyên tố thứ", count + 1);
        count++;
    }
    j++;
  }
});

