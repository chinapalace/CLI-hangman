//------------------------------------------------
	//to-do 

	// 1. make Word constructor

	// 2. make Letters constructor 

	// 3. make word list dynamic

var wordOptions = ["banana", "pear", "mango", "coconut"];

var selectedWord = wordOptions[Math.floor(Math.random()*wordOptions.length)];

console.log(selectedWord);
var WordCnst = function(word) {
	this.word = word;
	this.lives = word.length - 2;

};

var LetterCnst = function(letter) {

};

var word = new WordCnst(selectedWord);
console.log(word);
console.log(word.lives);

