import readlineSync from "readline-sync";

const myName = readlineSync.question("Welcome to the Brain Games!\nMay I have your name? ");

export const head = (str) => {
  console.log(`Hello, ${myName}!`);
  console.log(str);
};

export const isGame = (task, coditionOne, conditionTwo) => {
  for (let i = 0; i < task.length; i += 1) {
    console.log(`Qusetion: ${task[i]}`);
    const answer = readlineSync.question("Your answer: ");
    if (coditionOne) {
      console.log("Correct!");
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${conditionTwo}'.\nLet's try again, ${myName}!`);
      break;
    }
    i === 2 ? console.log(`Congratulations, ${myName}!`) : undefined;
  }
};
