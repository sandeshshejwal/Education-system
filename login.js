document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        document.getElementById('loginMessage').textContent = '';

        window.location.href = 'index.html'; 
    } else {
        document.getElementById('loginMessage').textContent = 'Please enter both username and password.';
    }
};
