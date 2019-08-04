// Store logo and page sections
const logo = document.getElementById("logo");				// Logo
const welcomeMessage = document.querySelector(".welcome");	// Welcome message
const gamePlay = document.querySelector(".game");			// Game play screen
const fortuneResult = document.querySelector(".fortune");	// Fortune reveal

// Dismiss welcome message, resize logo, and show game elements
function startGame() {
	logo.classList.add("resize");
	welcomeMessage.classList.add("hide");
	gamePlay.classList.remove("hide");
}

// Begin the game after 5 seconds
setTimeout(startGame, 5000);