const inputEmail = document.getElementById('login-email');
const inputPassword = document.getElementById('login-password');
const inputButton = document.getElementById('login-button');

inputButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const submitButton = document.getElementById('submit-btn');
const agreementCheckbox = document.getElementById('agreement');

function disableButton() {
  if (agreementCheckbox.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
agreementCheckbox.addEventListener('click', disableButton);

window.onload = () => {
  disableButton();
};
