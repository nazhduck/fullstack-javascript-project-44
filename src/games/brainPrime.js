import start from '../index.js';
import random from '../randomFunc.js';

const log = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const answerQuestion = () => {
  const question = random(0, 100);
  const correctAnswer = isPrime(question);
  return [question, correctAnswer];
};

export default () => start(log, answerQuestion);