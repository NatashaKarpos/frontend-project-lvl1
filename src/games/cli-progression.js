import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameCondition = 'What number is missing in the progression?';

const generateProgression = () => {
  const progressionStartNumber = generateRandomNumber(1, 20);
  const step = generateRandomNumber(2, 10);
  const progressionLength = 10;
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
  const progession = generateProgression();
  const hiddenIndex = generateRandomNumber(0, 9);
  const hiddenDigit = `${progession[hiddenIndex]}`;
  const updateArr = hideElem(progession, hiddenIndex);
  return [updateArr.join(' '), hiddenDigit];
};

const generateRound = () => {
  const [expression, answer] = createProgressionForGame();
  return [expression, answer];
};

const startProgressionGame = () => {
  startGame(
    gameCondition,
    generateRound,
  );
};

export default startProgressionGame;
