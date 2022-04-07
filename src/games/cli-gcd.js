import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const generateNumbers = () => {
  const FirstRandomNumber = generateRandomNumber(100, 2);
  const SecondRandomNumber = generateRandomNumber(100, 2);

  return `${FirstRandomNumber} ${SecondRandomNumber}`;
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
  return `${commonDivisor}`;
};

const gameCondition = 'Find the greatest common divisor of given numbers.';

const startGcdGame = () => {
  startGame(
    gameCondition,
    generateNumbers,
    findGreatesDivisor,
  );
};

export default startGcdGame;
