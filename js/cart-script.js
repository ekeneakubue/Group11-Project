let cart = document.querySelector(".cart-section");
let checkout = document.querySelector(".checkout-section");
let approved = document.querySelector(".approved-section");

window.addEventListener('click', (e) => {
    if(e.target.classList.contains("cart-btn")){
        cart.style.display = "none";
        checkout.style.display ="block";
    }
    if(e.target.classList.contains("checkout-btn")){
        checkout.style.display = "none";
        approved.style.display = "block";
    }
    if(e.target.classList.contains("approved-btn")){
        window.location.replace('index.html');
    }
})