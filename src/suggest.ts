import {Command} from 'commander';

new Command()
.version('1.0.0')
.description('sugestion cli')
.command('movie', 'suggests a movie')
.command('show', 'suggests a show')
.parse(process.argv);