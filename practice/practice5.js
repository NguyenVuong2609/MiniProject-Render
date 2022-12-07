//? Bài 5 //
let a = parseFloat(prompt("Nhập cạnh A"));
let b = parseFloat(prompt("Nhập cạnh B"));
let c = parseFloat(prompt("Nhập cạnh C"));
let checkRight1 =  ((a * a) + (b * b)) == (c * c);
let checkRight2 =  ((a * a) + (c * c)) == (b * b);
let checkRight3 =  ((b * b) + (c * c)) == (a * a);
if ((a + b) > c || (a + c) > b || (b + c) > c) {
    if ( a == b && b == c ) {
        console.log("Đây là tam giác đều.");
    } else if ( a == b  || a == c || b == c ) {
        console.log("Đây là tam giác cân.");
    } else if ( checkRight1 || checkRight2 || checkRight3 ) {
        console.log("Đây là tam giác vuông");
    } else if ( (a == b) && checkRight1 || (b == c) && checkRight2 || ( b == c) && checkRight3 ) {
        console.log("Đây là tam giác vuông cân.");
    } else {
        console.log("Đây là tam giác thường.");
    }
} else {
    console.log("Đây không phải là tam giác.");
}
