import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

const minValue = 1;
const maxValue = 100;

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const expression = generateRandomNumber(minValue, maxValue);
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
