import { Command } from "commander";
import { getRandomProgram } from "./reelgood-client";
import { debugLogger } from "./debug-logger";

const program = new Command('show')
.name('suggest show')
.requiredOption('-s, --services <service>', 'service')
.option('-g, --genres <genre>', 'genre')
.option('-d, --debug', 'debug')
.parse(process.argv);

getRandomProgram('show', program.opts().service, program.opts().genre).then((res: any) => {
    const data = res.data;
    console.log(`\nShow: ${data.title}\n\nDescription: ${data.overview}\n\nRuntime: ${data.runtime} minutes\n`);
    debugLogger(program.opts().debug, data);
}).catch((err) => {
    console.error("An error has occured");
    debugLogger(program.opts().debug, err);
});
