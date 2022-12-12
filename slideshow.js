let array = ["/IMG/anh1.png","/IMG/ferrari.jpg","/IMG/lambo-1.jpg"];
let count = 0;
function bannerShow() {
    data = `
    <img src="${array[count]}" alt="">`
    count++;
    if (count == 3) {
        count = 0;
    }
    document.getElementById('slideShow').innerHTML = data;
}
// setInterval(bannerShow,1000);
bannerShow();