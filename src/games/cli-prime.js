import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minValue = 1;
const maxValue = 100;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const expression = generateRandomNumber(minValue, maxValue);
  const answer = isPrime(expression) ? 'yes' : 'no';

  return [expression, answer];
};

const startPrimeGame = () => {
  startGame(
    gameCondition,
    generateRound,
  );
};

export default startPrimeGame;
