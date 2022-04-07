import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const generateNumber = () => generateRandomNumber(100, 1);

const isPrime = (number) => {
  let result = true;

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      result = false;
    }
  }
  return result ? 'yes' : 'no';
};

const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startPrimeGame = () => {
  startGame(
    gameCondition,
    generateNumber,
    isPrime,
    false,
  );
};

export default startPrimeGame;
