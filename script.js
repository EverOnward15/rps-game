let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;
let result;
let choice;

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
      playerSelection = playerSelection.toLowerCase();
    
      if (playerSelection === computerSelection) {
        return "It's a tie!";
      } 
      
      if (playerSelection === 'rock' && computerSelection === 'paper') {
          computerScore++;
          return "Paper beats rock! AI wins this round!";
      }
  
      if (playerSelection === 'rock' && computerSelection === "scissors") {
          playerScore++;
          return "Rock beats scissors! You win this round!";
      }
  
      if (playerSelection === 'paper' && computerSelection === "scissors") {
          computerScore++;
          return "Scissors beats paper! AI wins this round!";
      }

      if (playerSelection === 'paper' && computerSelection === "rock") {
        playerScore++;
        return "Paper beats rock! You win this round!";
      }

      if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "Rock beats scissors! AI wins this round!";
      }

      if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "Scissors beat paper! You win this round!";
      }
  }
  
  function validateInput() {
      while (true) {
        choice = prompt("Enter your choice: Rock, Paper, or Scissors");
        if (choice === null) return null;
        
        choice = choice.toLowerCase();
        if (["rock", "paper", "scissors"].includes(choice)) {
          return choice;
        } else {
          console.log("Invalid choice. Please enter Rock, Paper, or Scissors.");
        }
      }
  }  
  
  function game() {
    for (let i = 0; i < 5; i++) {
      playerSelection = validateInput();
  
      if (playerSelection === null) {
          console.log("You ended the game.");
          console.log("Please type \"start\" without the quotes, all in small, to restart the game.")
          return;
      }  
      computerSelection = computerPlay();
      result = playRound(playerSelection, computerSelection);
      console.log(
        `\nRound ${
          i + 1
        }\n\nYou chose ${playerSelection}\nAI chose ${computerSelection}\n\n${result}`
      );
      console.log(`Your score:${playerScore}\nAI score:${computerScore}`);
    }
  
    if (playerScore > computerScore) {
      console.log("Congratulations! YOU WON THE GAME!");
      alert("YOU WIN!");
    } else if (playerScore < computerScore) {
      console.log("Sorry, you lose the game!");
      alert("YOU LOST!");
    } else {
      console.log("It's a tie! No one won!");
      alert("IT'S A DRAW!");
    }
    console.log("Type \"start\" without the quotes (all in small letters) to play again");
    playerScore = 0;
    computerScore = 0;
  }
  

  function startGame () {
    alert("Welcome to \"Rock, Paper, Scissors\": You vs. a Rouge AI!");
    alert("Please open the development console to play this game. After closing this message, right click in your window, click on \"Inspect\", and then click on \"Console\".")
    console.log("Welcome to \"Rock, Paper, Scissors\": You vs. a Rouge AI!");
    console.log("The objective of this game is simple -- You have to beat a rogue AI in a 5-round game of Rock, Paper, Scissors.");
    console.log("The rules are as follows: Rock beats scissors, paper beats rock, and scissors beat paper. You choosing the same element as the AI is a tie.")
    console.log("Please type \"start\" in the console below, without the quotes, all in small, when you're ready to begin! Good luck.");
  }

  Object.defineProperty(window, 'start', {
    get: function () {
        game();
    }
  });
  
  startGame();