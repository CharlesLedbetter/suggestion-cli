import getRandomProgram from "../reelgood-client";
import axios from 'axios';

jest.mock('axios', () => jest.fn(() => Promise.resolve({data: {title: 'test data'}})));

describe('Reelgood Client', () => {
    it('should successfully get a random action movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'action', false);
        expect(actual.data.title).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl('netflix', 5)
          });
    });

    it('should successfully get a random animation movie', async () => {
        const actual = await getRandomProgram('movie', 'hulu', 'animation', false);
        expect(actual.data.title).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl('hulu_plus', 6)
          });
    });

    it('should successfully get a random anime movie', async () => {
        const actual = await getRandomProgram('movie', 'hbo', 'anime', false);
        expect(actual.data.title).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl('hbo_max', 39)
          });
    });

    it('should successfully get a random biography movie', async () => {
        const actual = await getRandomProgram('movie', 'amazon', 'bio', false);
        expect(actual.data.title).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl('amazon_prime', 7)
          });
    });

    it('should successfully get a random comedy movie', async () => {
        const actual = await getRandomProgram('movie', 'hulu_plus', 'comedy', false);
        expect(actual.data.title).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl('hulu_plus', 9)
          });
    });

    it('should successfully get a random crime movie', async () => {
        const actual = await getRandomProgram('movie', 'hulu+', 'crime', false);
        expect(actual.data.title).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl('hulu_plus', 10)
          });
    });

    it('should successfully get a random cult movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'cult', false);
        expect(actual.data.title).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl('netflix', 41)
          });
    });

    it('should successfully get a random documetary movie', async () => {
        const actual = await getRandomProgram('movie', 'HBO', 'doc', false);
        expect(actual.data.title).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl('hbo_max', 11)
          });
    });

    it('should successfully get a random drama movie', async () => {
        const actual = await getRandomProgram('movie', 'hbo-max', 'drama', false);
        expect(actual.data.title).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl('hbo_max', 3)
          });
    });

    it('should successfully get a random fantasy movie', async () => {
        const actual = await getRandomProgram('movie', 'NETFLIX', 'fantasy', false);
        expect(actual.data.title).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl('netflix',13)
          });
    });

    it('should successfully get a random history movie', async () => {
        const actual = await getRandomProgram('movie', 'hulu-plus', 'history', false);
        expect(actual.data.title).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl('hulu_plus', 17)
          });
    });

    it('should successfully get a random history movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'horror', false);
        expect(actual.data.title).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl('netflix', 19)
          });
    });

    it('should successfully get a random mystery movie', async () => {
        const actual = await getRandomProgram('movie', 'HULU', 'mystery', false);
        expect(actual.data.title).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl('hulu_plus', 23)
          });
    });

    it('should successfully get a random science-fiction movie', async () => {
        const actual = await getRandomProgram('movie', 'hbo-max', 'scifi', false);
        expect(actual.data.title).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl('hbo_max', 26)
          });
    });

    it('should successfully get a random sports movie', async () => {
        const actual = await getRandomProgram('movie', 'prime', 'sport', false);
        expect(actual.data.title).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl('amazon_prime', 29)
          });
    });

    it('should successfully get a random thriller movie', async () => {
        const actual = await getRandomProgram('movie', 'netflix', 'thriller', false);
        expect(actual.data.title).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl('netflix', 32)
          });
    });

    it('should successfully get a random lgbtq movie', async () => {
        const actual = await getRandomProgram('movie', 'Amazon', 'lgbt', false);
        expect(actual.data.title).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl('amazon_prime', 37)
          });
    });


    it('should successfully get a random indie movie', async () => {
        const actual = await getRandomProgram('movie', 'PRIME', 'indie', false);
        expect(actual.data.title).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: getMockUrl('amazon_prime', 43)
          });
    });

    it('should throw error message when genre is invalid', async () => {
        await expect(getRandomProgram('movie', 'PRIME', 'badGenre', false)).rejects.toThrow(Error('Error: Invalid genre'));
    });

    it('should throw error message when service is invalid', async () => {
        await expect(getRandomProgram('movie', 'badService', 'drama', false)).rejects.toThrow(Error('Error: Invalid service'));
    });
});

function getMockUrl(serviceCode: string, genreNumber: number): string {
    return 'https://api.reelgood.com/v3.0/content/random?content_kind=movie&' +
    `genre=${genreNumber}&minimum_imdb=6&minimum_rg=60&nocache=true&region=us&sources=${serviceCode}`;
}