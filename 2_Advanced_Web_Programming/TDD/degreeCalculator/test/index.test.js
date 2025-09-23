const {convertToCelsius, convertToFahrenheit} = require('../src/index');

//°C = (°F - 32) × 5/9
//°F = (°C × 9/5) + 32

describe('Degree Calculator', () => {

    describe('Fahrenheit to Celsius Calculator', () => {

        describe('Does convertToCelsius() exist and accept one parameter?', () => {

            test('Does calculator exist?', () => {
                expect(typeof convertToCelsius).toBe('function');
            });

            test('Does calculator accept one parameter?', () => {
                expect(convertToCelsius.length).toBe(1);
            });
        });

        describe('Does convertToCelsius() properly handle bad input?', () => {

            test('string', () => {
                expect(convertToCelsius('value')).toBe(false);
            });

            test('boolean', () => {
                expect(convertToCelsius(true)).toBe(false);
            });

            test('array', () => {
                expect(convertToCelsius([])).toBe(false);
            });

            test('object', () => {
                expect(convertToCelsius({})).toBe(false);
            });

            test('NaN', () => {
                expect(convertToCelsius(NaN)).toBe(false);
            });
        });

        describe('Calculations', () => {

            test('32°F  =>  0°C', () => {
                expect(convertToCelsius(32)).toBeCloseTo(0);
            });

            test('-40°F  =>  -40°C', () => {
                expect(convertToCelsius(-40)).toBeCloseTo(-40);
            });

            test('1000°F  =>  537.778°C', () => {
                expect(convertToCelsius(1000)).toBeCloseTo(537.778);
            });

            test('-1000°F  =>  -573.333°C', () => {
                expect(convertToCelsius(-1000)).toBeCloseTo(-573.333);
            });
        });
    });

    describe('Celsius to Fahrenheit Calculator', () => {

        describe('Does convertToFahrenheit() exist and accept one parameter?', () => {

            test('Does calculator exist?', () => {
                expect(typeof convertToFahrenheit).toBe('function');
            });

            test('Does calculator accept one parameter?', () => {
                expect(convertToFahrenheit.length).toBe(1);
            });
        });

        describe('Does convertToFahrenheit() properly handle bad input?', () => {

            test('string', () => {
                expect(convertToFahrenheit('value')).toBe(false);
            });

            test('boolean', () => {
                expect(convertToFahrenheit(true)).toBe(false);
            });

            test('array', () => {
                expect(convertToFahrenheit([])).toBe(false);
            });

            test('object', () => {
                expect(convertToFahrenheit({})).toBe(false);
            });

            test('NaN', () => {
                expect(convertToFahrenheit(NaN)).toBe(false);
            });
        });

        describe('Calculations', () => {

            test('0°C  =>  32°F', () => {
                expect(convertToFahrenheit(0)).toBeCloseTo(32);
            });

            test('-40°C  =>  -40°F', () => {
                expect(convertToFahrenheit(-40)).toBeCloseTo(-40);
            });

            test('537.778°C  =>  1000°F', () => {
                expect(convertToFahrenheit(537.778)).toBeCloseTo(1000);
            });

            test('-573.333°C  =>  -1000°F', () => {
                expect(convertToFahrenheit(-573.333)).toBeCloseTo(-1000);
            });
        });
    });
});