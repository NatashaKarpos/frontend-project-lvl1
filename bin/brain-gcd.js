#!/usr/bin/env node

import { generateNumbers, findGreatesDivisor } from '../src/cli-gcd.js';
import startGame from '../src/index.js';

startGame(
  'Find the greatest common divisor of given numbers.',
  generateNumbers,
  findGreatesDivisor,
);
