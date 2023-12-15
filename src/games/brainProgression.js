import start from '../index.js';
import random from '../getRandomInRange.js';

const rules = 'What number is missing in the progression?';

const generateProgression = (first, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(first + step * i);
  }
  return progression;
};

const getProgression = (lengthOfProgression) => {
  const currentNumber = random(0, 100);
  const stepOfProgression = random(1, 10);
  const progression = generateProgression(currentNumber, stepOfProgression, lengthOfProgression);
  const randomResult = random(0, progression.length - 1);
  const correctAnswer = progression[randomResult];
  progression[randomResult] = '..';
  return [progression.join(' '), String(correctAnswer)];
};

const generateRound = () => {
  const [question, correctAnswer] = getProgression(random(5, 10));
  return [question, correctAnswer];
};

export default () => start(rules, generateRound);
