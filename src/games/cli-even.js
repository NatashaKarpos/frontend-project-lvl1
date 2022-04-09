import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const dataForQuestion = generateRandomNumber(100, 1);
  const question = `Question: ${dataForQuestion}`;
  const correctAnswer = isEven(dataForQuestion) ? '"yes"' : '"no"';
  return [question, correctAnswer];
};

const startEvenGame = () => {
  startGame(
    gameCondition,
    generateRound,
  );
};

export default startEvenGame;
