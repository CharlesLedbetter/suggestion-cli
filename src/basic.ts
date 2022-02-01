import {Command} from 'commander';

new Command()
.version(require('../package.json').version)
.description('example cli')
.command('hello', 'say hello')
.command('goodbye', 'say goodbye')
.command('stayawhile', 'stay for a while')
.parse(process.argv);