document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const validEmail = 'adi@dev.co';
    const validPassword = 'adibhai';

    let isMoving = true;

    function toggleButtonPosition() {
        if (isMoving) {
            loginBtn.classList.add('move-right');
            setTimeout(() => {
                loginBtn.classList.remove('move-right');
                loginBtn.classList.add('move-left');
                setTimeout(() => {
                    loginBtn.classList.remove('move-left');
                }, 500);
            }, 500);
        }
    }

    function validateCredentials() {
        return emailInput.value === validEmail && passwordInput.value === validPassword;
    }

    loginBtn.addEventListener('click', () => {
        if (validateCredentials()) {
            loginBtn.style.position = 'relative';
            loginBtn.style.left = '0';
            loginBtn.style.transition = 'all 0.5s ease';
            isMoving = false;
            setTimeout(() => {
                window.location.href = 'welcome.html';
            }, 500); // Delay to ensure position reset
        } else {
            toggleButtonPosition();
        }
    });
});
