import { Command } from "commander";
import axios from 'axios';
import debugLogger from "./debug-logger";
import colors from 'colors/safe'

const program = new Command('song')
.name('suggest song')
.option('-d, --debug', 'debug mode')
.parse(process.argv);

let randomNumber = Math.floor(Math.random() * 10000000) + 1;

axios({
    method: 'get',
    url:     `https://api.discogs.com/releases/${randomNumber}`
}).then((res: any) => {
    const data = res.data;
    const randomTrack = getRandomTrack(data);
    printSongResults(data.artists_sort, data.title, randomTrack, data.uri)
    debugLogger(program.opts().debug, 'Data', data);
}).catch((err) => {
    console.error("An error has occured");
    debugLogger(program.opts().debug, 'Error', err);
});

function getRandomTrack(data: any): string {
    return data.tracklist[Math.floor(Math.random() * data.tracklist.length)].title
}

function printSongResults(artist: string, title: string, song: string, uri: string): void {
    console.log(colors.bold(`
${colors.cyan('Artist:')} ${artist}

${colors.cyan('Album:')} ${title}

${colors.cyan('Song:')} ${song}

${colors.cyan('URL:')} ${uri}
    `));
}