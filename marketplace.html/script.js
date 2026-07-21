// Welcome message
console.log("Welcome to Digital Marketplace!");

// Hero button
const exploreButton = document.querySelector(".hero button");

exploreButton.addEventListener("click", function () {
    alert("Welcome! Browse our amazing digital products.");
});

// Buy buttons
const buyButtons = document.querySelectorAll(".card button");

buyButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const productName = this.parentElement.querySelector("h3").innerText;
        const price = this.parentElement.querySelector("p").innerText;

        alert("You selected:\n\n" + productName + "\nPrice: " + price);

    });

});
// =======================
// LOGIN PAGE
// =======================

const loginButton = document.querySelector(".login-btn");

if (loginButton) {

    loginButton.addEventListener("click", function () {

        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;

        if (email === "" || password === "") {
            alert("Please fill in all fields.");
        } else {
            alert("Login Successful!");

            // Redirect to homepage
            window.location.href = "index.html";
        }

    });

}

// =======================
// SIGNUP PAGE
// =======================

const signupButton = document.querySelector(".signup-btn");

if (signupButton) {

    signupButton.addEventListener("click", function () {

        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        if (name === "" || email === "" || password === "") {
            alert("Please fill in all fields.");
        } else {
            alert("Account Created Successfully!");

            // Redirect to login page
            window.location.href = "login.html";
        }

    });

}
// ===========================
// PRODUCTS PAGE
// ===========================

// Search Products
const searchInput = document.querySelector(".search-box input");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let searchValue = this.value.toLowerCase();

        let cards = document.querySelectorAll(".card");

        cards.forEach(function(card){

            let title = card.querySelector("h3").textContent.toLowerCase();

            if(title.includes(searchValue)){
                card.style.display = "block";
            }else{
                card.style.display = "none";
            }

        });

    });

}

// Buy Buttons
const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach(function(button){

    button.addEventListener("click", function(){

        let product = this.parentElement.parentElement.querySelector("h3").textContent;
        let price = this.parentElement.parentElement.querySelector("p").textContent;

        alert("🛒 You are buying:\n\n" + product + "\nPrice: " + price);

    });

});

// Add To Cart Buttons
const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(function(button){

    button.addEventListener("click", function(){

        let product = this.parentElement.parentElement.querySelector("h3").textContent;

        alert(product + " added to cart!");

    });

});

// Category Buttons
const categoryButtons = document.querySelectorAll(".categories button");

categoryButtons.forEach(function(button){

    button.addEventListener("click", function(){

        let category = this.textContent;

        alert("Showing " + category + " products.");

    });

});
// ===============================
// OPEN PRODUCTS PAGE
// ===============================

const products = document.querySelectorAll(".card");

products.forEach(function(product){

    product.addEventListener("click", function(e){

        // Don't open the page if a button was clicked
        if(e.target.classList.contains("buy-btn") || e.target.classList.contains("cart-btn")){
            return;
        }

        const productsName = this.dataset.products;

        // Save product name
        localStorage.setItem("selectedProducts", productsName);

        // Open product page
        window.location.href = "products.html";

    });

});
// =========================
// ADD TO CART
// =========================

const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(function(button){

    button.addEventListener("click", function(event){

        // Prevent opening the product page
        event.stopPropagation();

        const card = this.closest(".card");

        const product = {
            name: card.querySelector("h3").textContent,
            price: card.querySelector("p").textContent
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(product.name + " added to cart!");
    });

});
// =======================
// CHECKOUT PAGE
// =======================

const cartContainer = document.getElementById("cart-items");

if (cartContainer) {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;

    cart.forEach(function(product) {

        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${products.name}</h3>
            <p>${products.price}</p>
            <hr>
        `;

        cartContainer.appendChild(div);

        total += parseFloat(product.price.replace("$", ""));
    });

    document.getElementById("total").textContent = "Total: $" + total;
}