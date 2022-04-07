console.log("rps game script test");

function computerPlay() {
    // Give the choices available to the computer by creating an array with the three options.
    const choices = ["Rock", "Paper", "Scissors"];
    // Randomly decide upon which choice to play by generating a random number, multiplying it by the number of choices, rounding it down to the closest integer, and selecting that decision from the possible choices.
    const computerDecision = Math.floor(Math.random() * choices.length);
    // Show the console the computer's decision.
    console.log(choices[computerDecision]);




}