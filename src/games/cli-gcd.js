import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameCondition = 'Find the greatest common divisor of given numbers.';

const generateNumbers = () => {
  const firstRandomNumber = generateRandomNumber(2, 100);
  const secondRandomNumber = generateRandomNumber(2, 100);
  return [firstRandomNumber, secondRandomNumber];
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

const findGreatesDivisor = (num1, num2) => {
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

const generateRound = () => {
  const [firsNumber, secondNumber] = generateNumbers();
  const expression = `${firsNumber} ${secondNumber}`;
  const answer = findGreatesDivisor(firsNumber, secondNumber);

  return [expression, answer];
};

const startGcdGame = () => {
  startGame(
    gameCondition,
    generateRound,
  );
};

export default startGcdGame;
