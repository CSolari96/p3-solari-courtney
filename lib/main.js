"use strict";

// Store logo and page sections
var logo = document.getElementById("logo"); // Logo
var welcomeMessage = document.querySelector(".welcome"); // Welcome message
var gamePlay = document.querySelector(".game"); // Game play screen
var fortuneResult = document.querySelector(".fortune"); // Fortune reveal

// Dismiss welcome message, resize logo, and show game elements
function startGame() {
	logo.classList.add("resize");
	welcomeMessage.classList.add("hide");
	gamePlay.classList.remove("hide");
}

// Begin the game after 5 seconds
setTimeout(startGame, 5000);