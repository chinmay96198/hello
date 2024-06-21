document.getElementById('wishButton').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.classList.toggle('hidden');
    setTimeout(() => {
        message.classList.toggle('show');
    }, 10);
});