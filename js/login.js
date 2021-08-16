document.getElementById('loginBtn').addEventListener('click', function () {
    let email = document.getElementById('emailField').value;
    let password = document.getElementById('passwordField').value;

    if (email == 'bank@mk.com' && password == 'mkbank') {
        window.location.href = 'account.html';
    }
    else {
        document.getElementById('errorMsg').innerText = 'You Enter Wrong Information. Please Try Again.'
    }
});