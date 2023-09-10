const test = document.getElementById("test");

// Briefly make an <li> orange when the mouse moves off of it
test.addEventListener(
  "mouseout",
  (event) => {
    // highlight the mouseout target
    event.target.style.color = "orange";
  });
