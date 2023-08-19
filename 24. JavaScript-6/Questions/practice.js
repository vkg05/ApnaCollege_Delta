// function prints a poem
function printPoem() {
    console.log("Twinkle Twinkle, Little star");
    console.log("how I Wonder what yur are");
}
printPoem();

// -----------------------------------------------

// function dice 
function dice() {
    let ran = Math.floor(Math.random() * 6) + 1;
    console.log(ran);
}
dice();

// ------------------------------------------------

// function average of 3 numbers
function calcAvg(a, b, c) {
    let avg = (a+b+c)/3;
    console.log(avg);
}
calcAvg(4,5,6);

// --------------------------------------------------

// multiplication table of a number
function printTable(num){
    for(let i = num; i<=num*10; i=i+num){
        console.log(i);
    }
}
printTable(7);

// ----------------------------------------------------

// return the sum of numbers form 1 to n
function sumOfNum(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum+=i;
    }
    return sum;
}
let totalSum = sumOfNum(5);
console.log(totalSum);

//-----------------------------------------------

// concatenation of all strings in an array.
let str = ["hi", "hello", "bye", "!"];
function concat(str){
    let result = "";
    for(let i=0; i<str.length; i++){
        result += str[i];
    }
    return result;
}

//-----------------------------------------------

// what will be the output?
let greet = "hello";

function changeGreet(){
    let greet = "namaste";
    console.log(greet);
    function innerGreet() {
        console.log(greet);
    }
}
console.log(greet);
changeGreet();