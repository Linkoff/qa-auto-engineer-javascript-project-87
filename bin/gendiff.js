#!/usr/bin/env node

import { program } from 'commander'
import packageJson from '../package.json' with { type: 'json' }

program
  .version(packageJson.version)
  .description('Compares two configuration files and shows a difference.')
  .parse(process.argv)
