/*

Crystals Game Logic
Matthew Womack, 2018.

*/


//initialize variables
var numberToGuess, playerScore=0, wins=0,losses=0, gem1, gem2, gem3, gem4, gem5;

var userGuessRef   = $("#userGuess");
var gameStatusRef  = $("#gameStatus");
var numberToGetRef = $("#numberToGet");
var userGuessRef   = $("#userGuess");
var lossesRef      = $("#lossesBox");
var winsRef        = $("#winsBox");


/* generates random numbers for gems and the number that is to be guessed */

function generateRandom () {

 numberToGuess = Math.floor(Math.random() * 120) + 19;

 gem1 = Math.floor(Math.random() * 12) + 1;
 gem2 = Math.floor(Math.random() * 12) + 1;
 gem3 = Math.floor(Math.random() * 12) + 1;
 gem4 = Math.floor(Math.random() * 12) + 1;

 numberToGetRef.html("<h2>" + numberToGuess + "</h2>")
 
}

/* playGame kicks off the game */

function playGame() {

    generateRandom();

    numberToGetRef.hide().html("<h2>" + numberToGuess + "</h2>");
    lossesRef.html("<h2>" + losses + "</h2>");
    winsRef.html("<h2>" + wins + "</h2>");

    }

/* debug() function can be used to validate results - call from console */

function debug() {

    console.log("Number to Guess", numberToGuess);
    console.log("gem 1", gem1);
    console.log("gem 2", gem2);
    console.log("gem 3", gem3);
    console.log("gem 4", gem4);
}

/*  this function is called at the end of the game, for some basic house keeping, and 
sets the playerScore back to 0, and clearing the Number to Guess, and the User Guesses */

function startOver() {
    
    playerScore=0;
    numberToGetRef.fadeOut('slow');
    userGuessRef.fadeOut('slow');

    playGame();
}

/* Checks to see if the user has won or lost, and increments winner and loser counters. */

function winOrLose() {

    if (playerScore > numberToGuess) {
        losses += 1;
      
        gameStatusRef.html("<h2> Sorry, you lose </h2>").slideDown(3000).slideUp(3000);
     
         startOver(); 
    
    }
    
    else if (playerScore === numberToGuess) {
        wins += 1;
      
        gameStatusRef.html("<h2> Luck is with you... You've won! </h2>").slideDown(3000).slideUp(3000);
    
        startOver(); 
    }
    
    lossesRef.html("<h2>" + losses + "</h2>");
    winsRef.html("<h2>" + wins + "</h2>");

    }

/* adding onClick Listeners for button images in DOM */
$( "#reset" ).on("click", function(){

    userGuessRef.fadeOut(2000).text("");
    playerScore = 0;
    
    numberToGetRef.html("<h2>" + numberToGuess + "</h2>");

    playGame();

    });
    
$( "#gem1" ).on("click", function (){

    playerScore += gem1;

    userGuessRef.fadeIn('fast');
    numberToGetRef.fadeIn(2000);
    userGuessRef.html("<h2>" + playerScore + "</h2>");

    winOrLose();

});

$( "#gem2" ).on("click", function (){

    playerScore += gem2;

    userGuessRef.fadeIn('fast');
    numberToGetRef.fadeIn(2000);
    userGuessRef.html("<h2>" + playerScore + "</h2>");

    winOrLose();

});

$( "#gem3" ).on("click", function (){

    playerScore += gem3;
 
    userGuessRef.fadeIn('fast');
    numberToGetRef.fadeIn(2000);
    userGuessRef.html("<h2>" + playerScore + "</h2>");

    winOrLose();

});

$( "#gem4" ).on("click", function (){

    playerScore += gem4;

    userGuessRef.fadeIn('fast');
    numberToGetRef.fadeIn(2000);
    userGuessRef.html("<h2>" + playerScore + "</h2>");

    winOrLose();

});


/* Run Game */
playGame();

