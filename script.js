// scripts.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorName = document.getElementById('error-name');
    const errorEmail = document.getElementById('error-email');
    const errorMessage = document.getElementById('error-message');

    const successAlert = document.getElementById('success-alert');

    let isValid = true;

    errorName.textContent = "";
    errorEmail.textContent = "";
    errorMessage.textContent = "";

    if (name === '') {
        errorName.textContent = 'Nome é obrigatorio'
        isValid = false;
    }

    if (email === '') {
        errorEmail.textContent = 'Email é obrigatorio'
        isValid = false;
        
    } else if (!validateEmail(email)) {
        errorEmail.textContent = 'Email inválido. Digite uma email correto!'
        isValid = false;
    }

    if (message === '') {
        errorMessage.textContent = 'Mensagem é obrigatorio'
        isValid = false;
    }
    
    if (isValid) {
        successAlert.classList.add('show');
        setTimeout(() => {
            successAlert.classList.remove('show');
        }, 3000); // Oculta o alerta após 3 segundos
        document.getElementById('contactForm').reset();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
