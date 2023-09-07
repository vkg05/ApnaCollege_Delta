// let btn = document.querySelector("button");
// // console.dir(btn);

let btns = document.querySelectorAll("button");
for(btn of btns){
    btn.onclick = sayHello;
    btn.onmouseenter = function() {
        console.log("your entered a button");
    };
}

// btn.onclick = function() {
//     alert("button was clicked");
// }

function sayHello() {
    alert("Hello!");
}

// btn.onclick = sayHello;