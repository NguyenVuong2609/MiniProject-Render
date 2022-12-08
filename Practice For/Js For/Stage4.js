let btn4 = document.getElementById('btn4');
btn4.addEventListener('click', function(){
    let num = document.getElementById('stage4').value;
    let totalDivisor = 0;
    if ( num < 2) {
        console.log(num, " không phải là số hoàn hảo.");
    } else {
        for (i = 1; i < num; i++) {
            if (num % i == 0) {
              totalDivisor += i;
            }
          }
          if (totalDivisor == num && num != 0) {
            console.log(num," là số hoàn hảo.");
          } else {
            console.log(num, " không phải là số hoàn hảo.");
          }
    }
})