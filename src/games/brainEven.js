import start from "../index.js";
import random from "../randomFunc.js";

const log = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const answerQuestion = () => {
  const question = random();
  const correctAnswer = question % 2 === 0 ? "yes" : "no";

  return [question, correctAnswer];
};

export default () => start(log, answerQuestion);
