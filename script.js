let count = 0;

function increaseCount() {
    count++;
    document.getElementById('counter').innerText = count;
}

function decreaseCount() {
    if (count > 0) {
        count--;
        document.getElementById('counter').innerText = count;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.getElementById('cart-icon');
    const cartContainer = document.getElementById('cart-container');
    const cartClose = document.getElementById('cart-close');

    cartIcon.addEventListener('click', function() {
        cartContainer.classList.toggle('show');
    });

    cartClose.addEventListener('click', function() {
        cartContainer.classList.toggle('show');
    });
});
