// "this" keyword
const student = {
    name: "Vishal",
    age: 25,
    eng:78,
    math:88,
    phy:78,
    getAvg(){
        console.log(this);
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(avg);
    }
};
function getAvg(){
    console.log(this);  
}

// ---------------------------------------------

// try & catch
console.log("Hello");
console.log("Hello");
try{
    console.log(a); // a is not defined
} catch {
    console.log("variable a doesn't")
};
console.log("Hello2");
console.log("Hello2");

// -------------------------------------------------

// arrow function
const sum = (a,b) => {
    console.log(a+b);
};

const cube = (n) =>{
    return n*n*n;
};

//---------------------------------------------------

// implicit return
const mul = (a,b) => a*b;

// ---------------------------------------------------

// set Timeout
console.log("hi there!");

setTimeout(() => {
    console.log("Apna College");
}, 4000);

console.log("welcome to");

// ------------------------------------------------------

// set Interval
console.log("hi there!");

let id = setInterval(() => {
    console.log("Apna College");
}, 2000);

console.log("welcome to");

clearInterval(id); // stop 

// ----------------------------------------------------

// this with arrow functions
const student1 = {
    name: "Vishal",
    marks: 95,
    prop: this, //global scope
    getName: function() {
        console.log(this);
        return this.name;
    },
    getMarks: () => { 
        console.log(this); // parents's scope-> window
        return this.marks;
    },
    getInfo1: function (){
        setTimeout(() => {
            console.log("this") // student
        }, 2000);
    },
    getInfo2: function () {
        setTimeout(function() {
            console.log("this"); // window
        }, 2000);
    },
};

