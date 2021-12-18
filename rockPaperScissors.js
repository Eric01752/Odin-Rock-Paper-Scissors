//Globals
let roundNumber = 1;
let playerScore = 0;
let computerScore = 0;
let draws = 0;

//HTML elements
const roundHeader = document.querySelector('.round-header');
const playerPick = document.querySelector('.player-pick');
const computerPick = document.querySelector('.computer-pick');
const roundP = document.querySelector('.round-message');
const playerP = document.querySelector('.player-result');
const computerP = document.querySelector('.computer-result');
const drawP = document.querySelector('.draws');
const winnerP = document.querySelector('.winner-message');
const newGameBtn = document.querySelector('.new-game');
const btns = document.querySelectorAll('#Rock, #Paper, #Scissors');

//Generates a random number between 0 and 2, and assigns the three
//choices 0, 1, or 2.
//Return Type: String
function computerPlay() {
    let number = Math.floor(Math.random() * 3);

    if(number === 0) {
        return "Rock".toString();
    }
    else if(number === 1) {
        return "Paper".toString();
    }
    else if(number === 2) {
        return "Scissors".toString();
    }
}

//Takes a player and computer selection and compares the two to see
//if player won, lost, or had drawn. After 5 rounds the player with
//the most points wins.
//Return Type: Void - Updates html elements
function playRound(playerSelection, computerSelection) {
    roundHeader.textContent = ("Round " + roundNumber.toString());

    playerPick.textContent = playerSelection.toString();
    computerPick.textContent = computerSelection.toString();

    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === computerSelection.toLowerCase()) {
        draws++;
        roundP.textContent = "You Draw! Both chose the same";
    }
    else if(playerSelection === "rock" && computerSelection === "Scissors") {
        playerScore++;
        roundP.textContent = "You Win! Rock beats Scissors";
    }
    else if(playerSelection === "scissors" && computerSelection === "Paper") {
        playerScore++;
        roundP.textContent = "You Win! Scissors beats Paper";
    }
    else if(playerSelection === "paper" && computerSelection === "Rock") {
        playerScore++;
        roundP.textContent = "You Win! Paper beats Rock";
    }
    else if(playerSelection === "rock" && computerSelection === "Paper") {
        computerScore++;
        roundP.textContent = "You Lose! Paper beats Rock";
    }
    else if(playerSelection === "scissors" && computerSelection === "Rock") {
        computerScore++;
        roundP.textContent = "You Lose! Rock beats Scissors";
    }
    else if(playerSelection === "paper" && computerSelection === "Scissors") {
        computerScore++;
        roundP.textContent = "You Lose! Scissors beats Paper";
    }

    playerP.textContent = ("Player: " + playerScore.toString());
    computerP.textContent = ("Computer: " + computerScore.toString());
    drawP.textContent = ("Draws: " + draws.toString());

    roundNumber++;

    if((computerScore + playerScore + draws) === 5) {
        if(playerScore > computerScore) {
            winnerP.textContent = "You win best of five rounds!";
        }
        else if(playerScore < computerScore) {
            winnerP.textContent = "Computer wins best of five rounds!";
        }
        else if(playerScore === computerScore) {
            winnerP.textContent = "You tied with the computer in best of five rounds.";
        }

        btns.forEach((btn) => {
            btn.disabled = true;
        });

        newGameBtn.hidden = false;
    }
    
}

//Sets the html and globals back to default.
//Return Type: Void - Updates html elements
function resetGame() {
    roundNumber = 1;
    playerScore = 0;
    computerScore = 0;
    draws = 0;

    roundHeader.textContent = "Round 0";
    playerPick.textContent = "";
    computerPick.textContent = "";
    roundP.textContent = "Round not started!";
    playerP.textContent = ("Player: " + playerScore.toString());
    computerP.textContent = ("Computer: " + computerScore.toString());
    drawP.textContent = ("Draws: " + draws.toString());
    winnerP.textContent = "";
}

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        playRound(e.target.id.toString(), computerPlay());
    });
});

newGameBtn.addEventListener('click', (e) => {
    e.target.hidden = true;
    resetGame();

    btns.forEach((btn) => {
        btn.disabled = false;
    });
});
