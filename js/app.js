var form,
	input,
	countDisplay,
	count,
	feedbackDisplay,
	secretNumber,
	userGuess,
	newGameButton,
	pastGuesses = [],
	sameGuess;


$(document).ready(function(){
	
	/*--- Display information modal box ---*/
	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	  
	form = $('form');
  	input = form.find('#userGuess');
  	countDisplay = $('#count');
  	count = 0;
  	feedbackDisplay = $('#feedback');
  	newGameButton = $('a.new');

  	newGame();

	/*--- New Game ---*/
	function newGame() {
		resetVariables();
		generateSecretNumber();
	}
  	  /*--- Get guess ---*/
  	form.submit (function(guess) {
  	  	guess.preventDefault();
  	  	validateGuess();
  	})

  	newGameButton.click(newGame);

	/*--- Validate Guess ---*/
	function validateGuess() {
		checkGuess();
		if (input.val() > 100 || input.val() < 0) {
	  	 	alert('Please input a guess between 0 and 100.');
	  	}
	  	
	  	else if (sameGuess === true) {
	  		alert('You already guessed that!');
	  	}
	  	else {
	  		generateFeedback();
			guessCount();
        	displayGuess();
	  	}
	}

	function checkGuess() {
		sameGuess = false;
		  	if (pastGuesses.length) {
		  		for (i = 0; i < pastGuesses.length; i++) {
		  			if (pastGuesses[i].number === input.val()) {
		  			sameGuess = true;
		  			}
		  		}
		  	}
		  	if (sameGuess === false) {
		  		pastGuesses.push({number: input.val()});
		  	}
		  	return sameGuess;
	  	}
	/*--- List Past Guesses ---*/
	function displayGuess() {
		$('#guessList').append('<li>' + input.val() + '</li>');
	  	 input.val('');
	}

	/*--- Generate Feedback ---*/
	function guessCount() {
		count++;
		countDisplay.html(count);
	}

	/*--- Generate Secret Number ---*/
	function generateSecretNumber() {
		secretNumber = Math.round(Math.random()*100)+1;
	}

	/*--- Generate Feedback ---*/
	function generateFeedback() {
		var distance = Math.abs(+input.val() - secretNumber);
		if (distance >= 50) { 
			feedbackDisplay.html("Ice Cold");
	  	}
		else if (distance < 50 && distance >= 30) {
			feedbackDisplay.html("Cold");
	  	}
		else if (distance < 30 && distance >= 20) {
			feedbackDisplay.html("Warm");
	  	}
		else if (distance < 20 && distance >= 10) {
			feedbackDisplay.html("Hot");
	  	}
		else if (distance < 10 && distance >= 1) {
	  	 	feedbackDisplay.html("Very Hot");
	  	}
		else {
	  	 	feedbackDisplay.html("Correct! You win.");
	  	}
	};

	/*--- Reset Variables ---*/
	function resetVariables() {
	  	countDisplay.html('');
	  	count = 0;
	  	feedbackDisplay.html('Make your Guess!');
	  	input.val('');
	  	$('#guessList').html('');
	  	pastGuesses = [];
	}
});
