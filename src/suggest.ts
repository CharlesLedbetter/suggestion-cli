import { program } from 'commander';

program
.name('suggest')
.version('1.0.0')
.description('sugestion cli')
.command('movie', 'suggests a movie')
.command('show', 'suggests a show')
.command('song', 'suggests a song')
.parse(process.argv);
