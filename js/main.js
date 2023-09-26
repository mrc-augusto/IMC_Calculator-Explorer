import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import { calculateIMC, notNumber } from './utils.js';

const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');
const form = document.querySelector('form');

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();

form.onsubmit = function (event) {
  event.preventDefault()

  const weigth = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notNumber(weigth) || notNumber(height);

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return;
  };

  AlertError.close();

  const result = calculateIMC(weigth, height);
  displayResultMessage(result);

  inputWeight.value = '';
  inputHeight.value = '';
}

function displayResultMessage(result){
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open()
};


