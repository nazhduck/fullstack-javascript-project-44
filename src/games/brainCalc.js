import start from '../index.js';
import random from '../randomFunc.js';

const signs = ['+', '-', '*'];

const log = 'What is the result of the expression?';

const calcNumbers = (symbol, firstNumber, secondNumber) => {
  const resultOfCalc = [];
  if (symbol === '+') {
    resultOfCalc.push(firstNumber + secondNumber);
  } else if (symbol === '-') {
    resultOfCalc.push(firstNumber - secondNumber);
  } else if (symbol === '*') {
    resultOfCalc.push(firstNumber * secondNumber);
  }
  return resultOfCalc.join('');
};

const answerQuestion = () => {
  const sign = signs[random(0, signs.length - 1)];
  const firstNum = random(0, 100);
  const secondNum = random(0, 100);

  const question = `${firstNum} ${sign} ${secondNum}`;
  const correctAnswer = calcNumbers(sign, firstNum, secondNum);

  return [question, correctAnswer];
};

export default () => start(log, answerQuestion);
