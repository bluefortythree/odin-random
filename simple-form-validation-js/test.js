let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
})

let email = document.getElementById('email');
let country = document.getElementById('country');
let zip = document.getElementById('zip');
let password = document.getElementById('password');
let confirm = document.getElementById('confirm');

let emailError = document.getElementById('emailError');
let countryError = document.getElementById('countyError');
let zipError = document.getElementById('zipError');
let passwordError = document.getElementById('passwordError');
let confirmError = document.getElementById('confirmError');

email.addEventListener('input', () => {
  if(email.validity.valid) {
    emailError.innerText = '';
  } else {
    showEmailError();
  }
})

function showEmailError() {
  if(email.validity.valueMissing) {
    emailError.innerText = 'You need to enter an email address.'
  } else if(email.validity.typeMismatch) {
    emailError.innerText = 'Entered value needs to be an email adddress.'
  }
}

zip.addEventListener('input', () => {
  if(zip.validity.valid) {
    zipError.innerText = '';
  } else {
    showZipError();
  }
})

function showZipError() {
  if(zip.validity.valueMissing) {
    zipError.innerText = 'You need to enter a ZIP code.'
  } else if(zip.validity.patternMismatch) {
    zipError.innerText = 'Entered value needs to be a valid ZIP code.'
  }
}

password.addEventListener('input', () => {
  if(password.validity.valid) {
    passwordError.innerText = '';
  } else {
    showPasswordError();
  }
})

function showPasswordError() {
  if(password.validity.valueMissing) {
    passwordError.innerText = 'Please enter a password.'
  } else if(password.validity.patternMismatch) {
    passwordError.innerText = 'Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number.'
  }
}

confirm.addEventListener('input', () => {
  if(password.value === confirm.value) {
    confirmError.innerText = '';
  } else {
    confirmError.innerText = 'Please make sure your passwords match.'
    confirm.style.border = '1px solid red';
  }
})

