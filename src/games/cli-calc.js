import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameCondition = 'What is the result of the expression?';

const generateExpression = () => {
  const firstRandomNumber = generateRandomNumber(30, 1);
  const secondRandomNumber = generateRandomNumber(30, 1);
  const randomIndex = generateRandomNumber(2, 0);
  const operator = ['+', '-', '*'][randomIndex];
  return `${firstRandomNumber} ${operator} ${secondRandomNumber}`;
};

const solveExpression = (exp) => {
  const [num1, operator, num2] = exp.split(' ');
  let result = 0;
  console.log(operator);
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

  return result;
};

const generateRound = () => {
  const expression = generateExpression();
  const question = `Question: ${expression}`;
  const correctAnswer = solveExpression(expression);
  return [question, correctAnswer];
};

const startCalcGame = () => {
  startGame(
    gameCondition,
    generateRound,
  );
};

export default startCalcGame;
