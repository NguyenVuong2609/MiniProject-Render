let btn3 = document.getElementById('btn3');
btn3.addEventListener('click', function(){
    let num = document.getElementById('stage3').value;
    let checkNum;
    if (num < 2) {
        console.log(num," không phải là số nguyên tố.");
      } else if (num == 2) {
        console.log(num," là số nguyên tố.");
      } else {
        for (let i = 2; i < num; i++) {
          checkNum = num % i;
          if (checkNum == 0) {
            console.log(i,"check");
            console.log(num," không phải là số nguyên tố.");
            break;
          }
        }
        if (checkNum != 0) {
          console.log(num," là số nguyên tố.");
        }
      }
})