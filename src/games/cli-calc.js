import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameCondition = 'What is the result of the expression?';

const generateDataForQuestion = () => {
  const firstRandomNumber = generateRandomNumber(1, 30);
  const secondRandomNumber = generateRandomNumber(1, 30);
  const randomIndex = generateRandomNumber(0, 2);
  const operator = ['+', '-', '*'][randomIndex];
  return [firstRandomNumber, secondRandomNumber, operator];
};

const solveExpression = (num1, num2, operator) => {
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
      throw new Error(`Unknown operator: '${operator}'!`);
  }
  return `${result}`;
};

const generateRound = () => {
  const [num1, num2, operator] = generateDataForQuestion();
  const expression = `${num1} ${operator} ${num2}`;
  const answer = solveExpression(num1, num2, operator);

  return [expression, answer];
};

const startCalcGame = () => {
  startGame(
    gameCondition,
    generateRound,
  );
};

export default startCalcGame;
