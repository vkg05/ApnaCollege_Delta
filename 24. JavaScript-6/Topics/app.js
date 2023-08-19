// Functions
function hello(){
    console.log("Hello");
}
hello();

function printName(){
    console.log("Vishal Gupta");
}
printName();

function print1to5(){
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}
print1to5();

//---------------------------------------

// functions with arguments
function printInfo(name, age){
    console.log(`${name}'s age is ${age}.`);
}
printInfo("Vishal", 25);

function sum(a,b){
    console.log(a+b);
}
sum(3,5);

// -----------------------------------------------

// return keyword
function sum(a, b){
    return a+b;
}
let store = sum(7,5);

console.log(store);

//-------------------------------------------------

//Scope - Function scope
function calSum(a, b){
    let sum = a+b;
    console.log(sum);
}


// Block scope
{
    let a = 25;
}
// console.log(a);


// Lexical scope
function outerFun(){
    let x=5;
    let y=6;
    function innerFun(){
        console.log(x);
    }
    innerFun();
}

// --------------------------------------------

// functionn expressions 
let name = "Vishal";

let add = function(a,b){
    return a+b;
}

let Hello = function(){
    console.log("Hello");
}

// --------------------------------------------------

// Higher order function
function multipleGreet(func, count){
    for(let i=1; i<=count; i++){
        func();
    }
}
let greet = function(){
    console.log("hello");
}
multipleGreet(greet, 5);

// Returns a function
function oddOrEvenFactory(request){
    if(request == "odd"){
        let odd = function(n) {
            console.log(!(n%2 == 0));
        }

        return odd;
    } else if(request == "even"){
        let even = function(n){
            console.log(n%2 == 0);
        }

        return even;
    } else {
        console.log("wrong request");
    }
    
}
let request = "odd"; // even

//---------------------------------------------

// methods
const calcalator = {
    num:55,
    add : function(a, b){
        return a + b;
    },
    sub : function(a, b){
        return a - b;
    },
    mul : function(a, b){
        return a * b;
    }
};
console.log(calcalator.add(5,6));
console.log(calcalator.mul(5,7));



