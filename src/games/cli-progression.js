import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameCondition = 'What number is missing in the progression?';

const minStartValue = 1;
const maxStartValue = 20;
const minSteptValue = 2;
const maxSteptValue = 10;
const progressionLength = 10;

const generateProgression = () => {
  const progressionStartNumber = generateRandomNumber(minStartValue, maxStartValue);
  const step = generateRandomNumber(minSteptValue, maxSteptValue);
  let digit = progressionStartNumber;
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(digit);
    digit += step;
  }
  return progression;
};

const hideElem = (array, index) => {
  const firstPart = array.slice(0, index);
  const secontPart = array.slice(index + 1);
  return [...firstPart, '..', ...secontPart];
};

const createProgressionForGame = () => {
  const progession = generateProgression(progressionLength);
  const hiddenIndex = generateRandomNumber(0, progressionLength - 1);
  const hiddenDigit = progession[hiddenIndex];
  const updateProgression = hideElem(progession, hiddenIndex);
  return [updateProgression.join(' '), String(hiddenDigit)];
};

const startProgressionGame = () => {
  startGame(
    gameCondition,
    createProgressionForGame,
  );
};

export default startProgressionGame;
