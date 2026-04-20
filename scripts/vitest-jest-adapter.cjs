#!/usr/bin/env node

const { spawnSync } = require('node:child_process');

const rawArgs = process.argv.slice(2);
const filtered = [];

for (let i = 0; i < rawArgs.length; i += 1) {
  const arg = rawArgs[i];

  if (
    arg === '--testLocationInResults' ||
    arg === '--useStderr' ||
    arg === '--json' ||
    arg === '--colors' ||
    arg === '--runInBand' ||
    arg === '--no-coverage'
  ) {
    continue;
  }

  if (arg.startsWith('--watchAll=')) {
    const watch = arg.split('=')[1];
    filtered.push(watch === 'true' ? '--watch' : '--run');
    continue;
  }

  if (arg === '--watchAll') {
    filtered.push('--watch');
    continue;
  }

  if (arg === '--outputFile' || arg === '--testPathPattern') {
    i += 1;
    continue;
  }

  if (arg === '--reporters') {
    i += 1;
    continue;
  }

  filtered.push(arg);
}

if (!filtered.includes('--watch') && !filtered.includes('--run')) {
  filtered.unshift('--run');
}

const result = spawnSync('npx', ['vitest', ...filtered], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

process.exit(result.status ?? 1);