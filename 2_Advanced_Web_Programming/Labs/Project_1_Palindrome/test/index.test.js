/*Author: Cody Johnson*/
/*Assignment: Lab 1*/
/*Date: 20250923*/

const{isPalindrome} = require('../src/index');

describe('Palindrome Function Test Suite', () => {

    //Basic starter tests to make sure the function exists and is accepting the correct number of arguments.
    describe('Does the function exist and take the specified number of arguments correctly?', () => {

        test('Does isPalindrome() exist?', () => {
            expect(typeof isPalindrome).toBe('function');
        });

        test('Does isPalindrome() accept only one argument?', () => {
            expect(isPalindrome.length).toBe(1);
        });
    });

    //Tests that check if isPalindrome() handles non-string input correctly.
    describe('Does isPalindrome() return false for non-string types?', () => {

        test('number', () => {
            expect(isPalindrome(9)).toBe(false);
        });

        test('boolean', () => {
            expect(isPalindrome(true)).toBe(false);
        });

        test('array', () => {
            expect(isPalindrome([])).toBe(false);
        });

        test('object', () => {
            expect(isPalindrome({})).toBe(false);
        });

        test('undefined', () => {
            expect(isPalindrome(undefined)).toBe(false);
        });

        test('function', () => {
            function func(){}
            expect(isPalindrome(func)).toBe(false);
        });

        test('null', () => {
            expect(isPalindrome(null)).toBe(false);
        });

        test('NaN', () => {
            expect(isPalindrome(NaN)).toBe(false);
        });

        test('Infinity', () => {
            expect(isPalindrome(Infinity)).toBe(false);
        });

        test('-Infinity', () => {
            expect(isPalindrome(-Infinity)).toBe(false);
        });
    });

    //Tests containing confirmed palindromes.
    describe('Does isPalindrome() return true for palindromes?', () => {

        test('""', () => {
            expect(isPalindrome("")).toBe(true);
        });

        test('" "', () => {
            expect(isPalindrome(" ")).toBe(true);
        });

        test('a', () => {
            expect(isPalindrome("a")).toBe(true);
        });

        test('aa', () => {
            expect(isPalindrome("aa")).toBe(true);
        });

        test('aba', () => {
            expect(isPalindrome("aba")).toBe(true);
        });

        test('Racecar', () => {
            expect(isPalindrome("Racecar")).toBe(true);
        });

        test('RACecaR    ', () => {
            expect(isPalindrome("RACecaR    ")).toBe(true);
        });

        test(' Racecar Racecar Racecar Racecar', () => {
            expect(isPalindrome(" Racecar Racecar Racecar Racecar")).toBe(true);
        });

        test('$ Rac&e c a !r   ', () => {
            expect(isPalindrome("$ Rac&e c a !r   ")).toBe(true);
        });

        test("Madam I'm Adam.", () => {
            expect(isPalindrome("Madam I'm Adam.")).toBe(true);
        });

        test("Red rum, sir, is murder.", () => {
            expect(isPalindrome("Red rum, sir, is murder.")).toBe(true);
        });

        test("!!Ta co c @a? t.", () => {
            expect(isPalindrome("!!Ta co c @a? t.")).toBe(true);
        });

        test("T. Eliot, top bard, notes putrid tang emanating, is sad; I'd assign it a name: gnat dirt upset on drab pot toilet.", () => {
            expect(isPalindrome("T. Eliot, top bard, notes putrid tang emanating, is sad; I'd assign it a name: gnat dirt upset on drab pot toilet.")).toBe(true);
        });
    });

    //Tests containing confirmed non-palindromes.
    describe('Does isPalindrome() return false for non-palindromes?', () => {

        test('This is a test', () => {
            expect(isPalindrome("This is a test")).toBe(false);
        });

        test('apple', () => {
            expect(isPalindrome("apple")).toBe(false);
        });

        test('TeSt', () => {
            expect(isPalindrome("TeSt")).toBe(false);
        });

        test('xyyyyyyyyyyyyyyyt', () => {
            expect(isPalindrome("xyyyyyyyyyyyyyyyt")).toBe(false);
        });

        test('xyyyyyyyyyyyyyyyy', () => {
            expect(isPalindrome("xyyyyyyyyyyyyyyyy")).toBe(false);
        });

        test('not a palindrome', () => {
            expect(isPalindrome("not a palindrome")).toBe(false);
        });

        test('aaa abaa aaaa aaa', () => {
            expect(isPalindrome("aaa abaa aaaa aaa")).toBe(false);
        });

        test('11$$ 112', () => {
            expect(isPalindrome("11$$ 112")).toBe(false);
        });

        test('ab', () => {
            expect(isPalindrome("ab")).toBe(false);
        });

        test('abb', () => {
            expect(isPalindrome("abb")).toBe(false);
        });
    });
});