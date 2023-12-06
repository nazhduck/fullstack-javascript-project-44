import start from '../index.js';
import random from '../randomFunc.js';

const log = 'What number is missing in the progression?';

const getProgression = (lengthOfProgression) => {
  let currentNumber = random(0, 100);
  const stepOfProgression = random(1, 10);
  const progression = [currentNumber];
  for (let i = 1; i < lengthOfProgression; i += 1) {
    progression.push((currentNumber += stepOfProgression));
  }
  const randomResult = random(0, progression.length - 1);
  const correctAnswer = progression[randomResult];
  progression[randomResult] = '..';
  return [progression.join(' '), String(correctAnswer)];
};

const answerQuestion = () => {
  const [question, correctAnswer] = getProgression(random(5, 10));
  return [question, correctAnswer];
};

export default () => start(log, answerQuestion);
