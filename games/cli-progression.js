import startGame from '../src/index.js';

const generateProgression = () => {
  const progressionStartNumber = (Math.floor(Math.random() * (20 - 1) + 1));
  const step = (Math.floor(Math.random() * (10 - 2) + 2));
  const randomPosition = (Math.floor(Math.random() * (9 - 0) + 0));

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

const startProgressionGame = () => {
  startGame(
    'What number is missing in the progression?',
    generateProgression,
    showRigthAnswer,
  );
};

export default startProgressionGame;
