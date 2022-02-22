import getRandomProgram from "../reelgood-client";
import axios from 'axios';

jest.mock('axios', () => jest.fn(() => Promise.resolve({data: {test: 'test data'}})));

describe('Reelgood Client', () => {
    it('should successfully get a random action movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'action', false);
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(5)
          });
    });

    it('should successfully get a random animation movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'animation', false);
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(6)
          });
    });

    it('should successfully get a random anime movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'anime', false);
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(39)
          });
    });

    it('should successfully get a random biography movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'bio', false);
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(7)
          });
    });

    it('should successfully get a random comedy movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'comedy', false);
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(9)
          });
    });

    it('should successfully get a random crime movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'crime', false);
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(10)
          });
    });

    it('should successfully get a random cult movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'cult', false);
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(41)
          });
    });

    it('should successfully get a random documetary movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'doc', false);
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(11)
          });
    });

    it('should successfully get a random drama movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'drama', false);
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(3)
          });
    });

    it('should successfully get a random fantasy movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'fantasy', false);
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(13)
          });
    });

    it('should successfully get a random history movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'history', false);
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(17)
          });
    });

    it('should successfully get a random history movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'horror', false);
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(19)
          });
    });

    it('should successfully get a random mystery movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'mystery', false);
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(23)
          });
    });

    it('should successfully get a random science-fiction movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'scifi', false);
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(26)
          });
    });

    it('should successfully get a random sports movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'sport', false);
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(29)
          });
    });

    it('should successfully get a random thriller movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'thriller', false);
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(32)
          });
    });

    it('should successfully get a random lgbtq movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'lgbt', false);
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(37)
          });
    });


    it('should successfully get a random indie movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'indie', false);
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(43)
          });
    });
});

function getMockUrl(genreNumber: number) {
    return 'https://api.reelgood.com/v3.0/content/random?content_kind=movie&' +
    `genre=${genreNumber}&minimum_imdb=6&minimum_rg=60&nocache=true&region=us&sources=netflix`;
}