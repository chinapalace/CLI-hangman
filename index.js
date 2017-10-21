//------------------------------------------------
	//to-do 

	// 1. make Word constructor

	// 2. make Letters constructor 

	// 3. make word list dynamic

	// 4. make initial variables into constructor methods and properties 


//------------------------------------------------
	//Dependancies 
var inquirer = require("inquirer");
var questions = require("./questions");


//------------------------------------------------
	//Initital variables
var wordOptions = ["banana", "pear", "mango", "coconut"];

var selectedWord = wordOptions[Math.floor(Math.random()*wordOptions.length)];
console.log(selectedWord); //select random word from list of wordOptions 

var selectedWordArray = selectedWord.split("");
//console.log("selectedWordArray: " + selectedWordArray[3]);

var answer = []; //array of blanks spaces for every letter in selectedWord ie. [ _ _ _ _ _ ]

var remainingLetters = selectedWord.length; //initialize counter for remaining letters left to guess 

var playerGuess = process.argv[2];


//------------------------------------------------
	//Word Constructor

var WordCnstr = function(word) {
	this.word = word;
	this.lives = word.length - 2;
	

	this.createBlankArray = function() {

		for (var i = 0; i < selectedWord.length; i++) {
		answer[i] = "_";

		}

	};

};


//------------------------------------------------
	//Letter Constructor

var LetterConstr = function(letter) {
	this.correct = false;

	this.evaluateLetter = function() {
		for (var x = 0; x < selectedWordArray.length; x++) {
			//console.log(selectedWordArray[x]);
			if(selectedWordArray[x] === playerGuess) {
				answer[x] = playerGuess;
				this.correct = true;

			}


		};
	
	}

};


//------------------------------------------------
	//Gameplay

function newGame() {
	var word = new WordCnstr(selectedWord);

	word.createBlankArray();

	console.log(answer);

	getLetter();
}

function getLetter() {	
	
	inquirer.prompt(questions).then(function (answers) {		

	var letter = new LetterConstr(answers.guess);
	letter.evaluateLetter();

	if(letter.correct == true) {
		console.log(answer);
		remainingLetters--;
		getLetter();
 		};	

	});

}

newGame();

// inquirer.prompt(questions).then(function (answers) {
// 	var word = new WordCnstr(selectedWord);

// 	word.createBlankArray();

// 	var letter = new LetterConstr(answers.guess);
// 	letter.evaluateLetter();

// 	if(letter.correct == true) {
// 		remainingLetters--;
//  	};

// });
// function playGame() {

// 	var word = new WordCnstr(selectedWord);

// 	word.createBlankArray();

// 	var letter = new LetterConstr(answers.guess);
// 	letter.evaluateLetter();

// 	if(letter.correct == true) {
// 		remainingLetters--;

// 	};


// console.log(letter);
// console.log(word);
// console.log("answer: " + answer);
// console.log("remaining letters: " + remainingLetters);


// };

// playGame();

