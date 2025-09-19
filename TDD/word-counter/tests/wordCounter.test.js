const wordCounter = require('../src/wordCounter');

test('returns 0 for an empty string', () => {
    expect(wordCounter("")) .toBe(0);
});