const { add, subtract, multiply, divide } = require('./math');

describe('Math functions', () => {
  // Tests for add function
  describe('add function', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(add(1, 2)).toBe(3);
    });

    test('adds -1 + 1 to equal 0', () => {
      expect(add(-1, 1)).toBe(0);
    });

    test('adds 1.5 + 2.5 to equal 4', () => {
      expect(add(1.5, 2.5)).toBe(4);
    });

    test('adds large numbers correctly', () => {
      expect(add(1000000000, 2000000000)).toBe(3000000000);
    });
  });

  // Tests for subtract function
  describe('subtract function', () => {
    test('subtracts 5 - 3 to equal 2', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('subtracts 3 - 5 to equal -2', () => {
      expect(subtract(3, 5)).toBe(-2);
    });

    test('subtracts 5.5 - 2.2 to equal 3.3', () => {
      expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
    });

    test('subtracts large numbers correctly', () => {
      expect(subtract(3000000000, 1000000000)).toBe(2000000000);
    });
  });

  // Tests for multiply function
  describe('multiply function', () => {
    test('multiplies 2 * 3 to equal 6', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    test('multiplies -2 * 3 to equal -6', () => {
      expect(multiply(-2, 3)).toBe(-6);
    });

    test('multiplies 1.5 * 2 to equal 3', () => {
      expect(multiply(1.5, 2)).toBe(3);
    });

    test('multiplies large numbers correctly', () => {
      expect(multiply(100000, 20000)).toBe(2000000000);
    });
  });

  // Tests for divide function
  describe('divide function', () => {
    test('divides 6 / 3 to equal 2', () => {
      expect(divide(6, 3)).toBe(2);
    });

    test('throws error when dividing by zero', () => {
      expect(() => divide(6, 0)).toThrow('Cannot divide by zero');
    });

    test('divides 7.5 / 2.5 to equal 3', () => {
      expect(divide(7.5, 2.5)).toBe(3);
    });

    test('divides large numbers correctly', () => {
      expect(divide(1000000000, 500000000)).toBe(2);
    });
  });
});