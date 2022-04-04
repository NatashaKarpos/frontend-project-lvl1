import readlineSync from 'readline-sync';

const askUserName = () => readlineSync.question('May I have your name? ');

const startGame = (condition, game, checkAnswer) => {
  // greeting
  const userName = askUserName();
  console.log(`Hello, ${userName}!`);
  console.log(condition);
  let result = true;
  let counter = 0;

  do {
    const question = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rigthAnswer = checkAnswer(question);

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
};

export default startGame;
