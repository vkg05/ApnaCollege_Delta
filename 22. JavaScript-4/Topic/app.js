// // for loop
// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// for(let i=10; i>=1; i--){
//     console.log(i);
// }


// //nested for loop
// for(let i=1; i<=5; i++){
//     console.log(`outer loop ${i}`)
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }


// // while loop 
// let i = 1;
// while (i<=5){
//     console.log(i);
//     i++;
// }


// break keyword
// let i=1; 
// while(i<=5){
//     console.log(i);
//     if(i==3){
//         break;
//     }
// }


// // loop with array
// let fruits = ["mango", "apple", "banana", "litchi", "orange"];
// for(let i=0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
// }



// // nested loops with nested arrays
// let heroes = [["ironman", "spiderman", "thor"], 
//         ["superman", "wonder woman", "flash"]];
// for(let i=0; i<heroes.length; i++){
//     console.log(`List #${i}`);
//     for(let j=0; j<heroes[i].length; j++){
//         console.log(heroes[i][j]);
//     }
// }        



// // for of loop 
// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for(fruit of fruits){
//     console.log(fruit);
// }
// // or
// for(char of "ApnaCollege"){
//     console.log(char);
// }



// // nested for of loop
// let heroes = [ ["ironman", "spiderman", "thor"], 
//                 ["superman", "wonder woman", "flash"]
//              ];
// for(list of heroes){
//     for(hero of list){
//         console.log(hero);
//     }
// }             