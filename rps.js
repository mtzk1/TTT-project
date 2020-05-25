function computerPlay() {
    let move = Math.floor(Math.random() * 3)
    if (move == 0) {
        return "Rock"
    } else if (move == 1) {
        return "Paper"
    } else if (move == 2) {
        return "Scissors"
    }
}
let playerScore = 0
let computerScore = 0
function playRock() {
    let playerSelection = "ROCK";
    let computerSelection = computerPlay().toUpperCase();
    playRound(playerSelection,computerSelection);
}

function playPaper() {
    let playerSelection = "PAPER";
    let computerSelection = computerPlay().toUpperCase();
    playRound(playerSelection,computerSelection);
}

function playScissors() {
    let playerSelection = "SCISSORS";
    let computerSelection = computerPlay().toUpperCase();
    playRound(playerSelection,computerSelection);
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", playRock);

const paper = document.querySelector("#paper");
paper.addEventListener("click", playPaper);

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", playScissors);

function playRound(playerSelection,computerSelection) {
    let player = playerSelection
    let computer = computerSelection
    if (player == "ROCK") {
        if (computer == "ROCK") {
            alert("Draw!" + 
            "\nPlayer: " + playerScore + 
            "\nComputer: " + computerScore)	
        } else if (computer == "PAPER") {
            computerScore += 1
            alert("You Lose! Paper beats Rock." + 
            "\nPlayer: " + playerScore + 
            "\nComputer: " + computerScore)
        } else if (computer == "SCISSORS") {
            playerScore += 1
            alert("You Win! Rock beats Scissors" + 
            "\nPlayer: " + playerScore + 
            "\nComputer: " + computerScore)
        }
    } else if (player == "PAPER") {
        if (computer == "ROCK") {
            playerScore += 1
            alert("You Win! Paper beats Rock." + 
            "\nPlayer: " + playerScore + 
            "\nComputer: " + computerScore)
        } else if (computer == "PAPER") {
            alert("Draw!" + 
            "\nPlayer: " + playerScore + 
            "\nComputer: " + computerScore)
        } else if (computer == "SCISSORS") {
            computerScore += 1
            alert("You Lose! Scissors beats Paper." + 
            "\nPlayer: " + playerScore + 
            "\nComputer: " + computerScore)
        }
    } else if (player == "SCISSORS") {
        if (computer == "ROCK") {
            computerScore += 1
            alert("You Lose! Rock beats Scissors" + 
            "\nPlayer: " + playerScore + 
            "\nComputer: " + computerScore)
        } else if (computer == "PAPER") {
            playerScore += 1
            alert("You Win! Scissors beats Paper." + 
            "\nPlayer: " + playerScore + 
            "\nComputer: " + computerScore)
        } else if (computer == "SCISSORS") {
            alert("Draw!" + 
            "\nPlayer: " + playerScore + 
            "\nComputer: " + computerScore)
        }
    }
}
