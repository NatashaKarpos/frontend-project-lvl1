import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameCondition = 'What is the result of the expression?';

const minValue = 1;
const maxValue = 30;
const operators = ['+', '-', '*'];

const generateDataForQuestion = () => {
  const firstRandomNumber = generateRandomNumber(minValue, maxValue);
  const secondRandomNumber = generateRandomNumber(minValue, maxValue);
  const randomIndex = generateRandomNumber(0, operators.length - 1);
  const operator = operators[randomIndex];
  return [firstRandomNumber, secondRandomNumber, operator];
};

const solveExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generateRound = () => {
  const [num1, num2, operator] = generateDataForQuestion();
  const expression = `${num1} ${operator} ${num2}`;
  const answer = solveExpression(num1, num2, operator);

  return [expression, String(answer)];
};

const startCalcGame = () => {
  startGame(
    gameCondition,
    generateRound,
  );
};

export default startCalcGame;
