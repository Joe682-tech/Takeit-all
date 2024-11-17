let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const product = {
            name: e.target.dataset.name,
            price: e.target.dataset.price
        };
        cart.push(product);
        updateCart();
    });
});

function updateCart() {
    const cartDiv = document.getElementById('cart');
    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>No items in the cart</p>';
    } else {
        cartDiv.innerHTML = cart.map(item => `${item.name} - $${item.price}`).join('<br>');
    }
}