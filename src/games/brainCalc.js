import start from "../index.js";
import random from "../randomFunc.js";

const signs = ["+", "-", "*"];

const log = "What is the result of the expression?";

const calcNumbers = (symbol, firstNumber, secondNumber) => {
  const ittr = [];
  if (symbol === "+") {
    ittr.push(firstNumber + secondNumber);
  } else if (symbol === "-") {
    ittr.push(firstNumber - secondNumber);
  } else if (symbol === "*") {
    ittr.push(firstNumber * secondNumber);
  }
  return ittr.join("");
};

const answerQuestion = () => {
  const sign = signs[random(0, 2)];
  const firstNum = random();
  const secondNum = random();

  const question = `${firstNum} ${sign} ${secondNum}`;
  const correctAnswer = String(calcNumbers(sign, firstNum, secondNum));

  return [question, correctAnswer];
};

export default () => {
  start(log, answerQuestion);
};
