import start from '../index.js';
import random from '../getRandomInRange.js';
import isTrueOrFalse from './isTrueOrFalse.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = random(0, 100);
  const correctAnswer = isTrueOrFalse(isEven, question);

  return [question, correctAnswer];
};

export default () => start(rules, generateRound);
