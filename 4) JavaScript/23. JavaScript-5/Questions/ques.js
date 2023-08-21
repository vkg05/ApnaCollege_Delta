// // Generate a random between 1 and 100

// let num = Math.floor(Math.random()*100)+1;
// console.log(num);

// // Generate a random between 1 to 5
// let ran = Math.floor(Math.random()*5)+1;
// console.log(ran);



// Guessing game
const max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while (true) {
    if (guess == "quit") {
        console.log("user quit");
        break;
    }

    if (guess == random) {
        console.log("you are right! congrats!! random number was", random);
        break;
    } else if (guess < random) {
        guess = prompt("hint : your guess was too small. please try again");
    } else {
        guess = prompt("hint : your guess was too large. please try again")
    }


}
