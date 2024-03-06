// sample.ts

// Define a function that takes two numbers and returns their sum
function add(a: number, b: number): number {
    return a + b;
}

// Define a class representing a person
class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method to greet the person
    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Create an instance of the Person class
const person1 = new Person("John", 30);

// Call the greet method of the person instance
console.log(person1.greet());

// Call the add function and log the result
console.log("The sum of 3 and 5 is:", add(3, 5));
