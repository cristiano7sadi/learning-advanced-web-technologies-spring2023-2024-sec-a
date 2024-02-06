var numbers = [1, 2, 3, 4, 5];
var firstlement = numbers[0];
var arrayLength = numbers.length;
numbers.push(6);
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    console.log(num);
}
//array methods
var doubleNumbers = numbers.map(function (num) { return num * 2; });
var evenNumbers = numbers.filter(function (num) { return num % 2 == 0; });
var sum = numbers.reduce(function (prev, next) { return prev + next; });
console.log(doubleNumbers);
console.log(evenNumbers);
console.log(sum);
