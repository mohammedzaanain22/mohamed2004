let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCart();

function addToCart(button){

    let card = button.parentElement.parentElement;

    let name = card.querySelector("h3").textContent;

    let price = Number(card.querySelector(".price").textContent);

    let qty = Number(card.querySelector(".qty").value);

    if (qty < 1) {
        alert("Please enter a valid quantity.");
        return;
    }

    cart.push({
        name: name,
        price: price,
        qty: qty
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();
}

function updateCart(){

    let count = 0;

    for(let item of cart){

        count += item.qty;

    }

    document.getElementById("cartCount").textContent = count;

}