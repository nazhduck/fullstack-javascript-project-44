import start from "../index.js";
import random from "../randomFunc.js";

const log = "What number is missing in the progression?";

const progression = (countItter = random(5, 10)) => {
  let currentNumber = random(1, 100);
  const itter = random(1, 10);
  const finalProgression = [currentNumber];
  for (let i = 1; i < countItter; i += 1) {
    finalProgression.push((currentNumber += itter));
  }
  const randomResult = random(0, finalProgression.length - 1);
  const correctAnswer = finalProgression[randomResult];
  finalProgression[randomResult] = "...";
  return [finalProgression.join(" "), String(correctAnswer)];
};

const answerQuestion = () => {
  const [question, correctAnswer] = progression();
  return [question, correctAnswer];
};

export default () => start(log, answerQuestion);
