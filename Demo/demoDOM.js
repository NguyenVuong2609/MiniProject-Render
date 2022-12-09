let btn = document.getElementById('button');
btn.addEventListener('mouseover', ()=>{
    btn.style.left = Math.random() * 500 + "px";
    btn.style.top = Math.random() * 500 + "px";
})
let btnYes = document.getElementById('isYes');
btnYes.addEventListener('click', ()=>{
    window.alert('I love you, too!')
})
//? Oninput : nhập đến đâu thực hiện đến đó.
//? Onchange : click ra chỗ khác mới thực hiện
let header = document.getElementById('header');
console.log(header.style.backgroundColor);
btnYes.addEventListener('click', ()=>{
    let a = parseInt(Math.random() *225);
    let b = parseInt(Math.random() *225);
    let c = parseInt(Math.random() *225);
    header.style.backgroundColor = `rgb(${a},${b},${c})`;
})