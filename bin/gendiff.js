#!/usr/bin/env node

import { program } from 'commander'
import packageJson from '../package.json' with { type: 'json' }
import genDiff from '../src/index.js'

program
  .version(packageJson.version)
  .argument('<filepath1>')
  .argument('<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2, options) => {
    const result = genDiff(filepath1, filepath2)
    console.log(result)
  })
  .parse(process.argv)
