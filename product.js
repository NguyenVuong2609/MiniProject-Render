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
            <a href="/Pages/index.html">CUTI<span>SHOP</span></a>
          </div>
          <div class="menu col-6">
            <ul class="ul-center">
              <li><a href="#">Shop</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="/Pages/favourite.html">Favourite</a></li>
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
                  <div id="show-cart"></div>
                  <div id="totalCart"></div>
                  <input type="button" value="Delete Cart" id="close-cart" />
                  <input type="button" value="Pay Money" id="pay-money" />
                </div>
              </li>
            </ul>
          </div>
        </div>`;
  document.getElementById("header").innerHTML = data;
  document.getElementById("body-content").innerHTML = list;
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
        let count = parseInt(cart[i].quantity)
      if (cart[i].id == id) {
        count += parseInt(document.getElementById("input"+id).value)
        cart[i].quantity = count;
        listProduct.push(cart[i]);
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

    //   TODO TH1: Nếu mặt hàng này đã có trong giỏ //
      if (id == myProductCart[i].id) {
        flag = true;
        // myProductCart[i].quantity = ++a;
        a += parseInt(document.getElementById("input"+id).value)
        myProductCart[i].quantity = a;
        localStorage.setItem("myCart", JSON.stringify(myProductCart));
        break;
      } else {
        // TODO TH2: Nếu mặt hàng này chưa có trong giỏ //
        flag =false;
      }
    }
    if (flag == false) {
    myProductCart.push(cart[id-1]);
      localStorage.setItem("myCart", JSON.stringify(myProductCart));
    }
  }
}
