let numbers = [1,2,3,4,5];
let fruits = ['apple','banana','orange'];
let mixedArray = [1,'two',{name: 'Alice'},[7,8,9]];

let firstNumber = numbers[0]; //1
console.log(firstNumber);

let secondFruit = fruits[1]; //'banana'
console.log(secondFruit);

let thirdElement = mixedArray[2]; //{name: 'Alice'}
console.log(thirdElement);

numbers.push(6);
fruits.pop();
fruits.unshift('pear');
numbers.shift();

let numbers1 = [1,2,3,4,5];
numbers1.forEach(function(numbers1) {
    console.log(numbers1);
})

let doubledNumbers = numbers1.map(function(number) {
    console.log(number * 2);
})

const numbers2 = [1,2,3,4,5,6];
const evenNumbers = numbers2.filter(function(num){
    return num % 2 === 0;
});
console.log(evenNumbers);