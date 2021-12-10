let playerScore = 0;
let computerScore = 0;
let draws = 0;

function computerPlay() {
    let number = Math.floor(Math.random() * 3);

    if(number === 0) {
        console.log("Computer: Rock");
        return "Rock".toString();
    }
    else if(number === 1) {
        console.log("Computer: Paper");
        return "Paper".toString();
    }
    else if(number === 2) {
        console.log("Computer: Scissors");
        return "Scissors".toString();
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === computerSelection.toLowerCase()) {
        draws++;
        return "You Draw! Both chose the same";
    }
    else if(playerSelection === "rock" && computerSelection === "Scissors") {
        playerScore++;
        return "You Win! Rock beats Scissors";
    }
    else if(playerSelection === "scissors" && computerSelection === "Paper") {
        playerScore++;
        return "You Win! Scissors beats Paper";
    }
    else if(playerSelection === "paper" && computerSelection === "Rock") {
        playerScore++;
        return "You Win! Paper beats Rock";
    }
    else if(playerSelection === "rock" && computerSelection === "Paper") {
        computerScore++;
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection === "scissors" && computerSelection === "Rock") {
        computerScore++;
        return "You Lose! Rock beats Scissors";
    }
    else if(playerSelection === "paper" && computerSelection === "Scissors") {
        computerScore++;
        return "You Lose! Scissors beats Paper";
    }
    else {
        return "Error";
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    draws = 0;
}

function game() {
    for(let x = 1;x <= 5;x++) {
        let player = prompt("Enter rock, paper, or scissors: ");

        if(player.toLowerCase() === "rock" || player.toLowerCase() === "paper" || player.toLowerCase() === "scissors") {
            console.log("Player: " + player);
            console.log(playRound(player, computerPlay()));
        }
        else {
            x--;
            console.log("Invalid input. Restarting round...");
        }
    }

    console.log("-----------Results-----------");
    console.log("Player Score: " + playerScore.toString());
    console.log("Computer Score: " + computerScore.toString());
    console.log("Draws: " + draws.toString());

    if(playerScore > computerScore) {
        console.log("You win best of five rounds!");
    }
    else if(playerScore < computerScore) {
        console.log("Computer wins best of five rounds!");
    }
    else {
        console.log("You tied with the computer in best of five rounds.");
    }

    resetGame();
}

game();
