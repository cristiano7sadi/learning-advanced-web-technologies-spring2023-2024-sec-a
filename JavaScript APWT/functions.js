function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Alice");

function sum(a,b) {
    return a+b;
}
let result = sum(1,2);
console.log(result);

let greet1 = name => console.log(`Hello, ${name}!`);
greet1("Bob");

const greet2 = function(name) {
    console.log(`Hello, ${name}!`);
};

greet2("Alice");

function operateOnNumbers(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

let resultAddition = operateOnNumbers(5,3,add);
let resultMultiplication = operateOnNumbers(5,3,multiply);

console.log(resultAddition);
console.log(resultMultiplication);