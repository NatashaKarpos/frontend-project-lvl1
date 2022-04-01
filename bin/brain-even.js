#!/usr/bin/env node

import { questionToUser, isEven } from '../src/cli-even.js';
import startGame from '../src/index.js';

startGame(
  'Answer "yes" if the number is even, otherwise answer "no".',
  questionToUser,
  isEven,
);
