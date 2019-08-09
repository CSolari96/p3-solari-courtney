// Store logo and page sections
const logo = document.getElementById("logo");							// Logo
const welcomeMessage = document.querySelector(".welcome");				// Welcome message
const startButton = welcomeMessage.getElementsByTagName("button")[0];	// Start button
const gamePlay = document.querySelector(".game");						// Game play screen
const fortuneResult = document.querySelector(".fortune");				// Fortune reveal

// Store layer1 squares
const layer1 = document.querySelector(".layer1");						// Layer 1
const layer1Squares = document.querySelectorAll(".layer1 .square");		// Array of squares in layer 1

// Store layer2 squares
const layer2 = document.querySelector(".layer2");						// Layer 2
const layer2Squares = document.querySelectorAll(".layer2 .square");		// Array of squares in layer 2

// Store layer3 squares
const layer3 = document.querySelector(".layer3");						// Layer 3
const layer3Squares = document.querySelectorAll(".layer3 .square");		// Array of squares in layer 3

// Define possible fortunes
const fortunes = [
	"Good news will be brought to you by mail.",
	"A dubious friend may be an enemy in camouflage.",
	"Your quick wits will get you out of a tough situation.",
	"Stop searching forever. Happiness is just next to you.",
	"New people will bring you new realizations on big issues.",
	"For now on, your kindness will lead you to success.",
	"Prosperity will knock on your door soon.",
	"Any decision you have to make tomorrow is a good decision.",
	"A lifetime friend shall soon be made.",
	"The change you started already has far-reaching effects. Be ready."
];  // End fortunes array




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

// Change from one layer to the next
function changeLayer() {

	const currentLayer = this.parentElement;			// Determine current layer
	const nextLayer = currentLayer.nextElementSibling;	// Determine next layer to show
	let count;											// Set empty count variable

	// Add hide class to current layer and remove from next layer
	const swap = () => {
		currentLayer.classList.add("hide");
		nextLayer.classList.remove("hide");
	}  // End swap function

	// Check to see if current layer is layer 1 or layer 2 to accurately set count value
	if (currentLayer === layer1) {
		count = this.getElementsByTagName("img")[0].alt.length;		// If layer1, set count value to image alt attribute
	} else {
		count = Number(this.textContent);							// Else, set count value to square's text content
	}  // End if/else

	// Set timeout to swap layers
	setTimeout(swap, count * 2 * 1000);
}  // End changeLayer() function

// Display random fortune
function displayFortune() {

	// Grab a random fortune from fortune array
	fortunes.sort(function(a, b){return 0.5 - Math.random()});		// Randomly sort fortunes array
	const randomFortune = fortunes[0];								// Select first fortune from randomly sorted array

	const swap = () => {
		gamePlay.classList.add("hide");
		fortuneResult.classList.remove("hide");
	};

	// Create empty variable to hold element index
	let elementIndex;

	// Determine index of selected square in layer 3
	for (let i = 0; i < layer3Squares.length; i++) {
		if (layer3Squares[i] === this) {
			elementIndex = i;		// Store index number
		}  // End if statement
	}  // End for loop

	// Trigger appropriate animation on selected square
	switch (elementIndex) {
		// Square 1
		case 0:
			this.classList.add("topLeftReveal");
			break;
		
		// Square 2
		case 1:
			this.classList.add("topRightReveal");
			break;

		// Square 3
		case 2:
			this.classList.add("bottomLeftReveal");
			break;

		// Square 4
		case 3:
			this.classList.add("bottomRightReveal");
			break;
	}  // End switch statement

	// Add random fortune to placeholder
	fortuneResult.children[0].innerText = `You selected number ${this.textContent.trim()}.`;
	fortuneResult.children[1].innerText = randomFortune;

	setTimeout(swap, 1000);
}  // End displayFortune() function




// Begin the game when the start button is clicked
startButton.addEventListener("click", startGame);

// Add click event listeners to each square on layer1
for (let i = 0; i < layer1Squares.length; i++) {
	layer1Squares[i].addEventListener("click", colorLoop);		// When clicked, trigger colorLoop function
	layer1Squares[i].addEventListener("click", changeLayer);	// When clicked, trigger changeLayer function
}  // End for loop

// Add click event listeners to each square on layer2
for (let i = 0; i < layer2Squares.length; i++) {
	layer2Squares[i].addEventListener("click", numberLoop);		// When clicked, trigger numberLoop function
	layer2Squares[i].addEventListener("click", changeLayer);	// When clicked, trigger changeLayer function
}  // End for loop

// Add click event listener to each square on layer3
for (let i = 0; i < layer3Squares.length; i++) {
	layer3Squares[i].addEventListener("click", displayFortune);	// When clicked, trigger displayFortune function
}  // End for loop