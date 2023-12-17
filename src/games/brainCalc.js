import start from '../index.js';
import random from '../getRandomInRange.js';

const signs = ['+', '-', '*'];

const rules = 'What is the result of the expression?';

const calcExpression = (symbol, firstNumber, secondNumber) => {
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

const generateRound = () => {
  const sign = signs[random(0, signs.length - 1)];
  const firstNum = random(0, 100);
  const secondNum = random(0, 100);

  const question = `${firstNum} ${sign} ${secondNum}`;
  const correctAnswer = calcExpression(sign, firstNum, secondNum);

  return [question, correctAnswer];
};

export default () => start(rules, generateRound);
