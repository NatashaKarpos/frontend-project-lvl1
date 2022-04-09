export const generateRandomNumber = (max, min) => Math.floor(Math.random() * (max + 1 - min) + min);

export const generateDataForGame = (generateExpression, showCorrectAnswer) => {
  const expression = generateExpression();
  const question = `Question: ${expression}`;
  let correctAnswer = showCorrectAnswer(expression);
  if (typeof correctAnswer === 'boolean') {
    correctAnswer = correctAnswer ? '"yes"' : '"no"';
  }
  return [question, correctAnswer];
};
