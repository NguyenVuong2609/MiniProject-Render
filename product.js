let array = [
  {
    name: "CT-001",
    price: 1000,
    img: "/IMG/sp1.jpg",
    id: 1,
    quantity: 0,
  },
  {
    name: "CT-002",
    price: 2000,
    img: "/IMG/sp2.jpg",
    id: 2,
    quantity: 0,
  },
  {
    name: "CT-003",
    price: 3000,
    img: "/IMG/sp3.jpg",
    id: 3,
    quantity: 0,
  },
  {
    name: "CT-004",
    price: 3000,
    img: "/IMG/sp4.jpg",
    id: 4,
    quantity: 0,
  },
  {
    name: "CT-005",
    price: 3000,
    img: "/IMG/sp5.jpg",
    id: 5,
    quantity: 0,
  },
  {
    name: "CT-006",
    price: 3000,
    img: "/IMG/sp6.jpg",
    id: 6,
    quantity: 0,
  },
];
localStorage.setItem("listProduct", JSON.stringify(array));

function renderProduct() {
  let list = "";
  let data = "";

  for (let i = 0; i < array.length; i++) {
    list += `<div class="product col-4">
        <img src="${array[i].img}" alt="">
        <p>${array[i].name}</p>
        <label for="price">Price: ${array[i].price}</label><br>
        <input type="number" value="0" id="input${array[i].id}">
        <i onclick=addToCart(${array[i].id}) class="fa-solid fa-cart-shopping add-cart"></i>
        </div>
        `;
  }
  data = `
    <div class="header col-12">
          <div class="col-3" id="shop">
            <a href="/index.html">CUTI<span>SHOP</span></a>
          </div>
          <div class="menu col-6">
            <ul class="ul-center">
              <li><a href="#">Shop</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Favourite</a></li>
            </ul>
          </div>
          <div class="avatar col-3">
            <ul>
              <li>
                <div>
                  <input type="text" placeholder="Search..." id="search" />
                  <button><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
              </li>
              <li>
                <a href="#">
                  <span>
                    <i class="fa-solid fa-cart-shopping" id="cart-button"></i>
                    <small id="small"></small>
                  </span>
                </a>
              </li>
              <li>
                <input
                  type="button"
                  value="Log in"
                  id="login-button"
                  class="custom-btn"
                />
              </li>
              <li>
                <div id="cart-menu">
                  <div id="show-cart">
                  <table id="tableCart">
                  </table>
                  </div>
                  <div id="totalCart"></div>
                  <input type="button" value="Delete Cart" id="deleteCart" />
                  <input type="button" value="Pay Money" id="pay-money" />
                </div>
              </li>
            </ul>
          </div>
        </div>`;
  document.getElementById("header").innerHTML = data;
  setInterval(bannerShow, 3000);
  document.getElementById("body-content").innerHTML = list;
  footer();
}
renderProduct();

//! THÊM VÀO GIỎ HÀNG //
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("listProduct"));
  let myCart = localStorage.getItem("myCart");

  //   ? Nếu giỏ hàng đang rỗng  //
  if (myCart == null) {
    listProduct = [];
    for (let i = 0; i < cart.length; i++) {
      let count = parseInt(cart[i].quantity);
      if (cart[i].id == id ) {
        if (parseInt(document.getElementById("input" + id).value)>0){
          count += parseInt(document.getElementById("input" + id).value);
          cart[i].quantity = count;
        }
        listProduct.push(cart[i]);
        document.getElementById("input" + id).value = 0;
        localStorage.setItem("myCart", JSON.stringify(listProduct));
        break;
      }
    }
  } else {
    //? Nếu giỏ đã có hàng //
    let myProductCart = JSON.parse(myCart);
    let flag = true;
    for (let i = 0; i < myProductCart.length; i++) {
      let a = parseInt(myProductCart[i].quantity);

      //   TODO TH1: Nếu mặt hàng này đã có trong giỏ (Cộng số lượng) //
      if (id == myProductCart[i].id) {
        flag = true;
        // myProductCart[i].quantity = ++a;
        if (parseInt(document.getElementById("input" + id).value) > 0) {
          a += parseInt(document.getElementById("input" + id).value);
        }
        myProductCart[i].quantity = a;
        document.getElementById("input" + id).value = 0;
        localStorage.setItem("myCart", JSON.stringify(myProductCart));
        break;
      } else {
        // TODO TH2: Nếu mặt hàng này chưa có trong giỏ //
        flag = false;
      }
    }
    if (flag == false) {
      let a = parseInt(cart[id - 1].quantity);
      if (parseInt(document.getElementById("input" + id).value)>0){
        a += parseInt(document.getElementById("input" + id).value);
        cart[id - 1].quantity = a;
      }
      myProductCart.push(cart[id - 1]);
      document.getElementById("input" + id).value = 0;
      localStorage.setItem("myCart", JSON.stringify(myProductCart));
    }
  }
  showCart();
  totalCart();
}

//! Ô tìm kiếm //
let search = document.getElementById("search");
search.addEventListener("change", () => {
  let searchProduct = JSON.parse(localStorage.getItem("listProduct"));
  let list = "";
  for (let i = 0; i < searchProduct.length; i++) {
    if (
      searchProduct[i].name.toLowerCase().indexOf(search.value.toLowerCase()) !=
        -1 ||
      searchProduct[i].price == search.value
    ) {
      list += `<div class="product col-4">
            <img src="${searchProduct[i].img}" alt="">
            <p>${searchProduct[i].name}</p>
            <label for="price">Price: ${searchProduct[i].price}</label><br>
            <input type="number" value="0" id="input${searchProduct[i].id}">
            <i onclick=addToCart(${searchProduct[i].id}) class="fa-solid fa-cart-shopping add-cart"></i>
            </div>
            `;
      document.getElementById("body-content").innerHTML = list;
    }
  }
});

//? Ô search: nội dung//
search.addEventListener("click", () => {
  if (search.value == "") {
    search.placeholder = "Name of product or Price...";
  }
});
search.addEventListener("mouseout", () => {
  search.placeholder = "Search...";
});

//? SlideShow //
let count = 0;
function bannerShow() {
  let arraySlideShow = [
    "/IMG/anh1.png",
    "/IMG/ferrari.jpg",
    "/IMG/lambo-1.jpg",
  ];
  dataSlide = `
    <img src="${arraySlideShow[count]}" alt="">`;
  count++;
  if (count == 3) {
    count = 0;
  }
  document.getElementById("slideShow").innerHTML = dataSlide;
}

//? Footer //
function footer() {
  data = `
  <div class="footer-info col-4">
        <h3>CUTI<span>SHOP</span></h3>
        <p>
          CUTISHOP. - Holding company - A company under Vietnamese law, having
          its official seat in Hanoi, register under number 0976106636.
        </p>
      </div>
      <div class="footer-link col-3">
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Meet ups</a></li>
        </ul>
      </div>
      <div class="footer-link col-3">
        <ul>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Handbook</a></li>
          <li><a href="#">Held Desk</a></li>
        </ul>
      </div>
      <div class="footer-link col-3">
        <ul>
          <li><a href="#">Find Designers</a></li>
          <li><a href="#">Find Developers</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Meet ups</a></li>
        </ul>
      </div>
    </div>
`;
  document.getElementById("footer").innerHTML = data;
}

//! Hiển thị giỏ hàng //
//? Hide - Show //
let btnCart = document.getElementById("cart-button");
btnCart.addEventListener("click", () => {
  let visible = document.getElementById("cart-menu");
  let cart = localStorage.getItem("myCart");
  if (visible.style.visibility == "") {
    visible.style.visibility = "visible";
  } else {
    visible.style.visibility =
      visible.style.visibility == "hidden" ? "visible" : "hidden";
  }
  if (cart != "") {
    showCart();
    totalCart();
  }
});

//? Push product to table //
function showCart() {
  let cart = JSON.parse(localStorage.getItem("myCart"));
  let dataProduct = `<tr>
  <td>Num</td>
  <td>Picture</td>
  <td>Name</td>
  <td>Price</td>
  <td>Quantity</td>
  <td>Total Money</td>
  </tr>
  `;
  for (let i = 0; i < cart.length; i++) {
    dataProduct += `
    <tr>
    <td>${i + 1}</td>
    <td><img src="${cart[i].img}" alt=""></td>
    <td>${cart[i].name}</td>
    <td>${cart[i].price}</td>
    <td>${cart[i].quantity}</td>
    <td>${cart[i].quantity * cart[i].price}</td>
    </tr>
    `;
  }
  document.getElementById("tableCart").innerHTML = dataProduct;
}

//* Hiển thị tổng sản phẩm //
function totalCart() {
  let cart = JSON.parse(localStorage.getItem("myCart"));
  let sum = 0;
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].quantity;
    total += cart[i].quantity * cart[i].price;
  }
  document.getElementById("small").innerHTML = sum;
  document.getElementById("totalCart").innerHTML =
    "Total product: " + sum + "&nbsp&nbsp Total money: " + total;
}

//! Xóa giỏ hàng //
let btnDelete = document.getElementById("deleteCart");
btnDelete.addEventListener("click", () => {
  localStorage.removeItem("myCart");
  document.getElementById("tableCart").innerHTML = "";
  document.getElementById("small").innerHTML = "";
  document.getElementById("totalCart").innerHTML = "";
});
