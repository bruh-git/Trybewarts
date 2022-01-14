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
const inputFormTechnogies = document.querySelectorAll('input[type="checkbox"][name="technologies"]');
const inputsFormRate = document.querySelectorAll('input[type="radio"][name="rate"]');
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

function whatTechnologies() {
  let stringTechnologies = '';
  inputFormTechnogies.forEach((materia) => {
    if (materia.checked) {
      stringTechnologies += ` ${materia.parentElement.innerText}`;
    }
  });
  return stringTechnologies;
}

function whatRate() {
  for (const rate of inputsFormRate) {
    if (rate.checked) {
      return rate.parentElement.innerText;
    }
  }
}

function printUserData(event) {
  event.preventDefault();
  const pName = document.createElement('p');
  pName.innerHTML = `Nome: ${inputFormName.value} ${inputFormLastName.value}`;
  const pEmail = document.createElement('p');
  pEmail.innerHTML = `Email: ${inputFormEmail.value}`;
  const pHouse = document.createElement('p');
  const pFamily = document.createElement('p');
  pFamily.innerHTML = `Família: `;
  pHouse.innerHTML = `Casa: ${selectFormHouse.value}`;
  const pTechnologies = document.createElement('p');
  pTechnologies.innerHTML = `Matérias:${whatTechnologies()}`;
  const pRate = document.createElement('p');
  pRate.innerHTML = `Avaliação: ${whatRate()}`;
  const pComment = document.createElement('p');
  pComment.innerHTML = `Observações: ${inputFormTextArea.value}`;
  printDiv.appendChild(pName);
  printDiv.appendChild(pEmail);
  printDiv.appendChild(pHouse);
  printDiv.appendChild(pTechnologies);
  printDiv.appendChild(pRate);
  printDiv.appendChild(pComment);
}

submitButton.addEventListener('click', printUserData);

window.onload = () => {
  disableButton();
  countCharacters();
};
