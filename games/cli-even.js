import startGame from '../src/index.js';

const isEven = (checkNumber) => (checkNumber % 2 === 0 ? 'yes' : 'no');

const questionToUser = () => (Math.floor(Math.random() * (100 - 1) + 1));

const startEvenGame = () => {
  startGame(
    'Answer "yes" if the number is even, otherwise answer "no".',
    questionToUser,
    isEven,
  );
};

export default startEvenGame;
