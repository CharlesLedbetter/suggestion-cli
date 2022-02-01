import { Command } from "commander";


const program = new Command('hello')
.name('basic hello')
.option('-g, --greet <greet>', 'who or what to greet')
.parse(process.argv);

console.log(`hello ${program.opts().greet}`)