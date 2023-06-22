const calculator = require("./calculator");

test('Summation of two numbers', () => {
    expect(calculator.sum(2, 2)).toBe(4);
});