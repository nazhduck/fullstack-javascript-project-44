#!/usr/bin/env node

import readlineSync from "readline-sync";
import { myName, head } from '../src/index.js';

head();

console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

const isEven = (subArr) => {
  for (let i = 0; i < subArr.length; i += 1) {
    console.log(`Qusetion: ${subArr[i]}`);
    const answer = readlineSync.question("Your answer: ");
    if ((subArr[i] % 2 !== 0 && answer === "no") || (subArr[i] % 2 === 0 && answer === "yes")) {
      console.log("Correct!");
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${subArr[i] % 2 === 0 ? "yes" : "no"}'.\nLet's try again, ${myName}!`);
      break;
    }
    i === 2 ? console.log(`Congratulations, ${myName}!`) : undefined;
  }
};

const main = [15, 6, 7];
isEven(main);
