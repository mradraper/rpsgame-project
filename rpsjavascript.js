console.log("rps game script test");

function computerPlay() {
    // Give the choices available to the computer by creating an array with the three options.
    const choices = ["Rock", "Paper", "Scissors"];
    // Randomly decide upon which choice to play by generating a random number, multiplying it by the number of choices, rounding it down to the closest integer, and selecting that decision from the possible choices.
    const computerDecision = Math.floor(Math.random() * choices.length);
    // Take the computer's selection and put it in a variable.
    const computerSelection = choices[computerDecision];
    // Show the console the computer's decision.
    console.log("The computer chose ",computerSelection);
    // Complete the function with the computer playing a choice.
    return computerSelection;
}

// Take the player's selection and put it in a variable.
const playerSelection = prompt("What do you want to choose in this game of Rock, Paper, Scissors?").toLowerCase();

// Compare what the player selected to what the computer selected.

// If the player selected rock, they win if the computer selected scissors, and lose if the computer selected paper.
// If the player selected paper, they win if the computer selected rock, and lose if the computer selected scissors.
// If the player selected scissors, they win if the computer selected paper, and lose if the computer selected rock.
// Determine whether the computer or the player won.
// Tell the player the result of the game.
function playRound() {
    let computerSelection = computerPlay();
    switch (true) {
        case playerSelection == "rock" && computerSelection == "Rock":
            return ("You both chose Rock. You tie!");
            break;
        case playerSelection == "rock" && computerSelection == "Paper":
            return ("You lose! Paper covers Rock");
            break;
        case playerSelection == "rock" && computerSelection == "Scissors":
            return ("You win! Rock bashes scissors");
            break;
        case playerSelection == "paper" && computerSelection == "Rock":
            return ("You win! Paper covers rock");
            break;
       case playerSelection == "paper" && computerSelection == "Paper":
            return ("You tie! You both chose paper");
            break;
        case playerSelection == "paper" && computerSelection == "Scissors":
            return ("You lose! Scissors slice paper");
            break;
        case playerSelection == "scissors" && computerSelection == "Rock":
            return ("You lose! Rock bashes scissors");
            break;
        case playerSelection == "scissors" && computerSelection == "Paper":
            return ("You win! Scissors slice paper");
            break;
        case playerSelection == "scissors" && computerSelection == "Scissors":
            return ("You tie! You both chose scissors");
            break;
    }
}
