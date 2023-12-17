let cart = document.querySelector(".cart-section");
let checkout = document.querySelector(".checkout-section");
let approved = document.querySelector(".approved-section");
let cartBtn = document.querySelector(".cart-btn");
let checkoutBtn = document.querySelector(".checkout-btn");
let approvedBtn = document.querySelector(".approved-btn");


window.addEventListener('click', (e) => {
    if(e.target === cartBtn){
        cart.style.display = "none";
        checkout.style.display ="block";
    }
    if(e.target === checkoutBtn){
        checkout.style.display = "none";
        approved.style.display = "block";
    }
    if(e.target === approvedBtn){
        window.location.replace('index.html');
    }
})