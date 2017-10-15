//The player will have to guess the answer, just like in Hangman. This time, though, the player will guess with numbers instead of letters. 

//global variables
//===============================
var wins=0;
var losses=0;

//crystal name and value
var crystal = {
	red:
	{
		name: "red", 
		value: 0
	},
	blue: 
	{
		name: "blue", 
		value: 0
	},
	yellow: 
	{
		name: "yellow",
		value: 0
	},
	green:
	{
		name: "green",
		value: 0
	}
 };

//target score and total score set to 0
var targetScore= 0;
var totalScore = 0;

//functions
//==================================
//starts game and resets game
var startGame = function(){
totalScore = 0;

//The player will be shown a random number at the start of the game and it will be between 19 - 120.
targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
console.log(targetScore);

//Each crystal should have a random hidden value between 1 - 12.
crystal.red.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
console.log(crystal.red.value);

crystal.blue.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
console.log(crystal.blue.value);

crystal.yellow.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
console.log(crystal.yellow.value);

crystal.green.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
console.log(crystal.green.value);

//displaying scores to html
$("#yourScore").html(totalScore);
$("#targetScore").html(targetScore);
}

//function adds values of crystals selected
var addValues = function(crystal){
	totalScore = totalScore + crystal.value;
	console.log(totalScore);
	//displays score to html
	$("#yourScore").html(totalScore);
	
	//calling winslosses function
	winsLosses();
}

//function adds points to wins/losses 
//The game restarts whenever the player wins or loses.
var winsLosses = function(){
	//The player wins if their total score matches the random number from the beginning of the game.
	if (totalScore == targetScore) {
		wins++;
		//console.log("YOU WON");
		$("#wins").html(wins);
		if (wins === 3) {
				// if player losses three times, new message stating they have lost three times
				$( "#newRow" ).append( "<h1 class='jumbotron container'>YOU ARE DA BOMB!!! </h1>" );
		startGame();
//The player losses if their score goes above the random number.
	} else if (totalScore > targetScore) {
		losses++;
		//console.log("LOSER");
		$("#losses").html(losses);
			if (losses === 3) {
				// if player losses three times, new message stating they have lost three times
				$( "#newRow" ).append( "<h1 class='jumbotron container'>THREE STRIKES, YOU'RE OUT!!!</h1>" );
			}
		startGame();
	}
}
}
//calling function which starts the game
startGame();

//main process
//===================================
//There will be four crystals displayed as buttons on the page.
$("#red").click(function(){
	addValues(crystal.red);
});

$("#blue").click(function(){
	addValues(crystal.blue);
});

$("#yellow").click(function(){
	addValues(crystal.yellow);
});

$("#green").click(function(){
	addValues(crystal.green);
});