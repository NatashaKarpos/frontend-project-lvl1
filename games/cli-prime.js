import startGame from '../src/index.js';

const generateRandomNumber = () => (Math.floor(Math.random() * (100 - 1) + 1));

const isPrime = (number) => {
  let result = true;

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      result = false;
    }
  }
  return result ? 'yes' : 'no';
};

const startPrimeGame = () => {
  startGame(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    generateRandomNumber,
    isPrime,
    false,
  );
};

export default startPrimeGame;
