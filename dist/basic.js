"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
new commander_1.Command()
    .version(require('../package.json').version)
    .description('example cli')
    .command('hello', 'say hello')
    .command('goodbye', 'say goodbye')
    .command('stayawhile', 'stay for a while')
    .parse(process.argv);
