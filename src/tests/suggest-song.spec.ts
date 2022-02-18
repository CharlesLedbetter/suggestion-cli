import axios from 'axios';
import debugLogger from "../debug-logger";

jest.mock("../debug-logger", () => jest.fn());
jest.spyOn(global.console, 'log').mockImplementation();
jest.spyOn(global.console, 'error').mockImplementation();

describe('Suggest Song Command', () => {
    it('should successfully get a random song', () => {
        const response = {
            data: {
                artists_sort: 'Artist',
                title: 'Test Title',
                uri: 'http://localhost:8080',
                tracklist: [
                    {title: 'Song'}
                ]
            }
        }

        jest.isolateModules(() => {
            jest.mock('axios', () => jest.fn(() => Promise.resolve(response)));
            new Promise(() => require('../suggest-song')).then(() => {
                expect(axios).toHaveBeenCalled();
                expect(console.log).toHaveBeenCalledWith(
                    `\nArtist: Artist\n\nAlbum: Test Title\n\nSong: Song\n\nAlbum URL: http://localhost:8080\n`
                    );
                expect(debugLogger).toHaveBeenCalledWith(undefined, response.data);
            });
        });
    });

    it('should fail to get a random song', () => {
        jest.isolateModules(() => {
            process.argv.push('-d');
            jest.mock('axios', () => jest.fn(() => Promise.reject(new Error)));
            new Promise(() => require('../suggest-song')).then(() => {
                expect(axios).toHaveBeenCalled();
                expect(console.error).toHaveBeenCalledWith('An error has occured');
                expect(debugLogger).toHaveBeenCalledWith(true, new Error);
            });
        });
    });
});