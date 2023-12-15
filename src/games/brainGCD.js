import start from '../index.js';
import random from '../getRandomInRange.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (firstItem, secondItem) => {
  if (firstItem === 0 || secondItem === 0) {
    return firstItem + secondItem;
  }
  if (firstItem > secondItem) {
    return getGreatestCommonDivisor(firstItem - secondItem, secondItem);
  }
  return getGreatestCommonDivisor(firstItem, secondItem - firstItem);
};

const generateRound = () => {
  const firstNum = random(1, 100);
  const secondNum = random(1, 100);

  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = String(getGreatestCommonDivisor(firstNum, secondNum));

  return [question, correctAnswer];
};

export default () => start(rules, generateRound);
