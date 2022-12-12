function showHeaderAP() {
  let data = `<h2>Add product to your homepage</h2>
    `;
  document.getElementById("header").innerHTML = data;
}
function showBodyAP() {
    let array =JSON.parse(localStorage.getItem("listProduct"));
    console.log(array);
  let data = `<table>
  <tr>
      <td><label for="">Product's Name:</label></td>
      <td><input type="text" placeholder="Product's name" class="inputInfo"></td>
  </tr>
  <tr>
      <td><label for="">Price:</label></td>
      <td><input type="number" placeholder="Price" class="inputInfo"></td>
  </tr>
  <tr>
      <td><label for="">Picture:</label></td>
      <td><input type="text" placeholder="Link" class="inputInfo"></td>
  </tr>
  <tr>
      <td><label for="">ID:</label></td>
      <td id="productID">${array.length + 1}</td>
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
    btnAdd.addEventListener("click",()=> {
        
    });
}