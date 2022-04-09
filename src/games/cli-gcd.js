import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameCondition = 'Find the greatest common divisor of given numbers.';

const generateNumbers = () => {
  const firstRandomNumber = generateRandomNumber(100, 2);
  const secondRandomNumber = generateRandomNumber(100, 2);
  return `${firstRandomNumber} ${secondRandomNumber}`;
};

const findDivisors = (num) => {
  const divisors = [];
  for (let i = 2; i <= num; i += 1) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
};

const findGreatesDivisor = (stringOfNumbers) => {
  const [num1, num2] = stringOfNumbers.split(' ');

  const numOneDivisors = findDivisors(num1);
  const numTwoDivisors = findDivisors(num2);

  let commonDivisor = 1;
  for (let i = 0, j = 0; i < numOneDivisors.length; j < numTwoDivisors.length) {
    if (numOneDivisors[i] === numTwoDivisors[j]) {
      commonDivisor = numOneDivisors[i];
      i += 1;
      j += 1;
    } else if (numOneDivisors[i] > numTwoDivisors[j]) {
      j += 1;
    } else {
      i += 1;
    }
  }
  return commonDivisor;
};

const generateRound = () => {
  const dataForQuestion = generateNumbers();
  const question = `Question: ${dataForQuestion}`;
  const correctAnswer = findGreatesDivisor(dataForQuestion);
  return [question, correctAnswer];
};

const startGcdGame = () => {
  startGame(
    gameCondition,
    generateRound,
  );
};

export default startGcdGame;
