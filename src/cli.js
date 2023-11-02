import readlineSync from "readline-sync";

export default () => {
  const myName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${myName}!`);
};
