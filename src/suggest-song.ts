import { Command } from "commander";
import axios from 'axios';
import debugLogger from "./debug-logger";

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
    console.log(
        `\nArtist: ${data.artists_sort}\n\nAlbum: ${data.title}\n\n` +
        `Song: ${getRandomTrack(data)}\n\nAlbum URL: ${data.uri}\n`
        );
    debugLogger(program.opts().debug, data);
}).catch((err) => {
    console.error("An error has occured");
    debugLogger(program.opts().debug, err);
});

function getRandomTrack(data: any) {
    return data.tracklist[Math.floor(Math.random() * data.tracklist.length)].title
}