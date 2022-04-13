import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameCondition = 'Find the greatest common divisor of given numbers.';

const minValue = 1;
const maxValue = 100;

const generateNumbers = (count) => {
  const numbers = [];
  for (let i = 0; i < count; i += 1) {
    const number = generateRandomNumber(minValue, maxValue);
    numbers.push(number);
  }
  return numbers;
};

const findDivisors = (num) => {
  const divisors = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
};

const findGreatesDivisor = (num1, num2) => {
  const numOneDivisors = findDivisors(num1);
  const numTwoDivisors = findDivisors(num2);

  let maxCommonDivisor = 1;
  for (let i = 0, j = 0; i < numOneDivisors.length; j < numTwoDivisors.length) {
    if (numOneDivisors[i] === numTwoDivisors[j]) {
      maxCommonDivisor = numOneDivisors[i];
      i += 1;
      j += 1;
    } else if (numOneDivisors[i] > numTwoDivisors[j]) {
      j += 1;
    } else {
      i += 1;
    }
  }
  return maxCommonDivisor;
};

const generateRound = () => {
  const [firsNumber, secondNumber] = generateNumbers(2);
  const expression = `${firsNumber} ${secondNumber}`;
  const answer = findGreatesDivisor(firsNumber, secondNumber);

  return [expression, String(answer)];
};

const startGcdGame = () => {
  startGame(
    gameCondition,
    generateRound,
  );
};

export default startGcdGame;
