import { Command } from "commander";
import getRandomProgram from "./reelgood-client";
import debugLogger from "./debug-logger";
import colors from 'colors/safe';
import { AxiosResponse } from "axios";

const program = new Command('movie')
.name('suggest movie')
.requiredOption('-s, --service <service>', 'streaming service to get suggestion for <netflix, hulu, amazon, hbo>')
.option('-g, --genre <genre>', 'genre of movie to suggest <drama, action, adventure, animation, biography, comedy, '
    + 'crime, documetary, fantasy, history, horror, mystery, scifi, sport, thriller, lgbtq, anime, cult, indie, '
    + 'independent>')
.option('-d, --debug', 'when present debugging mode is enabled')
.parse(process.argv);

getRandomProgram('movie', program.opts().service, program.opts().genre, program.opts().debug).then((res: AxiosResponse) => {
    const data = res.data;
    printMovieResults(data.title, data.overview, data.runtime);
    debugLogger(program.opts().debug, 'Data', data);
}).catch((err) => {
    console.error(err.message || "An error has occured");
    debugLogger(program.opts().debug, 'Error', err);
});

function printMovieResults(title: string, overview: string, runtime: string): void {
    console.log(colors.bold(`
${colors.cyan('Movie:')} ${title}

${colors.cyan('Description:')} ${overview}

${colors.cyan('Runtime:')} ${runtime} minutes
    `));
}