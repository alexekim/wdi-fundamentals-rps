////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {

    //YOU CAN do a full if/else statement...but this is cleaner.


    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
    //if move EXISTS/isTRUTHY, return the move value! OR return getInput()
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
    //if move is truthy/valid, return the move value! OR return getInput() to try again
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    //return winner;
    if (playerMove === computerMove) {
      winner = "Tie";
    } else if (playerMove === 'rock') {
      if (computerMove === 'paper') {
        winner = 'Computer';
      } else {
        winner = 'Player';
      }
    } else if (playerMove === 'paper') {
      if (computerMove === 'scissors') {
        winner = 'Computer';
      } else {
        winner = 'Player';
      }
    } else if (playerMove === 'scissors') {
      if (computerMove === 'paper') {
        winner = 'Computer';
      } else {
        winner = 'Player';
      }
    }
    return winner;
    }
// SWITCH STYLE:
  // switch (playerMove){
  //   case "rock":
  //     if(computerMove === "rock") winner = "tie";
  //     if(computerMove === "paper") winner = "computer";
  //     if(computerMove === "scissors") winner = "winner";
  //     break;
  //   case "paper":
  //     if(computerMove === "rock") winner = "player";
  //     if(computerMove === "paper") winner = "tie";
  //     if(computerMove === "scissors") winner = "computer";
  //     break;
  //   case "scissors":
  //     if(computerMove === "rock") winner = "computer";
  //     if(computerMove === "paper") winner = "player";
  //     if(computerMove === "scissors") winner = "tie";
  //     break;
  //   default:
  //     break;
  // }
  // return winner;

// function playToFive(playerMove, computerMove, winner) {
//     console.log("Let's play Rock, Paper, Scissors");
//     var playerWins = 0;
//     var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
//     while (playerWins < 5 && computerWins < 5) {
//         playerMove = getPlayerMove();
//         computerMove = getComputerMove();
//         winner = getWinner(playerMove,computerMove);
//         if (winner === "Computer") {
//             console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + '. Computer wins the round.');
//             computerWins++;
//         } else if (winner === "Player") {
//             console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + '. Player wins the round.');
//             playerWins++;
//         } else {
//             console.log('The round was a tie.');
//         }
//         console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
//     }
//     return [playerWins, computerWins];
// }
function playToFive() {
  console.log("Let's play Rock, Paper, Scissors");
  var playerWins = 0;
  var computerWins = 0;

  while (playerWins <= 5 || computerWins <= 5) {
    var playerInput = getInput();
    var computerInput = randomPlay();
    var winner = getWinner(playerInput, computerInput);
    if (winner === 'computer') {
      computerWins++;
    }
    elseif(winner === "player") {
      playerWins++;
    }
  }
  return [playerWins, computerWins];
}



playToFive();
