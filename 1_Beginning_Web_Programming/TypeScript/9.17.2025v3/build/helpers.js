"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.perimeter = exports.area = void 0;
const area = (width, height) => {
    return height * width;
};
exports.area = area;
const perimeter = (width, height) => {
    return (width * 2) + (height * 2);
};
exports.perimeter = perimeter;
