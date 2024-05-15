// login.js



document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get username and password values
        const username = loginForm.querySelector('input[type="username"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        // Save username and password to local storage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // Redirect to exam page
        window.location.href = 'exam.html';
    });
});
