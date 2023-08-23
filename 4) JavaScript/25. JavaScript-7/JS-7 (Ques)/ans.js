// Ans-1
const arrayAverage = (arr) => {
    let total = 0;
    for(let number of arr){
        total += number;
    }
    return total/arr.length;
}
let arr = [1,2,3,4,5];
console.log(arrayAverage(arr));

// ------------------------------------------------

// Ans-2
const isEven = (n) => {
    let num = (n%2 == 0) ? "Even" : "Odd";
    console.log(num);
}
isEven(10);

// ------------------------------------------------

// Ans-3 
const object = {
    message : "Hello, World!",
    logMessage() {
        console.log(this.message);
    }
};
setTimeout(object.logMessage, 1000);

// -------------------------------------------------

// Ans-4
let length = 4;
function callback() {
    console.log(this.length);
}
const object1 = {
    length : 5,
    method(callback){
        callback();
    },
};
object1.method(callback, 1, 2);
