const{add} = require('./math');
const{squaredNum} = require('./math');

describe("Calculator tests", () => {

    describe('Add functions test', () => {

        test("add function exists", () => {
            expect(typeof add).toBe("function");
        });

        test("add function takes only two parameters", () => {
           expect(add.length).toBe(2);
        });

        test("add function computes 5 + 5 = 10", () => {
            expect(add(5,5)).toBe(10);
        });
    });

    describe('Square functions test', () => {

        test("square function exists", () => {
            expect(typeof squaredNum).toBe("function");
        });

        test("square function takes only one parameter", () => {
            expect(squaredNum.length).toBe(1);
        });

        test("square function computes 5 squared = 25", () => {
            expect(squaredNum(5)).toBe(25);
        });
    });


});