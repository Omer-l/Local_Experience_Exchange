"use strict";
// sample.ts
// Define a function that takes two numbers and returns their sum
function add(a, b) {
    return a + b;
}
// Define a class representing a person
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method to greet the person
    Person.prototype.greet = function () {
        return "Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    };
    return Person;
}());
// Create an instance of the Person class
var person1 = new Person("John", 30);
// Call the greet method of the person instance
console.log(person1.greet());
// Call the add function and log the result
console.log("The sum of 3 and 5 is:", add(3, 5));
