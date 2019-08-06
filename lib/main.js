"use strict";

// Store logo and page sections
var logo = document.getElementById("logo"); // Logo
var welcomeMessage = document.querySelector(".welcome"); // Welcome message
var gamePlay = document.querySelector(".game"); // Game play screen
var fortuneResult = document.querySelector(".fortune"); // Fortune reveal

// Store layer1 squares
var layer1 = document.querySelector(".layer1"); // Layer 1
var layer1Squares = document.querySelectorAll(".layer1 .square"); // Array of squares in layer 1

// Store layer2 squares
var layer2 = document.querySelector(".layer2"); // Layer 2
var layer2Squares = document.querySelectorAll(".layer2 .square"); // Array of squares in layer 2

// Store layer3 squares
var layer3 = document.querySelector(".layer3"); // Layer 3
var layer3Squares = document.querySelectorAll(".layer3 .square"); // Array of squares in layer 3

// Dismiss welcome message, resize logo, and show game elements
function startGame() {
	logo.classList.add("resize"); // Resize logo
	welcomeMessage.classList.add("hide"); // Hide welcome message
	gamePlay.classList.remove("hide"); // Show game squares
} // End startGame() function

// On layer 1, loop through animation for length of the color name 
function colorLoop() {

	// Animate first movement direction
	var animate1 = function animate1() {
		// On each square of layer 1, toggle animate1 class
		for (var i = 0; i < layer1Squares.length; i++) {
			layer1Squares[i].classList.toggle("animate1");
		} // End for loop
	}; // End animate1 function

	// Animate second movement direction
	var animate2 = function animate2() {
		// On each square of layer 1, toggle animate2 class
		for (var i = 0; i < layer1Squares.length; i++) {
			layer1Squares[i].classList.toggle("animate2");
		} // End for loop
	}; // End animate2 class

	// Set length of color name based on image alt attribute
	var colorNameLength = this.getElementsByTagName("img")[0].alt.length;

	// Loop through animation based on length of color name
	for (var i = 0; i < colorNameLength * 2; i++) {
		if ([0, 1, 4, 5, 8, 9, 12, 13].indexOf(i) > -1) {
			setTimeout(animate1, i * 1000);
		} else {
			setTimeout(animate2, i * 1000);
		} // End if/else
	} // End for loop
} // End colorLoop() function

// On layer 2, loop through the animation based on the number selected
function numberLoop() {

	// Animate first movement direction
	var animate1 = function animate1() {
		// On each square of layer 2, toggle animate1 class
		for (var i = 0; i < layer2Squares.length; i++) {
			layer2Squares[i].classList.toggle("animate1");
		} // End for loop
	}; // End animate1 function

	// Animate second movement direction
	var animate2 = function animate2() {
		// On each square of layer 2, toggle animate2 class
		for (var i = 0; i < layer2Squares.length; i++) {
			layer2Squares[i].classList.toggle("animate2");
		} // End for loop
	}; // End animate2 class

	// Loop through animation based on number selected
	for (var i = 0; i < Number(this.textContent) * 2; i++) {
		if ([0, 1, 4, 5, 8, 9, 12, 13].indexOf(i) > -1) {
			setTimeout(animate1, i * 1000);
		} else {
			setTimeout(animate2, i * 1000);
		} // End if/else
	} // End for loop
} // End numberLoop() function

// Change from one layer to the next
function changeLayer() {

	var currentLayer = this.parentElement; // Determine current layer
	var nextLayer = currentLayer.nextElementSibling; // Determine next layer to show
	var count = void 0; // Set empty count variable

	// Add hide class to current layer and remove from next layer
	var swap = function swap() {
		currentLayer.classList.add("hide");
		nextLayer.classList.remove("hide");
	}; // End swap function

	// Check to see if current layer is layer 1 or layer 2 to accurately set count value
	if (currentLayer === layer1) {
		count = this.getElementsByTagName("img")[0].alt.length; // If layer1, set count value to image alt attribute
	} else {
		count = Number(this.textContent); // Else, set count value to square's text content
	} // End if/else

	// Set timeout to swap layers
	setTimeout(swap, count * 2 * 1000);
} // End changeLayer() function

// Begin the game after 5 seconds
setTimeout(startGame, 5000);

// Add click event listeners to each square on layer1
for (var i = 0; i < layer1Squares.length; i++) {
	layer1Squares[i].addEventListener("click", colorLoop); // When clicked, trigger colorLoop function
	layer1Squares[i].addEventListener("click", changeLayer); // When clicked, trigger changeLayer function
} // End for loop

// Add click event listeners to each square on layer2
for (var _i = 0; _i < layer2Squares.length; _i++) {
	layer2Squares[_i].addEventListener("click", numberLoop); // When clicked, trigger numberLoop function
	layer2Squares[_i].addEventListener("click", changeLayer); // When clicked, trigger changeLayer function
} // End for loop