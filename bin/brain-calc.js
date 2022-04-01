#!/usr/bin/env node

import { calc, calculateAnswer } from '../src/cli-calc.js';
import startGame from '../src/index.js';

startGame(
  'What is the result of the expression?',
  calc,
  calculateAnswer,
);
