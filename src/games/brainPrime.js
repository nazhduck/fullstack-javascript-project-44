import start from '../index.js';
import random from '../getRandomInRange.js';
import isTrueOrFalse from './isTrueOrFalse.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = random(0, 100);
  const correctAnswer = isTrueOrFalse(isPrime, question);
  return [question, correctAnswer];
};

export default () => start(rules, generateRound);
