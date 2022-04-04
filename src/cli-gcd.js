export const generateNumbers = () => {
  const FirstRandomNumber = (Math.floor(Math.random() * (100 - 2) + 2));
  const SecondRandomNumber = (Math.floor(Math.random() * (100 - 2) + 2));

  return `${FirstRandomNumber} ${SecondRandomNumber}`;
};

const findDivisors = (num) => {
  const divisors = [];
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
};

export const findGreatesDivisor = (stringOfNumbers) => {
  const [num1, num2] = stringOfNumbers.split(' ');
  const numOneDivisors = findDivisors(num1);
  const numTwoDivisors = findDivisors(num2);

  let commonDivisor = 1;
  for (let i = 0, j = 0; i < numOneDivisors.length; j < numTwoDivisors.length) {
    if (numOneDivisors[i] === numTwoDivisors[j]) {
      commonDivisor = numOneDivisors[i];
      i += 1;
      j += 1;
    } else if (numOneDivisors[i] > numTwoDivisors[j]) {
      j += 1;
    } else {
      i += 1;
    }
  }
  return `${commonDivisor}`;
};
