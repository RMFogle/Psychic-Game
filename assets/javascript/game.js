// *Note: Be sure to console log to know the app is spitting out the right values. Look up where to place console.log? 

// Create an array that lists the possible computer choices. 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; 
console.log("computer-choice-onload", computerGuess);

// Create variables for tracking wins, losses and guesses left. 
var youWin = 0; 
var youLose = 0; 
var guessesLeft = 9; 
var userGuessed = []; 
var playerGuess; 

// Input. User Guess. Write a function for when the user makes a guess, presses a key. Use .onkeyup.  
document.onkeyup = function(event) {

    playerGuess = event.key; 
    console.log("user-pick ", userGuessed); 

// Computers Guess. Use a method to generate a random number. Use Math.floor(Math.random()? 
// Create conditions for outcome of the game, win or loss. Use if/else if statements. 
// And display the increase in wins or losses and guesses left decreases starting at 9.
// Reset once the user wins or loses without refreshing the page.  
if (playerGuess === computerGuess) {
    youWin++; 
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; 
    console.log("computer-choice-afterwin", computerGuess);
    guessesLeft = 9; 
    userGuessed = []; 
}
else {
    guessesLeft--;
    userGuessed.push(playerGuess); 

}
if (guessesLeft === 0) {
    youLose++; 
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; 
    console.log("computer-choice-afterloss", computerGuess);
    guessesLeft = 9; 
    userGuessed = []; 
}


// Display the output that the user and computer guess, wins and losses, and user guesses so far. 
// Could use .textContent and or .push to display guesses? 
// Create variables that link to the id or selector in the HTML to display text output.
// Note -- Use document.getElementById or document.querySelector? Which one is better practice. #ask-the-class in slack.
document.getElementById("wins-text").innerHTML = "Wins: " + youWin;
document.getElementById("losses-text").innerHTML = "Losses: " + youLose; 
document.getElementById("guesses-left").innerHTML = "Guesses Left: " + guessesLeft; 
document.getElementById("userchoice-text").innerHTML = "Your Guesses So Far: " + userGuessed; 

}; 