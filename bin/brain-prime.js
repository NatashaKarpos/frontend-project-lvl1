#!/usr/bin/env node

import { generateRandomNumber, isPrime } from '../src/cli-prime.js';
import startGame from '../src/index.js';

startGame(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateRandomNumber,
  isPrime,
);
