// Declare all variables
// Array of possible letter choices
var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
	"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var guesses = [];
var winCount = 0;
var lossCount = 0;
var answer;
var guessesLeft;


//Reset funciton
function reset() {
	guesses = [];
	guessesLeft = 10;
	answer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function win() {
	winCount ++;
	reset();
}

function loss() {
	lossCount ++;
	reset();
}

function print() {
	document.getElementById("lossCount").innerHTML = lossCount;
	document.getElementById("winCount").innerHTML = winCount;
	document.getElementById("guessesLeft").innerHTML = guessesLeft;
	document.getElementById("guesses").innerHTML = guesses;
}

function compare(x){
	if (guesses.indexOf(x) === -1) {
		guesses.push(x);
	
		if (answer === x) {
			win();
		}
	 	else {
	 		guessesLeft--;
	 		if (guessesLeft === 0) {
	 			loss();
	 		}
	 	}
	}
}

//Run program
reset();
print();

document.onkeyup =function() {
	var input = event.key.toUpperCase();
	compare(input);
	print();
}

