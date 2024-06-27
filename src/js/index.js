// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

const passwordElement = document.getElementById('password');
const passwordGeneratorElement = document.getElementById('input');
const passwordLengthElement = document.getElementById('length-text');
const buttonElement = document.getElementById('button');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '01234567890';
const symbols = '!@#$%^&*()_+-={}[]:;<>,.?/';

const lengthValue = event => {
  passwordLengthElement.textContent = passwordGeneratorElement.value;
};
passwordGeneratorElement.addEventListener('input', lengthValue);

let passwordCharacters = '';
const randomWord = () => {
  let finalPassword = '';
  for (let i = 0; i < passwordGeneratorElement.value; i++) {
    finalPassword += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }
  return finalPassword;
};

const generatePasswordButton = () => {
  passwordElement.value = randomWord();
};

buttonElement.addEventListener('click', generatePasswordButton);

const checkPasswordOptions = () => {
  passwordCharacters = '';
  if (uppercaseElement.checked) {
    passwordCharacters += upperLetters;
  }
  if (lowercaseElement.checked) {
    passwordCharacters += lowerLetters;
  }
  if (numbersElement.checked) {
    passwordCharacters += numbers;
  }
  if (symbolsElement.checked) {
    passwordCharacters += symbols;
  }
  console.log(passwordCharacters);
};

uppercaseElement.addEventListener('change', checkPasswordOptions);
lowercaseElement.addEventListener('change', checkPasswordOptions);
numbersElement.addEventListener('change', checkPasswordOptions);
symbolsElement.addEventListener('change', checkPasswordOptions);
