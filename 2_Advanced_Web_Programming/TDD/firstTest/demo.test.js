const{add} = require('./demo');
const{subtract} = require('./demo');
const{multiply} = require('./demo');
const{divide} = require('./demo');

describe('Add function tests', () => {
    test('add function should add two numbers', () => {
        expect(add(2,2)).toBe(4);
    });

    test('adding 2 + 5 !== 12', () => {
        expect(add(2,5)).not.toBe(12);
    });
});

describe('Subtract function tests', () => {
    test('subtract function should subtract two numbers', () => {
        expect(subtract(10, 7)).toBe(3);
    });
});

describe('Multiplication function tests', () => {
    test('multiplication function should multiply two numbers', () => {
        expect(multiply(10, 9)).toBe(90);
    });
});

describe('Division function tests', () => {
    test('division function should divide two numbers', () => {
        expect(divide(90, 9)).toBe(10);
    });
});