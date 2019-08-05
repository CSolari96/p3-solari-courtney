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

// Loop 
function colorLoop() {
	var animate1 = function animate1() {
		for (var i = 0; i < layer1Squares.length; i++) {
			layer1Squares[i].classList.toggle("animate1");
		}
	};

	var animate2 = function animate2() {
		for (var i = 0; i < layer1Squares.length; i++) {
			layer1Squares[i].classList.toggle("animate2");
		}
	};

	var colorNameLength = this.getElementsByTagName("img")[0].alt.length;

	for (var i = 0; i < colorNameLength * 2; i++) {
		if ([0, 1, 4, 5, 8, 9, 12, 13].indexOf(i) > -1) {
			setTimeout(animate1, i * 1000);
		} else {
			setTimeout(animate2, i * 1000);
		}
	}
}

// Begin the game after 5 seconds
setTimeout(startGame, 5000);

for (var i = 0; i < layer1Squares.length; i++) {
	layer1Squares[i].addEventListener("click", colorLoop);
}