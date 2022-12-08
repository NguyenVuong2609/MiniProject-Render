let btn1 = document.getElementById('btn1');
btn1.addEventListener('click',function(){
    let num = document.getElementById('stage1').value;
    let sumEvenNumber = 0;
    for (let i = 0; i <= num; i++) {
        if ( i % 2  == 0 ) {
            console.log(i);
            sumEvenNumber += i;
        }
    }
    console.log("Tổng các số chẵn trong khoảng trên là:", sumEvenNumber);
})