// let p = document.querySelector('p');

// p.addEventListener('click', function() {
//     console.log('paragraph was clicked')
// });

// let box = document.querySelector(".box");
// box.addEventListener('mouseenter', function () {
//     console.log('mouse inside box');
// });


// // this in event listeners
// let btn = document.querySelector('button');

// btn.addEventListener("click", function() {
//     console.log(this);
// }); 

// keyboard events
let inp = document.querySelector('input');
// inp.addEventListener('keydown', function(event) {
//     console.log("key = ", event.key);
//     console.log("code = ", event.code);
//     console.log("key was pressed");
// });

inp.addEventListener('keydown', function(event) {
    console.log("code = ", event.code); // Arrow key used
    if (event.code == "ArrowUp") {
        console.log("character moves forward");
    } else if (event.code == "ArrowDown") {
        console.log("character moves backward");
    } else if (event.code == "ArrowLeft") {
        console.log("character moves left");
    } else if (event.code == "ArrowRight") {
        console.log("character moves right");
    }
});


