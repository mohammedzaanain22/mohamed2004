let cart = JSON.parse(localStorage.getItem("cart")) || [];

displayCart();

function displayCart(){

    let body = document.getElementById("cartBody");

    body.innerHTML = "";

    let grandTotal = 0;

    for(let i = 0; i < cart.length; i++){

        let total = cart[i].price * cart[i].qty;

        grandTotal += total;

        body.innerHTML += `
        <tr>

            <td>${cart[i].name}</td>

            <td>$${cart[i].price}</td>

            <td>${cart[i].qty}</td>

            <td>$${total}</td>

            <td>

                <button onclick="deleteItem(${i})">
                    Delete
                </button>

            </td>

        </tr>
        `;
    }

    document.getElementById("grandTotal").textContent =
    "Grand Total : $" + grandTotal;

}

function deleteItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();

}