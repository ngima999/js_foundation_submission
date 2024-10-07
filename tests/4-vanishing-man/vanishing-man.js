class VanishingMan {
  constructor(secretWord) {
      this.secretWord = Array.from(secretWord); 
      this.remainingGuesses = 6;                 
      this.lettersGuessed = [];                  
      this.gameState = 'playing';                  
  }

  submitGuess(character) {
      //If the game is not in 'playing' state, do nothing
      if (this.gameState !== 'playing') return;

      //Check if the guess is unique
      if (!this.lettersGuessed.includes(character.toLowerCase())) {
          this.lettersGuessed.push(character.toLowerCase()); // Store the unique guess

          //If the guess is incorrect
          if (!this.secretWord.map(letter => letter.toLowerCase()).includes(character.toLowerCase())) {
              this.remainingGuesses--; //Decrement remaining guesses
          }

          //Update the game state based on remaining guesses and secret word status
          this.computeGameState();
      }
  }

  computeGameState() {
      //Update the game state to 'lost' if no guesses remain
      if (this.remainingGuesses <= 0) {
          this.gameState = 'lost';
      }
      //Check if all letters in the secret word have been guessed
      else if (this.getSecretWordPuzzle().indexOf('#') === -1) {
          this.gameState = 'won';
      }
  }

  getSecretWordPuzzle() {
      //Create a puzzle representation of the secret word
      return this.secretWord.map(letter => {
          if (this.lettersGuessed.includes(letter.toLowerCase()) || letter === ' ') {
              return letter; //Reveal correct guesses and spaces
          } else {
              return '#'; //Hide other letters
          }
      }).join('');
  }

  getGameStateMessage() {
      switch (this.gameState) {
          case 'playing':
              return `There is a total of ${this.remainingGuesses} guesses remaining:\n\n\n\n\n\n=========`; 
          case 'lost':
              return `Game Over, the word was "${this.secretWord.join('')}":\n\n\n  O   \n /|\\  \n / \\  \n\n=========`; 
          case 'won':
              return 'Winner Winner Chicken Dinner, you won!';
          default:
              return '';
      }
  }

  simulateVanishingMan() {
      return this.gameState; //Returns the final result of the game
  }
  
}