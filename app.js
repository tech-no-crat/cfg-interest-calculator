// The function start will run when the web page is loaded.
function start() {
  // Print "Hello, world!" to the developer console.
  console.log("Hello, world!");

  // Tell jQuery to run our calculate function when the button with the
  // ID calculate is clicked:
  $("#calculate").click(calculate);
}

// This function will run when we press the "Calculate!" button
function calculate() {
  // Put some placeholder text in the div with the id calculate.
  $("#result").html("Hi, there!");
}

// Here we tell jQuery to run our start function when the document has
// been loaded.
$(document).ready(start);
