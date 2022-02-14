import getRandomProgram from "../reelgood-client";
import debugLogger from "../debug-logger";
const response = {
    data: {
        title: 'TEST',
        overview: 'For testing',
        runtime: '120'
    },
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {}
};
jest.mock("../debug-logger", () => jest.fn());
jest.spyOn(global.console, 'log').mockImplementation();
jest.spyOn(global.console, 'error').mockImplementation();

describe('Suggest Movie Command', () => {
    it('should get random movie from netflix', async () => {
        jest.isolateModules(() => {
            process.argv.push('-s', 'netflix', '-g', 'action');
            jest.mock('../reelgood-client', () => jest.fn(() => Promise.resolve(response)));
            new Promise(() => require('../suggest-movie')).then(() => {
                expect(getRandomProgram).toHaveBeenCalled();
                expect(console.log).toHaveBeenCalledWith('\nMovie: TEST\n\nDescription: For testing\n\nRuntime: 120 minutes\n');
                expect(debugLogger).toHaveBeenCalledWith(undefined, response.data);
            });
        });
    });

    it('should fail to get random movie from netflix', async () => {
        jest.isolateModules(() => {
            process.argv.push('-s', 'netflix', '-g', 'action', '-d');
            jest.mock('../reelgood-client', () => jest.fn(() => Promise.reject(new Error))); 
            new Promise(() => require('../suggest-movie')).then(() => {
                expect(getRandomProgram).toHaveBeenCalled();
                expect(console.error).toHaveBeenCalledWith('An error has occured');
                expect(debugLogger).toHaveBeenCalledWith(true, response.data);
            });
        });
    });
});