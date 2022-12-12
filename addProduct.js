function showHeaderAP() {
  let data = `<h2>Add product to your homepage</h2>
    `;
  document.getElementById("header").innerHTML = data;
}
function showBodyAP() {
    let array =JSON.parse(localStorage.getItem("listProduct"));
  let data = `<table>
  <tr>
      <td><label for="">Product's Name:</label></td>
      <td><input type="text" placeholder="Product's name" class="inputInfo" id="nameProduct"></td>
  </tr>
  <tr>
      <td><label for="">Price:</label></td>
      <td><input type="number" placeholder="Price" class="inputInfo" id="priceProduct"></td>
  </tr>
  <tr>
      <td><label for="">Picture:</label></td>
      <td><input type="text" placeholder="Link" class="inputInfo" id="imgProduct"></td>
  </tr>
  <tr>
      <td><label for="">ID:</label></td>
      <td id="productID"></td>
  </tr>
  <tr class="button">
      <td><input type="button" value="Add" id="AddProduct"></td>
      <td><input type="button" value="Delete" id="DeleteProduct"></td>
  </tr>
</table>`;
  document.getElementById("bodyContent").innerHTML = data;
  addProduct();
}
showHeaderAP();
showBodyAP();

function addProduct () {
    let btnAdd = document.getElementById("AddProduct");
    let btnDelete = document.getElementById("DeleteProduct");
    let array = JSON.parse(localStorage.getItem('listProduct'));
    btnAdd.addEventListener("click",()=> {
      let name = document.getElementById("nameProduct");
      let price = document.getElementById("priceProduct");
      let img = document.getElementById("imgProduct");
        array.push({
          name: name.value,
          price: parseInt(price.value),
          img: img.value,
          id: array.length + 1,
          quantity: 0
        })
        name.value = "";
        price.value = "";
        img.value = "";
        document.getElementById("productID").innerHTML = array.length + 1
        console.log(array);
    });
}