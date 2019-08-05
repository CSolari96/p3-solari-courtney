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
}

// Begin the game after 5 seconds
setTimeout(startGame, 5000);