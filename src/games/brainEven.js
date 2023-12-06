import start from '../index.js';
import random from '../randomFunc.js';

const log = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const answerQuestion = () => {
  const question = random(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => start(log, answerQuestion);
