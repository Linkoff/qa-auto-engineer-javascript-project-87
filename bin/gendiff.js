#!/usr/bin/env node

import { program } from 'commander'
import packageJson from '../package.json' with { type: 'json' }

program
  .version(packageJson.version)
  .argument('<filepath1>')
  .argument('<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .parse(process.argv)
