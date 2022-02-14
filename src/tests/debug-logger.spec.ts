import debugLogger from "../debug-logger";

jest.spyOn(global.console, 'debug').mockImplementation();

describe('Debug Logger', () => {
    afterEach(() => {    
        jest.clearAllMocks();
    });

    it('should log extra info when debug mode is enabled', () => {
        debugLogger(true, {'test':'test data'});
        expect(console.debug).toHaveBeenCalled();
    });

    it('should do nothing when debug mode is disabled', () => {
        debugLogger(false, {'test':'test data'});
        expect(console.debug).not.toHaveBeenCalled();
    })
});