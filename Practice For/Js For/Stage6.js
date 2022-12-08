let btn6 = document.getElementById('btn6');
btn6.addEventListener('click', function(){
    let num = document.getElementById('stage6').value;
    let sumNum = 0;
    if ( num < 2) {
        console.log("Sai điều kiện.");
    } else {
        for (let i = 1; i <= num;i++) {
            if ( num % i == 0) {
                sumNum += i;
            }
        }
    }
    console.log("Tổng các ước số của " + num + " là: ", sumNum);
})