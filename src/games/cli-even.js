import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const isEven = (checkNumber) => (checkNumber % 2 === 0 ? 'yes' : 'no');

const questionToUser = () => generateRandomNumber(100, 1);

const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

const startEvenGame = () => {
  startGame(
    gameCondition,
    questionToUser,
    isEven,
    false,
  );
};

export default startEvenGame;
