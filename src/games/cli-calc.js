import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const calculateAnswer = (str) => {
  const [num1, operator, num2] = str.split(' ');
  let result = 0;

  switch (operator) {
    case '+':
      result = +num1 + +num2;
      break;
    case '-':
      result = +num1 - +num2;
      break;
    case '*':
      result = +num1 * +num2;
      break;
    default:
      break;
  }

  return `${result}`;
};

const calc = () => {
  const FirstRandomNumber = generateRandomNumber(30, 1);
  const SecondRandomNumber = generateRandomNumber(30, 1);
  const randomIndex = generateRandomNumber(3, 0);
  const operator = ['+', '-', '*'][randomIndex];

  return `${FirstRandomNumber} ${operator} ${SecondRandomNumber}`;
};

const gameCondition = 'What is the result of the expression?';

const startCalcGame = () => {
  startGame(
    gameCondition,
    calc,
    calculateAnswer,
  );
};

export default startCalcGame;
