#!/usr/bin/env node

import { isGame, head } from '../src/index.js';

head(`Answer "yes" if the number is even, otherwise answer "no".`);
const main = [15, 6, 7];

isGame(main, '?', '?');
