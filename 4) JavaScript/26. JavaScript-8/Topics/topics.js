// forEach
let arr = [1, 2, 3, 4, 5];

// let print = function (el){
//     console.log(el);
// };
// arr.forEach(print);

//      OR
// arr.forEach(function(el){
//     console.log(el);
// }); 

//      OR
arr.forEach((el) => {
    console.log(el)
});

let student = [{
    name: "Vishal",
    marks: 79
},
{
    name: "Shradh",
    marks: 94.4
},
{
    name: "Rajesh",
    marks: 85
}];
student.forEach((student) => {
    console.log(student.marks);
});

// -------------------------------------------

// Map
let num = [1,2,3,4];
let double = num.map((el) => {
    return el*2;
});
console.log(double);

let gpa = student.map((el) => {
    return el.marks / 10;
});
console.log(gpa);

// -----------------------------------------------

// filter
let nums = [2,4,1,5,6,2,7,8,9,10];
let even = nums.filter((el) => (el % 2 == 0));
console.log(even);

// -----------------------------------------------

// every
let check = [2,4,6].every((el) => (el % 2 == 0));

// some 
let check1 = [1,5,3,2].some((num) => (num % 2 == 0));

// ------------------------------------------------

// reduce
let numbers = [1,2,3,4];
let finalVal = numbers.reduce((res, el) => (res + el));
console.log(finalVal);

// ------------------------------------------------

// reduce - Maximum in array.
let num1 = [2,3,4,5,3,4,7,8,1];

let result = num1.reduce((max, el) => {
    if(el > max) {
        return el;
    } else {
        return max;
    }
});
console.log(result);
//          OR
let largest = -Infinity;
for(let i=0; i<num1.length; i++){
    if(largest < num1[i]){
        largest = num1[i]
    }
};
console.log(largest); 

// -----------------------------------------------

// Default Parameters
function sum(a, b = 3){
    return a + b;
}
console.log(sum(2)); //5

// -------------------------------------------------

// spread 
let array = [1,2,3,4,5,6];
let  = Math.min(array);
