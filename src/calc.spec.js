import { add, subtract } from './calc.js';

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 3)).toEqual(4);
  });

  it('should add three numbers', () => {
    expect(add(1, 2, 3)).toEqual(6);
  });

  it('should add, alot of numbers', () => {
    expect(add(1, 1, 1, 1, 1, 1, 1, 1, 1, 1)).toEqual(10);
  });

  it('should handle one number', () => {
    expect(add(42)).toEqual(42);
  });

  it('should handle undefined', () => {
    expect(add()).toEqual(0);
  });
});

describe('subtract', () => {
  it('should subtract two numbers', () => {
    expect(subtract(1, 3)).toEqual(-2);
  });

  it('should subtract three numbers', () => {
    expect(subtract(1, 2, 3)).toEqual(-4);
  });

  it('should subtract, alot of numbers', () => {
    expect(subtract(1, 1, 1, 1, 1, 1, 1, 1, 1, 1)).toEqual(-8);
  });

  it('should handle one number', () => {
    expect(subtract(42)).toEqual(42);
  });

  it('should handle undefined', () => {
    expect(subtract()).toEqual(0);
  });
});
