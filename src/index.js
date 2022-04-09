import readlineSync from 'readline-sync';

const isCorrectAnswer = (userAnswer, rigthAnswer) => {
  if (typeof rigthAnswer === 'string') {
    return userAnswer === rigthAnswer.slice(1, -1);
  }
  return +userAnswer === rigthAnswer;
};

const startGame = (condition, generateRound) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(condition);

  const numberOfRounds = 3;

  for (let i = 0; i < numberOfRounds; i += 1) {
    const dataForRound = generateRound();
    const [question, rightAnswer] = dataForRound;

    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (isCorrectAnswer(userAnswer, rightAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
