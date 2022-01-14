const inputEmail = document.getElementById('login-email');
const inputPassword = document.getElementById('login-password');
const inputButton = document.getElementById('login-button');
const submitButton = document.getElementById('submit-btn');
const agreementCheckbox = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

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

function fullName() {
  const formName = document.getElementById('input-name');
  const formLastName = document.getElementById('input-lastname');
  const paragraph = document.createElement('p');
  paragraph.innerHTML = `Nome: ${formName.value} ${formLastName.value}`;
  return paragraph;
}

function emailAddress() {
  const formEmail = document.getElementById('input-email');
  const paragraph = document.createElement('p');
  paragraph.innerHTML = `Email: ${formEmail.value}`;
  return paragraph;
}

function whichHouse() {
  const formHouse = document.getElementById('house');
  const paragraph = document.createElement('p');
  paragraph.innerHTML = `Casa: ${formHouse.value}`;
  return paragraph;
}

function whichFamily() {
  const formFamilies = document.querySelectorAll('input[type="radio"][name="family"]');
  const paragraph = document.createElement('p');
  let string = '';
  formFamilies.forEach((family) => {
    if (family.checked) {
      string = family.parentElement.innerText;
    }
  });
  paragraph.innerHTML = `Família: ${string}`;
  return paragraph;
}

function whichTechnologies() {
  const formTechnologies = document.querySelectorAll('input[type="checkbox"][name="technologies"]');
  const paragraph = document.createElement('p');
  let string = '';
  formTechnologies.forEach((materia) => {
    if (materia.checked) {
      string += ` ${materia.parentElement.innerText},`;
    }
  });
  string = string.substring(0, string.length - 1);
  paragraph.innerHTML = `Matérias:${string}`;
  return paragraph;
}

function whichRate() {
  const formRates = document.querySelectorAll('input[type="radio"][name="rate"]');
  const paragraph = document.createElement('p');
  let string = '';
  formRates.forEach((rate) => {
    if (rate.checked) {
      string = rate.parentElement.innerText;
    }
  });
  paragraph.innerHTML = `Avaliação: ${string}`;
  return paragraph;
}

function userComment() {
  const formTextArea = document.getElementById('textarea');
  const paragraph = document.createElement('p');
  paragraph.innerHTML = `Observações: ${formTextArea.value}`;
  return paragraph;
}

function printUserData(event) {
  event.preventDefault();
  const printDiv = document.getElementById('user-information');
  printDiv.innerHTML = '';
  const formInputs = document.getElementById('container-form');
  formInputs.style.display = 'none';
  printDiv.style.display = 'block';
  printDiv.appendChild(fullName());
  printDiv.appendChild(emailAddress());
  printDiv.appendChild(whichHouse());
  printDiv.appendChild(whichFamily());
  printDiv.appendChild(whichTechnologies());
  printDiv.appendChild(whichRate());
  printDiv.appendChild(userComment());
}

submitButton.addEventListener('click', printUserData);

window.onload = () => {
  disableButton();
  countCharacters();
};
