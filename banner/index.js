let clockColor = document.querySelectorAll('.clock');
function countdownSec() {
    let countSec1 = document.getElementById('seconds1').innerHTML;
    let countSec2 = document.getElementById('seconds2').innerHTML;
    let countMin1 = document.getElementById('minutes1').innerHTML;
    let countMin2 = document.getElementById('minutes2').innerHTML;
    let countHour = document.getElementById('hours').innerHTML;
    
    countSec2--;
    if (countSec2 == -1){
        countSec2 = 9;
        countSec1--;
        if (countSec1 == -1) {
            countSec1 = 5;
            countMin2--;
            if (countMin2 == -1) {
                countMin2 = 9;
                countMin1--;
                if (countMin1 == -1) {
                    countMin1 = 5;
                    countHour--;
                    if (countHour == -1) {
                        changeColorEnd();
                        return;
                    }
                    document.getElementById('hours').innerHTML = countHour;
                }
                document.getElementById('minutes1').innerHTML = countMin1;
            }
            document.getElementById('minutes2').innerHTML = countMin2;
        }
        document.getElementById('seconds1').innerHTML = countSec1;
    }
    document.getElementById('seconds2').innerHTML = countSec2;
}
// setInterval(countdownSec, 1);
function changeColorEnd (){
        for (let i = 0; i <clockColor.length; i++) {
            clockColor[i].style.backgroundColor = "red";
            if ( i == 5){
                break;
            }
    }
}
clearInterval(countdownSec());