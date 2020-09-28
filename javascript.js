var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

// Easy Button EventListener 
easyBtn.addEventListener("click", function () {
    // Remove & add Selected 
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    // Num Squares used
    numSquares = 3
    // Random Color Generation
    colors = generateRandomColors(numSquares);
    // Pick New colors from array
    pickedColor = pickColor();
    // Match Text RGB to color 
    colorDisplay.textContent = pickedColor;
    // Loop to remove incorrect square
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

// Hard Button Eventlistener (similar comments as above)
hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

// Reset Button //
resetButton.addEventListener("click", function () {
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick new random color from array 
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New colors";
    messageDisplay.textContent = "";
    // change colors of squares
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "lightblue";
})


colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // add first colors to squares
    squares[i].style.backgroundColor = colors[i];
    // add event listeners to squares
    squares[i].addEventListener("click", function () {
        // Grab color of picked square
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedcolor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct"
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"
        };

    });
}

function changeColors(color) {
    // loop through all squares 
    for (var i = 0; i < squares.length; i++) {
        // Change Each Color to Match assigned Color  
        squares[i].style.backgroundColor = color;
    }

}

// Picked Color (Correct Color)
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandomColors(num) {
    //Make Array 
    var arr = []
    //Add num random colors to array
    for (var i = 0; i < num; i++) {
        // get random color and push into array 
        arr.push(randomColor())
    }
    // Return Array
    return arr;
}

function randomColor() {
    // Red RGB from 0 from -255
    var r = Math.floor(Math.random() * 256);
    // Green RGB from 0 from -255
    var g = Math.floor(Math.random() * 256);
    // Blue RGB from 0 from -255
    var b = Math.floor(Math.random() * 256);
    "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
};