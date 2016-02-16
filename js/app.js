
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  
  	  var secretNumber = Math.round(Math.random()*100)+1;
  	  var form = $('form');
  	  var input = form.find('#userGuess');
  	  var countDisplay = $('#count');
  	  var count = 0;
  	  var feedbackDisplay = $('#feedback');
  	 
  	  form.submit (function(guess) {
  	  	guess.preventDefault();
  	  	feedbackGen();
        displayGuess();
  	  })
  	 function displayGuess() {
  	 	$('#guessList').append('<li>' + input.val() + '</li>');
  	 	input.val('');
  	 	guessCount();
  	 }
  	 function guessCount() {
  	 	count++;
  	 	countDisplay.html(count);
  	 }
  	 function feedbackGen() {
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
});

