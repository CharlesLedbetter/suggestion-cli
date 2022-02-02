import { Command } from "commander";
import axios from 'axios';


const program = new Command('movie')
.name('suggest movie')
.requiredOption('-g, --genres <genres>', 'genres (comma seperated)')
.requiredOption('-s, --services <services>', 'services (comma seperated)')
.parse(process.argv);

const genreNumber = 14;

const test = axios({
    method: 'get',
    url:     `https://api.reelgood.com/v3.0/content/random?availability=onAnySource&content_kind=movie&genre=${genreNumber}&minimum_imdb=8&minimum_rg=80&nocache=true&region=us&sources=${program.opts().service}`
  }).then((res: any) => {
      const data = res.data;
      console.log(`Movie: ${data.tagline}\nDescription: ${data.overview}\nRuntime: ${data.runtime} minutes`);
}).catch((err) => {
    console.error("An error has occured");
});
