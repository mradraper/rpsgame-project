console.log("To play Rock Paper Scissors enter game();");

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

// Each game starts with zero wins, ties, and losses.
let win = 0;
let tie = 0;
let loss = 0;

// Play a game of rock, paper, scissors.
function playRound(i) {
    // Ask the player to choose what to play and put it in a variable.
    const playerSelection = prompt(`Round ${i}: What do you choose in this round of Rock, Paper, Scissors?`).toLowerCase();
    // Remind the player what they chose to play
    console.log(`In round ${i} you chose `,playerSelection);
    // Have the computer choose what to play
    const computerSelection = computerPlay();
    // Compare what the player selected to what the computer selected.
    // Determine whether the computer or the player won.
    switch (true) {
    // If the player selected rock, they win if the computer selected scissors, tie if the computer selected rock, and lose if the computer selected paper.
        case playerSelection == "rock" && computerSelection == "Rock":
            console.log("You both chose Rock. You tie!");
            return ("tie",++tie);
            break;
        case playerSelection == "rock" && computerSelection == "Paper":
            console.log("You lose! Paper covers Rock");
            return ("loss",++loss);
            break;
        case playerSelection == "rock" && computerSelection == "Scissors":
            console.log("You win! Rock bashes scissors");
            return ("win",++win);
            break;
    // If the player selected paper, they win if the computer selected rock, tie if the computer selected paper, and lose if the computer selected scissors.
        case playerSelection == "paper" && computerSelection == "Rock":
            console.log("You win! Paper covers rock");
            return ("win",++win);
            break;
       case playerSelection == "paper" && computerSelection == "Paper":
            console.log("You tie! You both chose paper");
            return ("tie",++tie);
            break;
        case playerSelection == "paper" && computerSelection == "Scissors":
            console.log("You lose! Scissors slice paper");
            return ("loss",++loss);
            break;
    // If the player selected scissors, they win if the computer selected paper, tie if the computer selected scissors, and lose if the computer selected rock.
        case playerSelection == "scissors" && computerSelection == "Rock":
            console.log("You lose! Rock bashes scissors");
            return ("loss",++loss);
            break;
        case playerSelection == "scissors" && computerSelection == "Paper":
            console.log("You win! Scissors slice paper");
            return ("win",++win);
            break;
        case playerSelection == "scissors" && computerSelection == "Scissors":
            console.log("You tie! You both chose scissors");
            return ("tie",++tie);
            break;
        }
}

function game() {

    for (let i = 1; i < 7; i++) {
        if (i < 6) {
            playRound(i);
            console.log(`Round ${i} score - Player Wins: ${win}, Ties: ${tie}, Computer Wins: ${loss}`);
        } else if (win > loss) {
            console.log(`YOU WIN THE GAME!! ${win} to ${loss}`);
        } else if (win === loss) {
            console.log(`Tie game! ${win} to ${loss}`);
        } else {
            console.log(`The computer wins... ${loss} to ${win}`);
        }
    }
}