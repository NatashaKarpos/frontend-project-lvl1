import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameCondition = 'What number is missing in the progression?';

const generateProgression = () => {
  const progressionStartNumber = generateRandomNumber(20, 1);
  const step = generateRandomNumber(10, 2);
  const randomPosition = generateRandomNumber(9, 0);
  const progressionLength = 10;

  let progression = '';
  let digit = progressionStartNumber;
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === randomPosition) {
      progression += '.. ';
    } else {
      progression += `${digit} `;
    }
    digit += step;
  }
  return progression;
};

const showRigthAnswer = (stringOfProgression) => {
  const arrayOfProgression = stringOfProgression.trim().split(' ');
  const indexOfHiddenDigit = arrayOfProgression.indexOf('..');
  const position = indexOfHiddenDigit > 5 ? 3 : 7;
  const step = arrayOfProgression[position] - arrayOfProgression[position - 1];

  let siblingDigit = 0;
  if (indexOfHiddenDigit === 0) {
    siblingDigit = +arrayOfProgression[indexOfHiddenDigit + 1];
    return siblingDigit - step;
  }
  siblingDigit = +arrayOfProgression[indexOfHiddenDigit - 1];
  return siblingDigit + step;
};

const generateRound = () => {
  const progression = generateProgression();
  const question = `Question: ${progression}`;
  const correctAnswer = showRigthAnswer(progression);
  return [question, correctAnswer];
};

const startProgressionGame = () => {
  startGame(
    gameCondition,
    generateRound,
  );
};

export default startProgressionGame;
