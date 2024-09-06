document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const validEmail = 'adi@dev.co';
    const validPassword = 'adibhai';

    let moveDirection = 'right';

    function toggleButtonPosition() {
        if (moveDirection === 'right') {
            loginBtn.classList.add('move-right');
            moveDirection = 'left';
        } else {
            loginBtn.classList.add('move-left');
            moveDirection = 'right';
        }
        setTimeout(() => {
            loginBtn.classList.remove('move-right', 'move-left');
        }, 500);
    }

    function validateCredentials() {
        return emailInput.value === validEmail && passwordInput.value === validPassword;
    }

    loginBtn.addEventListener('click', () => {
        if (validateCredentials()) {
            loginBtn.style.position = 'relative';
            loginBtn.style.left = '0';
            loginBtn.style.transition = 'all 0.5s ease';
        } else {
            toggleButtonPosition();
        }
    });
});
