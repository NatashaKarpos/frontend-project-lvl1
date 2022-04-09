import startGame from '../index.js';
import { generateRandomNumber, generateDataForGame } from '../utils.js';

const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => generateDataForGame(() => generateRandomNumber(100, 1), isEven);

const startEvenGame = () => {
  startGame(
    gameCondition,
    generateRound,
  );
};

export default startEvenGame;
