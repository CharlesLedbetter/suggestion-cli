import { getRandomProgram } from "../reelgood-client";
import axios from 'axios';

jest.mock('axios', () => jest.fn(() => Promise.resolve({data: {test: 'test data'}})));

describe('Reelgood Client', () => {
    it('should get call for a movie and get one', async () => {
        const expectedUrl = 'https://api.reelgood.com/v3.0/content/random?availability=onAnySource&content_kind=movie&genre=1&minimum_imdb=8&minimum_rg=80&nocache=true&region=us&sources=netflix';

        const actual = await getRandomProgram('movie', 'netflix', 'action');
        expect(actual.data.test).toBe('test data');
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: expectedUrl
          });
    });
});