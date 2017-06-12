import { echoOnce } from './echo.js';

describe('echo', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  describe('echoOnce', () => {
    it('should echo input', () => {
      echoOnce('hello world');
      expect(console.log).toBeCalledWith('hello world');
    });
  });

  describe('echoTwice', () => {
    // TODO: Write test
  });
});
