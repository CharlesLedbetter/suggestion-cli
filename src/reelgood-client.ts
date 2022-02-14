import axios from 'axios';

export default async function getRandomProgram(programType: string, service: string, genre: string) {
    const genreNumber = getGenreNumber(genre);
    return axios({
        method: 'get',
        url: getReelGoodUrl(programType, service, genreNumber)
      });
}

function getGenreNumber(genre: string): number {
    let genreNumber: number;
    switch(genre) {
        case 'action':
        case 'adventure': genreNumber = 1;
            break;
        case 'animation': genreNumber = 2;
            break;
        case 'anime': genreNumber = 3;
            break;
        case 'biography': genreNumber = 4;
            break;
        case 'children': genreNumber = 5;
            break;
        case 'comedy': genreNumber = 6;
            break;
        case 'crime': genreNumber = 7;
            break;
        case 'cult': genreNumber = 8;
            break;
        case 'documetary': genreNumber = 9;
            break;
        case 'drama': genreNumber = 10;
            break;
        default: genreNumber = Math.ceil(Math.random() * 10);
            break;
    }
    return genreNumber;
}

function getReelGoodUrl(type: string, service: string, genre: number): string {
    return `https://api.reelgood.com/v3.0/content/random?availability=onAnySource&content_kind=${type}&genre=${genre}&minimum_imdb=8&minimum_rg=80&nocache=true&region=us&sources=${service}`;
}