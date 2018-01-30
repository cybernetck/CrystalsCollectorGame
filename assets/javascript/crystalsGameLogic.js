/*

Crystals Game Logic
Matthew Womack, 2018.

*/

var numberToGuess, playerScore=0, wins=0,losses=0, gem1, gem2, gem3, gem4, gem5;

function generateRandom () {

 numberToGuess = Math.floor(Math.random() * 120) + 19;

 gem1 = Math.floor(Math.random() * 12) + 1;
 gem2 = Math.floor(Math.random() * 12) + 1;
 gem3 = Math.floor(Math.random() * 12) + 1;
 gem4 = Math.floor(Math.random() * 12) + 1;

}

/* first run */
generateRandom();
debug();
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
    $( "gameStatus" ).hide();
    $( "#userGuess" ).html(" ");
    generateRandom();
    debug();

}

/* onLick listeners */
$( "#reset").on("click", function(){

    generateRandom();
    debug();
    $( "#numberToGet" ).html(" ");
    $( "#userGuess" ).html(" ");
    playerScore = 0;

    $( "#numberToGet" ).html("<h1>" + numberToGuess + "</h1>");
    });
    
$( "#gem1" ).on("click", function (){
    playerScore += gem1;
    console.log(playerScore);
    $( "#userGuess" ).html("<h3>" + playerScore + "</h3>");
    winOrLose();
})

$( "#gem2" ).on("click", function (){
    playerScore += gem2;
    console.log(playerScore);
    $( "#userGuess" ).html("<h3>" + playerScore + "</h3>");
    winOrLose();
})

$( "#gem3" ).on("click", function (){
    playerScore += gem3;
    console.log(playerScore);
    $( "#userGuess" ).html("<h3>" + playerScore + "</h3>");
    winOrLose();
})

$( "#gem4" ).on("click", function (){
    playerScore += gem4;
    console.log(playerScore);
    $( "#userGuess" ).html("<h3>" + playerScore + "</h3>");
    winOrLose();
})

function winOrLose () {
if (playerScore > numberToGuess) {
    losses += 1;

    // alert("Sorry , you lose. ");
    $( "#gameStatus" ).html("<h2> Sorry , you lose. </h2> ")
    startOver(); 
}
else if (playerScore === numberToGuess) {
    wins += 1;
    //alert("congrats!");
    $( "#gameStatus" ).html("<h2> Luck is with you... You've won! </h2>")
    startOver(); 
}

$( "#lossesBox" ).html("<h3>" + losses + "</h3>");
$( "#winsBox" ).html("<h3>" + wins + "</h3>");

}