import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const expression = generateRandomNumber(1, 100);
  const answer = isEven(expression) ? 'yes' : 'no';

  return [expression, answer];
};

const startEvenGame = () => {
  startGame(
    gameCondition,
    generateRound,
  );
};

export default startEvenGame;
