import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const dataForQuestion = generateRandomNumber(100, 1);
  const question = `Question: ${dataForQuestion}`;
  const correctAnswer = isPrime(dataForQuestion) ? '"yes"' : '"no"';
  return [question, correctAnswer];
};

const startPrimeGame = () => {
  startGame(
    gameCondition,
    generateRound,
  );
};

export default startPrimeGame;
