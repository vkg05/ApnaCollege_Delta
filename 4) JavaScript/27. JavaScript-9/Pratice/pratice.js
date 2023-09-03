let p = document.createElement('p');
p.innerText = "hey I'm red!";
document.querySelector('body').append(p);

p.classList.add('red');

// -------------------------------------------------

let h3 = document.createElement('h3');
h3.innerText = "I'm a blue h3!";
document.querySelector('body').append(h3);

h3.classList.add('blue');

// -------------------------------------------------

let div = document.createElement('div');
let h1 = document.createElement('h1');
let p2 = document.createElement('p');

h1.innerText = "I'm in a div.";
p2.innerText = "ME TOO!";

div.append(h1);
div.append(p2);

div.classList.add('box');

document.querySelector('body').append(div);

