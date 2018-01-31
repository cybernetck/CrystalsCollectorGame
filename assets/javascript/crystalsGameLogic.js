/*

Crystals Game Logic
Matthew Womack, 2018.

*/

var numberToGuess, playerScore=0, wins=0,losses=0, gem1, gem2, gem3, gem4, gem5;

var userGuessRef   = $("#userGuess");
var gameStatusRef  = $("#gameStatus");
var numberToGetRef = $("#numberToGet");
var userGuessRef   = $("#userGuess");

function generateRandom () {

 numberToGuess = Math.floor(Math.random() * 120) + 19;

 gem1 = Math.floor(Math.random() * 12) + 1;
 gem2 = Math.floor(Math.random() * 12) + 1;
 gem3 = Math.floor(Math.random() * 12) + 1;
 gem4 = Math.floor(Math.random() * 12) + 1;

 numberToGetRef.html("<h3>" + numberToGuess + "</h3>")
 debug();
}

/* first run */
generateRandom();
$( "#numberToGet" ).html("<h3>" + numberToGuess + "</h3>");


function debug () {

    console.log("Number to Guess", numberToGuess);
    console.log("gem 1", gem1);
    console.log("gem 2", gem2);
    console.log("gem 3", gem3);
    console.log("gem 4", gem4);
}

function startOver() {
    
    playerScore=0;
    numberToGetRef.fadeOut('slow').text(" ").fadeIn('slow', generateRandom);
    userGuessRef.fadeOut('slow');

}

function winOrLose () {

    if (playerScore > numberToGuess) {
        losses += 1;
    
        // alert("Sorry , you lose. ");
     
        gameStatusRef.html("<h2> Sorry, you lose </h2>").slideDown(3000).slideUp(3000);
     
         startOver(); 
    
    }
    
    else if (playerScore === numberToGuess) {
        wins += 1;
        //alert("congrats!");
    
        gameStatusRef.html("<h2> Luck is with you... You've won! </h2>").slideDown(3000).slideUp(3000);
    
        startOver(); 
    }
    
    $( "#lossesBox" ).html("<h3>" + losses + "</h3>");
    $( "#winsBox" ).html("<h3>" + wins + "</h3>");
    //startOver(); 
    }

/* onLick listeners */
$( "#reset").on("click", function(){

    //$("#numberToGet").text("");
    $( "#userGuess" ).text("");
    //gameStatusRef.text("");
    playerScore = 0;
    generateRandom();
    debug();

    $( "#numberToGet" ).html("<h3>" + numberToGuess + "</h3>");

    $( "#gem1" ).off("click");
    $( "#gem2" ).off("click");
    $( "#gem3" ).off("click");
    $( "#gem4" ).off("click");

    });
    
$( "#gem1" ).on("click", function (){

    playerScore += gem1;
    console.log(playerScore);
    userGuessRef.fadeIn('fast');
    numberToGetRef.fadeIn(2000);
    userGuessRef.html("<h3>" + playerScore + "</h3>");
    winOrLose();

});

$( "#gem2" ).on("click", function (){

    playerScore += gem2;
    console.log(playerScore);
    userGuessRef.fadeIn('fast');
    numberToGetRef.fadeIn(2000);
    userGuessRef.html("<h3>" + playerScore + "</h3>");
    winOrLose();

});

$( "#gem3" ).on("click", function (){

    playerScore += gem3;
    console.log(playerScore);
    userGuessRef.fadeIn('fast');
    numberToGetRef.fadeIn(2000);
    userGuessRef.html("<h3>" + playerScore + "</h3>");
    winOrLose();

});

$( "#gem4" ).on("click", function (){

    playerScore += gem4;
    console.log(playerScore);
    userGuessRef.fadeIn('fast');
    numberToGetRef.fadeIn(2000);
    userGuessRef.html("<h3>" + playerScore + "</h3>");
    winOrLose();

});

