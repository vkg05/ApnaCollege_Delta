// check if all numbers in our array are multiples of 10 or not.
let nums = [10, 20, 55, 50];
let checkMultiple10 = nums.every((el) => (el%10 == 0));
console.log(checkMultiple10);

// ---------------------------------------

// create a function to find the min number in an array.
let num = [4,4,5,6,7,5,17];

let min = Infinity;
for(let i=0; i<num.length; i++){
    if(min > num[i]){
        min = num[i];
    };
};
console.log(min);
// OR

function getMin(num) {
    let smallest = num.reduce((min, el) => {
        if(min < el){
            return min;
        } else {
            return el;
        }
    });
    return min;
}
console.log(getMin(num));
