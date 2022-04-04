#!/usr/bin/env node

import { generateProgression, showRigthAnswer } from '../src/cli-progression.js';
import startGame from '../src/index.js';

startGame(
  'What number is missing in the progression?',
  generateProgression,
  showRigthAnswer,
);
