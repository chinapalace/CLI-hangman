var inquirer = require("inquirer");

var questions = [
  {
    type: 'input',
    name: 'guess',
    message: 'Guess a letter!',
    default: ''
  }
  // {
  // 	type: 'confirm',
  // 	name: 'guessAgain',
  // 	message: 'Guess Again (Hit Enter)',
  // 	default: true
  // }
 ];


module.exports = questions;


