let btn2 = document.getElementById('btn2');
btn2.addEventListener('click',function(){
    let num = document.getElementById('stage2').value;
    let sumOddNumber = 0;
    for (let i = 0; i <= num; i++) {
        if ( i % 2  != 0 ) {
            console.log(i);
            sumOddNumber += i;
        }
    }
    console.log("Tổng các số lẻ trong khoảng trên là:", sumOddNumber);
})