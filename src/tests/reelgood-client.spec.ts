import getRandomProgram from "../reelgood-client";
import axios from 'axios';

jest.mock('axios', () => jest.fn(() => Promise.resolve({data: {test: 'test data'}})));

describe('Reelgood Client', () => {
    it('should successfully get a random action movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'action');
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(1)
          });
    });

    it('should successfully get a random animation movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'animation');
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(2)
          });
    });

    it('should successfully get a random anime movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'anime');
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(3)
          });
    });

    it('should successfully get a random biography movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'biography');
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(4)
          });
    });

    it('should successfully get a random children movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'children');
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(5)
          });
    });

    it('should successfully get a random comedy movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'comedy');
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(6)
          });
    });

    it('should successfully get a random crime movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'crime');
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(7)
          });
    });

    it('should successfully get a random cult movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'cult');
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(8)
          });
    });

    it('should successfully get a random documetary movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'documetary');
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(9)
          });
    });

    it('should successfully get a random drama movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'drama');
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl(10)
          });
    });
});

function getMockUrl(genreNumber: number) {
    return `https://api.reelgood.com/v3.0/content/random?availability=onAnySource&content_kind=movie&genre=${genreNumber}&minimum_imdb=8&minimum_rg=80&nocache=true&region=us&sources=netflix`;
}