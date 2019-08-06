// Store logo and page sections
const logo = document.getElementById("logo");				// Logo
const welcomeMessage = document.querySelector(".welcome");	// Welcome message
const gamePlay = document.querySelector(".game");			// Game play screen
const fortuneResult = document.querySelector(".fortune");	// Fortune reveal

// Store layer1 squares
const layer1 = document.querySelector(".layer1");						// Layer 1
const layer1Squares = document.querySelectorAll(".layer1 .square");		// Array of squares in layer 1

// Store layer2 squares
const layer2 = document.querySelector(".layer2");						// Layer 2
const layer2Squares = document.querySelectorAll(".layer2 .square");		// Array of squares in layer 2

// Store layer3 squares
const layer3 = document.querySelector(".layer3");						// Layer 3
const layer3Squares = document.querySelectorAll(".layer3 .square");		// Array of squares in layer 3

// Dismiss welcome message, resize logo, and show game elements
function startGame() {
	logo.classList.add("resize");			// Resize logo
	welcomeMessage.classList.add("hide");	// Hide welcome message
	gamePlay.classList.remove("hide");		// Show game squares
}  // End startGame() function

// On layer 1, loop through animation for length of the color name 
function colorLoop() {

	// Animate first movement direction
	const animate1 = () => {
		// On each square of layer 1, toggle animate1 class
		for (let i = 0; i < layer1Squares.length; i++) {
			layer1Squares[i].classList.toggle("animate1");
		}  // End for loop
	};  // End animate1 function

	// Animate second movement direction
	const animate2 = () => {
		// On each square of layer 1, toggle animate2 class
		for (let i = 0; i < layer1Squares.length; i++) {
			layer1Squares[i].classList.toggle("animate2");
		}  // End for loop
	};  // End animate2 class

	// Set length of color name based on image alt attribute
	const colorNameLength = this.getElementsByTagName("img")[0].alt.length;	

	// Loop through animation based on length of color name
	for (let i = 0; i < colorNameLength * 2; i++) {
		if ([0, 1, 4, 5, 8, 9, 12, 13].indexOf(i) > -1) {
			setTimeout(animate1, i * 1000);
		} else {
			setTimeout(animate2, i * 1000);
		}  // End if/else
	}  // End for loop
}  // End colorLoop() function

// On layer 2, loop through the animation based on the number selected
function numberLoop() {

	// Animate first movement direction
	const animate1 = () => {
		// On each square of layer 2, toggle animate1 class
		for (let i = 0; i < layer2Squares.length; i++) {
			layer2Squares[i].classList.toggle("animate1");
		}  // End for loop
	};  // End animate1 function

	// Animate second movement direction
	const animate2 = () => {
		// On each square of layer 2, toggle animate2 class
		for (let i = 0; i < layer2Squares.length; i++) {
			layer2Squares[i].classList.toggle("animate2");
		}  // End for loop
	};  // End animate2 class

	// Loop through animation based on number selected
	for (let i = 0; i < Number(this.textContent) * 2; i++) {
		if ([0, 1, 4, 5, 8, 9, 12, 13].indexOf(i) > -1) {
			setTimeout(animate1, i * 1000);
		} else {
			setTimeout(animate2, i * 1000);
		}  // End if/else
	}  // End for loop
}  // End numberLoop() function

// Change from layer1 to layer2
function changeLayer1() {

	// Add hide class to layer1 and remove hide class from layer 2
	const swap = () => {
		layer1.classList.add("hide");
		layer2.classList.remove("hide");
	}  // End swap function

	// Set timeout to swap layers
	setTimeout(swap, this.getElementsByTagName("img")[0].alt.length * 2 * 1000);  
}  // End changeLayer1() function

// Change from layer2 to layer3
function changeLayer2() {

	// Add hide class to layer2 and remove hide class from layer3
	const swap = () => {
		layer2.classList.add("hide");
		layer3.classList.remove("hide");
	}  // End swap function

	// Set timeout to swap layers
	setTimeout(swap, Number(this.textContent) * 2 * 1000);
}  // End changeLayer2() function

// Begin the game after 5 seconds
setTimeout(startGame, 5000);

// Add click event listeners to each square on layer1
for (let i = 0; i < layer1Squares.length; i++) {
	layer1Squares[i].addEventListener("click", colorLoop);		// When clicked, trigger colorLoop function
	layer1Squares[i].addEventListener("click", changeLayer1);	// When clicked, trigger changeLayer1 function
}  // End for loop

// Add click event listeners to each square on layer2
for (let i = 0; i < layer2Squares.length; i++) {
	layer2Squares[i].addEventListener("click", numberLoop);		// When clicked, trigger numberLoop function
	layer2Squares[i].addEventListener("click", changeLayer2);	// When clicked, trigger changeLayer2 function
}  // End for loop