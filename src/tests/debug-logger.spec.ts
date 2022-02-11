import { debugLogger } from "../debug-logger";

jest.spyOn(global.console, 'log');

describe('Debug Logger', () => {
    afterEach(() => {    
        jest.clearAllMocks();
    });

    it('should log extra info when debug mode is enabled', () => {
        debugLogger(true, {'test':'test data'});
        expect(console.log).toHaveBeenCalled();
    });

    it('should do nothing when debug mode is disabled', () => {
        debugLogger(false, {'test':'test data'});
        expect(console.log).not.toHaveBeenCalled();
    })
});