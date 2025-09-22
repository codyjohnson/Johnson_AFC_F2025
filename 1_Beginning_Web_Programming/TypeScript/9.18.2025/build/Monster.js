"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monster = void 0;
exports.getFirst = getFirst;
class Monster {
    firstName;
    lastName;
    age;
    type;
    moreInfo;
    constructor(firstName, lastName, age, type, moreInfo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.type = type;
        this.moreInfo = moreInfo;
    }
}
exports.Monster = Monster;
function getFirst(items) { return items[0]; }
