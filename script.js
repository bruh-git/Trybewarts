const inputEmail = document.getElementById('login-email');
const inputPassword = document.getElementById('login-password');
const inputButton = document.getElementById('login-button');
const submitButton = document.getElementById('submit-btn');
const agreementCheckbox = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const inputsForm = document.getElementsByClassName('input-form');

const inputFormName = document.getElementById('input-name');
const inputFormLastName = document.getElementById('input-lastname');
const inputFormEmail = document.getElementById('input-email');
const selectFormHouse = document.getElementById('house');
const inputFormTextArea = document.getElementById('textarea');
const inputFormTechnogies = document.querySelectorAll("input[type='checkbox'][name='technologies']");
const printDiv = document.getElementById('user-information');

inputButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

function disableButton() {
  if (agreementCheckbox.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

agreementCheckbox.addEventListener('click', disableButton);

function countCharacters() {
  counter.innerHTML = 500 - textarea.value.length;
}

textarea.addEventListener('keyup', countCharacters);

function printUserData(event) {
  event.preventDefault();
  const spanName = document.createElement('span');
  spanName.innerHTML = `Nome: ${inputFormName.value} ${inputFormLastName.value}`;
  const spanEmail = document.createElement('span');
  spanEmail.innerHTML = `Email: ${inputFormEmail.value}`;
  const spanHouse = document.createElement('span');
  spanHouse.innerHTML = `Casa: ${selectFormHouse.value}`;
  const spanComment = document.createElement('span');
  spanComment.innerHTML = `Observações: ${inputFormTextArea.value}`;
  const spanTechnologies = document.createElement('span');
  spanTechnologies.innerHTML = `Matérias:${inputFormTechnogies.forEach((materia) => ` ${materia}`)}`;
  printDiv.appendChild(spanName);
  printDiv.appendChild(spanEmail);
  printDiv.appendChild(spanHouse);
  printDiv.appendChild(spanComment);
  printDiv.appendChild(spanTechnologies);
}
  submitButton.addEventListener('click', printUserData);
  window.onload = () => {
  disableButton();
  countCharacters();
};
