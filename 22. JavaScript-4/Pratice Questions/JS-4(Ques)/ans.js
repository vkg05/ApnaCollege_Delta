// Ans-1
let arr = [1,2,3,4,5,6,2,3];
let num = 2;
for(let i = 0; i < arr.length; i++){
    if(arr[i] == num){
        arr.splice(i,1);
    }
}
console.log(arr);

// //--------------------------------------------------

// // Ans-2
// let number = 287152;
// let count = 0;

// let copy = number;
// while(copy > 0){
//     count++;
//     copy = Math.floor(copy/10);
// }
// console.log(count);

// //--------------------------------------------------

// //Ans-3
// let number = 287152;
// let sum = 0;

// let copy = number;
// while(copy > 0){
//     digit = copy % 10;
//     sum += digit; // sum = sum + digit;
//     copy = Math.floor(copy / 10);
// }
// console.log(sum);

// //-----------------------------------------------

// // Ans-4
// let num = 5;
// let fact = 1;
// for(let i = 1; i<=num; i++){
//     fact *= i;
// }
// console.log(`factorial of ${num} is ${fact}`);

// // -------------------------------------------------

// // Ans-5
// let arr = [1,3,5,6,3,7,9,21,34];
// let largest = 0;
// for(let i = 0; i <= arr.length; i++){
//     if(largest < arr[i]){
//         largest = arr[i]
//     }
// }
// console.log(`largest value in array is ${largest}.`);


