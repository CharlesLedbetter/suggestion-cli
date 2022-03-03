import axios, { AxiosResponse } from 'axios';
import debugLogger from './debug-logger';
import { reelgoodProgram } from './interfaces/reelgoodProgram.interface';

export default async function getRandomProgram(programType: string, service: string, genre: string, debug: boolean): Promise<AxiosResponse<reelgoodProgram>> {
    const serviceCode = getServiceCode(service);
    const genreNumber = getGenreNumber(genre);
    return axios({
        method: 'get',
        url: getReelGoodUrl(programType, serviceCode, genreNumber, debug)
      }) as Promise<AxiosResponse<reelgoodProgram>>;
}

function getServiceCode(service: string): string {
    switch(service.toLowerCase()) {
        case 'netflix': return 'netflix';
        case 'hulu':
        case 'hulu+':
        case 'hulu-plus':
        case 'hulu_plus': return 'hulu_plus';
        case 'amazon':
        case 'prime':
        case 'amazon-prime':  
        case 'amazon_prime': return 'amazon_prime';
        case 'hbo':
        case 'hbo-max':
        case 'hbo_max': return 'hbo_max';
        default: throw Error('Error: Invalid service');
    }
}

// the below numbers are specific to reelgood API's genre codes
function getGenreNumber(genre: string): number {
    if (!genre) {
        return [3,5,9,13,26][Math.floor(Math.random() * 5)];
    }
    switch(genre.toLowerCase()) {
        case 'drama': return 3;
        case 'action':
        case 'adventure': return 5;
        case 'animation': return 6;
        case 'bio':
        case 'biopic':
        case 'biography': return 7;
        case 'comedy': return 9;
        case 'crime': return 10;
        case 'doc':
        case 'documetary': return 11;
        case 'fantasy': return 13;
        case 'history': return 17;
        case 'horror': return 19;
        case 'mystery': return 23;
        case 'scifi':
        case 'science-fiction': return 26;
        case 'sport':
        case 'sports': return 29;
        case 'thriller': return 32;
        case 'lgbt':
        case 'lgbtq':
        case 'lgbtq+': return 37;
        case 'anime': return 39;
        case 'cult': return 41;
        case 'indie':
        case 'independent': return 43;
        default: throw Error('Error: Invalid genre');
    }
}

function getReelGoodUrl(type: string, service: string, genre: number, debug: boolean): string {
    const url = 'https://api.reelgood.com/v3.0/content/random?' +
    `content_kind=${type}&genre=${genre}&minimum_imdb=6&minimum_rg=60&nocache=true&region=us&sources=${service}`;
    debugLogger(debug, 'URL', url);
    return url;
}