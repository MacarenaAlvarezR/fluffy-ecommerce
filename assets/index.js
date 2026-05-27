const btn = document.getElementById("menuBtn");
const menu = document.getElementById("menuLinks");

btn.addEventListener("click", () => {
    menu.classList.toggle("show");
});

/* 🛒 CARRITO */
let cart = [];
let total = 0;

const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");

document.querySelectorAll(".add-cart").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const name = e.target.dataset.name;

        cart.push({ name, price: 2000 });

        total += 2000;

        renderCart();
    });
});

function renderCart() {
    cartList.innerHTML = "";

    cart.forEach((item, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${item.name} - $${item.price}
            <button onclick="removeItem(${index})">X</button>
        `;

        cartList.appendChild(li);
    });

    cartTotal.textContent = total;
}

function removeItem(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    renderCart();
}
