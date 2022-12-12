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
        <td><input type="text" placeholder="Product's name" id="productName"></td>
    </tr>
    <tr>
        <td><label for="">Price:</label></td>
        <td><input type="number" placeholder="Price" id="productPrice"></td>
    </tr>
    <tr>
        <td><label for="">Picture:</label></td>
        <td><input type="text" placeholder="Link" id="productIMG"></td>
    </tr>
    <tr>
        <td><label for="">ID:</label></td>
        <td id="productID">${array.length + 1}</td>
    </tr>

</table>`;
  document.getElementById("bodyContent").innerHTML = data;
}
showHeaderAP();
showBodyAP();

