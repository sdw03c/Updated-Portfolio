var computerChoices = ["a", "b", "c", "d", "e","f","g", "h", "i", "j", "k","l","m", "n", "o", "p", "q","r","s", "t", "u", "v", "w","x","y","z"];



    // Creating variables to hold the number of wins, losses, and ties. They start at 0.

    var wins = 0;

    var losses = 0;

    var guessesLeft = 9;
    
    var guessesMade = [];

    // Create variables that hold references to the places in the HTML where we want to display things.
    var computerChoiceText = document.getElementById("computerChoice-text");

    var userChoiceText = document.getElementById("userChoice-text");
    
    var winsText = document.getElementById("wins-text");

    var lossesText = document.getElementById("losses-text");

    var guessesLeftText = document.getElementById("guessesLeft-text");

    var guessesMadeText = document.getElementById("guessesMade-text");



    // This function is run whenever the user presses a key.

    document.onkeyup = function(event) {



      // Determines which key was pressed.

      var userGuess = event.key;
      guessesMade.push(userGuess);
      console.log(guessesMade);
      console.log(userGuess);


      // Randomly chooses a choice from the options array. This is the Computer's guess.

      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



      // Reworked our code from last step to use "else if" instead of lots of if statements.



      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number

        if (userGuess === computerGuess) {

          wins++;
          guessesLeft = 9;
          guessesMade = [];
       
        } 
        else if(guessesLeft === 1){
         losses++;
         guessesLeft = 9;
         guessesMade = [];      
       
    }

        
        else {
          guessesLeft--;
         
        }
    
    
    

        // Hide the directions


        // Display the user and computer guesses, and wins/losses/ties.

        
        userChoiceText.textContent = "You chose: " + userGuess;
       
        computerChoiceText.textContent = "The computer chose: " + computerGuess;

        winsText.textContent = "wins: " + wins;

        lossesText.textContent = "losses: " + losses;

        guessesLeftText.textContent = "guesses left: " + guessesLeft;

        guessesMadeText.textContent = "guesses Made: " + guessesMade;

    };