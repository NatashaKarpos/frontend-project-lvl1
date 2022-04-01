import readlineSync from 'readline-sync';
import askUserName from './cli.js';

export const isEven = (checkNumber) => (checkNumber % 2 === 0 ? 'yes' : 'no');

export const questionToUser = () => {
  const userName = askUserName();
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let result = true;
  let counter = 0;

  do {
    const question = (Math.floor(Math.random() * (100 - 1) + 1));
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rigthAnswer = isEven(question);

    if (userAnswer === rigthAnswer) {
      console.log('Correct!');
      counter += 1;
      if (counter === 3) {
        console.log(`Congratulations, ${userName}!`);
        result = false;
      }
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rigthAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      result = false;
    }
  } while (result);
} 