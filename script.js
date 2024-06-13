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