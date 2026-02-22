#!/usr/bin/env node

import { Command } from 'commander'
import { initCommand } from './commands/init'
import { validateCommand } from './commands/validate'

const program = new Command()

program
  .name('paintjob')
  .description('PaintJob CLI - JSON-driven design system for React Native and Next.js')
  .version('0.1.0')

program
  .command('init')
  .description('Initialize a new PaintJob configuration file')
  .action(initCommand)

program
  .command('validate')
  .description('Validate your paintjob.config.json file')
  .argument('[path]', 'Path to config file', './paintjob.config.json')
  .action(validateCommand)

program.parse()

