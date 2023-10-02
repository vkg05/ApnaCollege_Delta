let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function() {
    console.log("div was clicked");
})

ul.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("ul was clicked");
})

for (li of lis) {
    li.addEventListener("click", function(event) {
        event.stopPropagation();
        console.log("li was clicked");
    });
}