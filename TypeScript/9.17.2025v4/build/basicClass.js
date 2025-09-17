"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Human = void 0;
class Human {
    fName;
    lName;
    age;
    isMarried;
    constructor(fName, lName, age, isMarried) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.isMarried = isMarried;
    }
    getFullName = () => {
        return `Your name is ${this.fName} ${this.lName}`;
    };
}
exports.Human = Human;
