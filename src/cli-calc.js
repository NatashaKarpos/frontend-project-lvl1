export const calculateAnswer = (str) => {
  const [num1, operator, num2] = str.split(' ');
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
      break;
  }

  return `${result}`;
};

export const calc = () => {
  const FirstRandomNumber = (Math.floor(Math.random() * (30 - 1) + 1));
  const SecondRandomNumber = (Math.floor(Math.random() * (30 - 1) + 1));
  const randomIndex = (Math.floor(Math.random() * (3 - 0) + 0));
  const operator = ['+', '-', '*'][randomIndex];

  return `${FirstRandomNumber} ${operator} ${SecondRandomNumber}`;
};
