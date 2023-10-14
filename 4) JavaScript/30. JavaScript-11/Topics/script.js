// Call Stack
function hello() {
    console.log("inside hello fnx");
    console.log("hello");
};

function demo() {
    console.log("calling hello fnx");
    hello();
};

console.log("calling demo fnx");
demo();
console.log("done, bye!");

// ------------------------------------------------

// Visualizing the call stack
function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}