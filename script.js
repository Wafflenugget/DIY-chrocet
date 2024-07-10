document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
    const confirmOrderBtn = document.getElementById('confirmOrderBtn');
    const confirmationMessage = document.getElementById('confirmationMessage');
    let cart = [];

    products.forEach(product => {
        const addToCartBtn = product.querySelector('.add-to-cart');
        const productName = product.dataset.product;

        addToCartBtn.addEventListener('click', () => {
            cart.push(productName);
            updateCartButton();
        });
    });

    confirmOrderBtn.addEventListener('click', () => {
        confirmOrder();
    });

    function updateCartButton() {
        if (cart.length > 0) {
            confirmOrderBtn.disabled = false;
        } else {
            confirmOrderBtn.disabled = true;
        }
    }

    function confirmOrder() {
        // Clear cart and disable button
        cart = [];
        updateCartButton();

        // Show confirmation message
        confirmationMessage.style.display = 'block';
        confirmationMessage.innerHTML = `
            <p>Your order will be ready in two days at 6:00 PM.</p>
            <p>Please come to Funabori, Tokyo, Edogawa-ku, Sports Park.</p>
            <p>Thank you for shopping with us!</p>
        `;
    }
});
