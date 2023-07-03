document.addEventListener("DOMContentLoaded", function () {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const guessInput = document.getElementById("guessInput");
    const guessButton = document.getElementById("guessButton");
    const message = document.getElementById("message");
    const resetButton = document.getElementById("resetButton");
  
    let numGuesses = 0; // Counter variable for the number of guesses
  
    guessButton.addEventListener("click", function () {
      const userGuess = parseInt(guessInput.value);
      if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
      } else {
        numGuesses++; // Increment the counter
        if (userGuess === randomNumber) {
          message.textContent = `Congratulations! You guessed the correct number in ${numGuesses} ${numGuesses === 1 ? 'guess' : 'guesses'}.`;
          guessButton.disabled = true; // Disable the guess button after finding the correct answer
        } else if (userGuess < randomNumber) {
          message.textContent = "Try a higher number.";
        } else {
          message.textContent = "Try a lower number.";
        }
      }
    });
  
    resetButton.addEventListener("click", function () {
      // Reset the game
      guessInput.value = "";
      message.textContent = "";
      randomNumber = Math.floor(Math.random() * 100) + 1;
      numGuesses = 0; // Reset the guess counter
      guessButton.disabled = false; // Enable the guess button
    });
  });
  