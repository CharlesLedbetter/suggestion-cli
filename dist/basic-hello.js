"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command('hello')
    .name('basic hello')
    .option('-g, --greet <greet>', 'who or what to greet')
    .parse(process.argv);
console.log(`hello ${program.opts().greet}`);
