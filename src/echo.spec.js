import { echoOnce } from './echo.js';

describe('echoOnce', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  it('should echo input', () => {
    echoOnce('hello world');
    expect(console.log).toBeCalledWith('hello world');
  });
});
