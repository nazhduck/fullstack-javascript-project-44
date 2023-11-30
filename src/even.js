import readlineSync from "readline-sync";

const myName = readlineSync.question(
  "Welcome to the Brain Games!\nMay I have your name? ",
);

const head = (str) => {
  console.log(`Hello, ${myName}!`);
  console.log(str);
};

const random = (num = 500) => Math.floor(Math.random() * num);

const questionAnswer = () => {
  let i = 0;
  for (; i < 3; i += 1) {
    const currentRandom = random();
    console.log(`Question: ${currentRandom}`);
    const answer = readlineSync.question("Your answer: ");
    if (
      (currentRandom % 2 === 0 && answer === "yes")
      || (currentRandom % 2 !== 0 && answer === "no")
    ) {
      console.log("Correct!");
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${
          currentRandom % 2 === 0 ? "yes" : "no"
        }'.`,
      );
      break;
    }
  }
  i < 2
    ? console.log(`Let's try again, ${myName}!`)
    : console.log(`Congratulations, ${myName}`);
};

export { head, questionAnswer };
