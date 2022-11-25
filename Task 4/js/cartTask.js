"use strict";
let addButton = document.getElementById("addButton");
addButton.onclick = () => {
  let productName = document.getElementById("product-name");
  let price = document.getElementById("price");
  let quantity = document.getElementById("quantity");
  if (
    productName.value.length == 0 ||
    price.value.length == 0 ||
    quantity.value.length == 0
  )
    alert("Please Don't Leave an Empty Value");
  else {
    if (parseFloat(price.value) <= 0 || parseFloat(quantity.value) <= 0)
      alert("Enter Values That Are Greater Than Zero");
    else {
      let tableBody = document.getElementById("products");
      let totalPrice = parseFloat(price.value) * parseFloat(quantity.value);
      tableBody.innerHTML += `<tr><td>${productName.value}</td><td>${price.value}</td><td>${quantity.value}</td><td>${totalPrice}</td><td>Remove</td></tr>`;
    }
  }
};
