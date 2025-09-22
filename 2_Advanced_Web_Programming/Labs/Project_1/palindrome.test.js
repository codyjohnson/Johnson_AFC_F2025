/*Author: Cody Johnson*/
/*Assignment: Lab 1*/
/*Date: 20250922*/

const{isPalindrome} = require('./palindrome');

describe('Palindrome Function Tests', () => {

    describe('Does the function exist and take parameters correctly', () => {

        test('Does is isPalindrome function exist', () => {
            expect(typeof isPalindrome).toBe('function');
        });

        test('Does isPalindrome function accept only one argument', () => {
            expect(isPalindrome.length).toBe(1);
        });

        test('Passing in a number', () => {
            expect(isPalindrome(9)).toBe(false);
        });

        test('Passing in a boolean', () => {
            expect(isPalindrome(true)).toBe(false);
        });

        test('Passing in an array', () => {
            expect(isPalindrome([])).toBe(false);
        });

        test('Passing in a object', () => {
            expect(isPalindrome({})).toBe(false);
        });

        test('Passing in a undefined', () => {
            expect(isPalindrome(undefined)).toBe(false);
        });

        test('Passing in a function', () => {
            function func1(){}
            expect(isPalindrome(func1)).toBe(false);
        });

        test('Passing in null', () => {
            expect(isPalindrome(null)).toBe(false);
        });
    });

    describe('Testing return for true palindromes', () => {

        test('""', () => {
            expect(isPalindrome("")).toBe(true);
        });

        test('" "', () => {
            expect(isPalindrome(" ")).toBe(true);
        });

        test('a', () => {
            expect(isPalindrome("a")).toBe(true);
        });

        test('Racecar', () => {
            expect(isPalindrome("Racecar")).toBe(true);
        });

        test('RACecaR    ', () => {
            expect(isPalindrome("RACecaR    ")).toBe(true);
        });

        test('Racecar Racecar Racecar Racecar', () => {
            expect(isPalindrome("Racecar Racecar Racecar Racecar")).toBe(true);
        });

        test('Racecar with special characters and spaces', () => {
            expect(isPalindrome(" $ Rac&e c a !r   ")).toBe(true);
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

    describe('Testing return for strings that are not palindromes', () => {

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

        test('not a palindrome', () => {
            expect(isPalindrome("not a palindrome")).toBe(false);
        });
    });
});