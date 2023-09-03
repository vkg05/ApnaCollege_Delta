// getElementByClassName
// let smallImages = document.getElementsByClassName("oldImg");

// for(let i=0; i<smallImages.length; i++){
//     smallImages[i].src = "https://www.pngmart.com/files/7/Ceramic-Lamp-PNG-File.png";
//     console.log(`value of image no. ${i} is changed.`)
// }

// -----------------------------------------------------------

// console.dir(document.querySelectorAll("div b"));



let links = document.querySelectorAll(".links a");
// for(let i=0; i<links.length; i++){
//     links[i].style.color = "darkgreen";
// } 
// OR

for(link of links){
    link.style.color = "darkgreen"
};

// -----------------------------------------------


