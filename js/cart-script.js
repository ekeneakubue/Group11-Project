let cart = document.querySelector(".cart-section");
let checkout = document.querySelector(".checkout-section");
let approved = document.querySelector(".approved-section");
let cartBtn = document.querySelector(".cart-btn");
let checkoutBtn = document.querySelector(".checkout-btn");
let approvedBtn = document.querySelector(".approved-btn");


cart.addEventListener('click', (e) => {
    console.log(e);
    if(e.target == cartBtn){
        cart.style.display = "none";
        checkout.style.display = "block";
    }
})
checkoutBtn.addEventListener('click', () => {
    checkout.style.display = "none";
    approved.style.display = "block";
})
approvedBtn.addEventListener('click', () => {
    window.location.replace('product-review.html');
})