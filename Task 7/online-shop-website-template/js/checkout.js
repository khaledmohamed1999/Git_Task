const products = JSON.parse(localStorage.getItem("products") || "[]")
const renderHTML = () => {
    document.getElementById("shipping").innerHTML = '$' + localStorage.getItem("shipping")
    document.getElementById("total").innerHTML = '$' + localStorage.getItem("total")
    document.getElementById("sub-total").innerHTML = '$' + localStorage.getItem("sub-total")
    products.forEach((p) => {
        document.getElementById("products").innerHTML += 
        `<div class="d-flex justify-content-between">
            <p>${p.productName}</p>
            <p>$${p.price * p.quantity}</p>
        </div>`
    });
}

const updateOrderDetail = () => {
    const orderDetailArray = [];
    products.forEach((p) => {
        orderDetailArray.push({
            "product_id": p.id,
            "price": p.price,
            "qty": p.quantity
        })
    })
    return orderDetailArray;
}

const addOrder = async () => {
    let order = await fetch(`http://localhost:5000/api/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem("x-access-token"),
      },
      body: JSON.stringify({
        "sub_total_price": document.getElementById("sub-total").innerHTML.replace("$",""),
        "shipping": document.getElementById("shipping").innerHTML .replace("$",""),
        "total_price": document.getElementById("total").innerHTML.replace("$",""),
        "user_id": localStorage.getItem("userID"),
        "order_date": new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDate(),
        "order_details": updateOrderDetail(),
        "shipping_info": {
            "first_name": document.getElementById("first-name").value,
            "last_name": document.getElementById("last-name").value,
            "email": document.getElementById("email").value,
            "mobile_number": document.getElementById("mobileNum").value,
            "address1": document.getElementById("Add1").value,
            "address2": document.getElementById("Add2").value,
            "country": document.getElementById("country").value,
            "city": document.getElementById("city").value,
            "state": document.getElementById("state").value,
            "zip_code": document.getElementById("zip-code").value
        }
    })
    })
    let res = await order.json();
    console.log(res);
  }

  renderHTML();