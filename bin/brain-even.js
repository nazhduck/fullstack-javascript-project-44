#!/usr/bin/env node
/* eslint-disable no-restricted-syntax */
import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");

const myName = readlineSync.question("May I have your name? ");
console.log(`Hello, ${myName}!`);

console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

let i = 0;
const numbers = [15, 6, 7];
const isEven = () => {
  for (const num of numbers) {
    console.log(`Qusetion: ${num}`);
    const answer = readlineSync.question("Your answer: ");
    if (
      (num % 2 !== 0 && answer === "no") || (num % 2 === 0 && answer === "yes")
    ) {
      console.log("Correct!");
    } else {
      i += 1;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${num % 2 === 0 ? "yes" : "no"}'.\nLet's try again, ${myName}!`);
      break;
    }
  }
  if (i === 0) {
    console.log(`Congratulations, ${myName}!`);
  }
};

isEven();
