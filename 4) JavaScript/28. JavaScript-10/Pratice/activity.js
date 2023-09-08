let btn = document.querySelector('button');

btn.addEventListener("click", function() {
    let h2 = document.querySelector('h2');
    let getRandomColor = randomColor();
    h2.innerText = getRandomColor;

    let div = document.querySelector('div');
    div.style.backgroundColor = getRandomColor;

    console.log('color updated');

});

function randomColor() {
    let red = Math.floor(Math.random()* 255);
    let green = Math.floor(Math.random()* 255);
    let blue = Math.floor(Math.random()* 255);

    let color = `rgb(${red}, ${green}, ${blue})`
    return color;
}