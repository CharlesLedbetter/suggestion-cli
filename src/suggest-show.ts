import { Command } from "commander";
import getRandomProgram from "./reelgood-client";
import debugLogger from "./debug-logger";
import colors from 'colors/safe'

const program = new Command('show')
.name('suggest show')
.requiredOption('-s, --services <service>', 'service')
.option('-g, --genres <genre>', 'genre')
.option('-d, --debug', 'debug')
.parse(process.argv);

getRandomProgram('show', program.opts().service, program.opts().genre).then((res: any) => {
    const data = res.data;
    printShowResults(data.title, data.overview, data.runtime);
    debugLogger(program.opts().debug, data);
}).catch((err) => {
    console.error("An error has occured");
    debugLogger(program.opts().debug, err);
});

function printShowResults(title: string, overview: string, runtime: string): void {
    console.log(colors.bold(`
${colors.cyan('Show:')} ${title}

${colors.cyan('Description:')} ${overview}

${colors.cyan('Runtime:')} ${runtime} minutes
    `));
}