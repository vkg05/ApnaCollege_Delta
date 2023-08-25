// Ans-1
let nums = [1, 2, 3, 4, 5];
const square = nums.map((el) => (el*el));
console.log(square);

let sum = square.reduce((acc, cur) => acc + cur, 0);

let avg = sum / nums.length;
console.log(avg);

// ------------------------------------------------

// Ans-2
let numbers = [2, 3, 6, 8, -2, -4];
console.log(numbers.map((num) => num+5));

// ------------------------------------------------

// Ans-3
let str = ["vishal", "bob", "sbi", "boi", "raman"];
console.log(str.map((string) => string.toUpperCase()));

// ------------------------------------------------

// Ans-4
const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((v) => v*2),
];
console.log(doubleAndReturnArgs([1,2,3],4,4));
console.log(doubleAndReturnArgs([2], 10, 4));

// ------------------------------------------------

// Ans-5
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
console.log(mergeObjects({
    a:1, b:2,
},{
    c:3, d:4
}));