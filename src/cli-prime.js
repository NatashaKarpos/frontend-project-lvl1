export const generateRandomNumber = () => (Math.floor(Math.random() * (100 - 1) + 1));

export const isPrime = (number) => {
  let result = true;

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      result = false;
    }
  }
  return result ? 'yes' : 'no';
};
