import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const generateProgression = () => {
  const progressionStartNumber = generateRandomNumber(20, 1);
  const step = generateRandomNumber(10, 2);
  const randomPosition = generateRandomNumber(9, 0);

  let progression = '';
  let nextNumber = progressionStartNumber;
  for (let i = 0; i < 9; i += 1) {
    if (i === randomPosition) {
      progression += '.. ';
    } else {
      progression += `${nextNumber} `;
    }
    nextNumber += step;
  }
  return progression;
};

const showRigthAnswer = (stringOfProgression) => {
  const arrayOfProgression = stringOfProgression.trim().split(' ');
  const index = arrayOfProgression.indexOf('..');
  const position = index > 5 ? 3 : 7;
  const step = arrayOfProgression[position] - arrayOfProgression[position - 1];

  let siblingNumber = 0;
  if (index === 0) {
    siblingNumber = +arrayOfProgression[index + 1];
    return `${siblingNumber - step}`;
  }
  siblingNumber = +arrayOfProgression[index - 1];
  return `${siblingNumber + step}`;
};

const gameCondition = 'What number is missing in the progression?';

const startProgressionGame = () => {
  startGame(
    gameCondition,
    generateProgression,
    showRigthAnswer,
  );
};

export default startProgressionGame;
