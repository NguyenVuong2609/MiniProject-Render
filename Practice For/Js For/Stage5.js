let btn5 = document.getElementById("btn5");
btn5.addEventListener("click", function () {
  let num = document.getElementById("stage5").value;
  for (j = 2; j <= num; j++) {
      if (checkNumber(j)) {
          console.log(j);
      }
  }
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
});


