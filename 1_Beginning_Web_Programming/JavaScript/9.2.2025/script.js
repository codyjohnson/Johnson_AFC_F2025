// pass in a number and return the square of it

let squareFunction = (num) => {
    return num * num;
}

// invoke the function

console.log(squareFunction(9));

let squareFunction2 = num => num * num;

console.log(squareFunction2(5));

console.log(`Square Function: ${squareFunction2(5)}`);

// area of a rectangle

let areaOfRectangle = (height, width = height) => {
    return height * width;
}

console.log(areaOfRectangle(2, 4));

console.log(areaOfRectangle(4));

// create a JS object with first name and last name.
// add a method that returns full name.
// use a traditional function
// call function and display name in terminal

let person = {
    fName: "Cody",
    lName: "Johnson",
    fullName: function () {
    return `${this.fName} ${this.lName}`}
};

console.log(person.fullName());

let array1 = ["orange", "aPricot", "Orange", "Apple", "banana", "apple"];

let sorter = (array) => {

    let arr = [];

    if (!array) {
        return arr;
    } else if (!Array.isArray(array)) {
        return arr;
    } else if (array.length < 1){
        return arr;
    } else {
        return array.sort((fruit1, fruit2) => fruit1.localeCompare(fruit2));
    }
}

console.log(sorter(array1));

console.log(sorter("5"));

console.log(sorter([]));

console.log(sorter(["10", "11"]));

let arr2 = ["one", "two", "three", "four"];
let arr3 = ["ten", "eleven", "twelve", "thirteen"];

let arr4 = [...arr2, ...arr3];
console.log(arr4);







