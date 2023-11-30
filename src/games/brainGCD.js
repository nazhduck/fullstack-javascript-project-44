import start from "../index.js";
import random from "../randomFunc.js";

const log = "Find the greatest common divisor of given numbers.";

const GCD = (firstNum, secondNum) => {
  const firstNumGCD = [];
  for (let i = 1; i <= firstNum; i += 1) {
    firstNum % i === 0 ? firstNumGCD.push(i) : null;
  }

  const secondNumGCD = [];
  for (let i = 1; i <= secondNum; i += 1) {
    secondNum % i === 0 ? secondNumGCD.push(i) : null;
  }

  for (const subFirst of firstNumGCD.reverse()) {
    for (const subSecond of secondNumGCD.reverse()) {
      if (subFirst === subSecond) {
        return subFirst;
      }
    }
  }
};

const answerQuestion = () => {
  const firstNum = random(1, 50);
  const secondNum = random(1, 50);

  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = String(GCD(firstNum, secondNum));

  return [question, correctAnswer];
};

export default () => start(log, answerQuestion);
