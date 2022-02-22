import axios from 'axios';
import debugLogger from './debug-logger';

export default async function getRandomProgram(programType: string, service: string, genre: string, debug: boolean) {
    const genreNumber = getGenreNumber(genre);
    return axios({
        method: 'get',
        url: getReelGoodUrl(programType, service, genreNumber, debug)
      });
}

// the below numbers are specific to reelgood API's genre codes
function getGenreNumber(genre: string): number {
    let genreNumber: number;
    switch(genre) {
        case 'drama': genreNumber = 3;
            break;
        case 'action':
        case 'adventure': genreNumber = 5;
            break;
        case 'animation': genreNumber = 6;
            break;
        case 'bio':
        case 'biopic':
        case 'biography': genreNumber = 7;
            break;
        case 'comedy': genreNumber = 9;
            break;
        case 'crime': genreNumber = 10;
            break;
        case 'doc':
        case 'documetary': genreNumber = 11;
            break;
        case 'fantasy': genreNumber = 13;
            break;
        case 'history': genreNumber = 17;
            break;
        case 'horror': genreNumber = 19;
            break;
        case 'mystery': genreNumber = 23;
            break;
        case 'scifi':
        case 'science-fiction': genreNumber = 26;
            break;
        case 'sport':
        case 'sports': genreNumber = 29;
            break;
        case 'thriller': genreNumber = 32;
            break;
        case 'lgbt':
        case 'lgbtq':
        case 'lgbtq+': genreNumber = 37;
            break;
        case 'anime': genreNumber = 39;
            break;
        case 'cult': genreNumber = 41;
            break;
        case 'indie':
        case 'independent': genreNumber = 43;
            break;
        default: genreNumber = new Array(3,5,9,13,26)[Math.floor(Math.random() * 5)];
            break;
    }
    return genreNumber;
}

function getReelGoodUrl(type: string, service: string, genre: number, debug: boolean): string {
    const url = 'https://api.reelgood.com/v3.0/content/random?' +
    `content_kind=${type}&genre=${genre}&minimum_imdb=6&minimum_rg=60&nocache=true&region=us&sources=${service}`;
    debugLogger(debug, 'URL', url);
    return url;
}