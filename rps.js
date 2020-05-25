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
            alert("Draw!")	
        } else if (computer == "PAPER") {
            alert("You Lose! Paper beats Rock.")
        } else if (computer == "SCISSORS") {
            alert("You Win! Rock beats Scissors")
        }
    } else if (player == "PAPER") {
        if (computer == "ROCK") {
            alert("You Win! Paper beats Rock.")
        } else if (computer == "PAPER") {
            alert("Draw!")
        } else if (computer == "SCISSORS") {
            alert("You Lose! Scissors beats Paper.")
        }
    } else if (player == "SCISSORS") {
        if (computer == "ROCK") {
            alert("You Lose! Rock beats Scissors")
        } else if (computer == "PAPER") {
            alert("You Win! Scissors beats Paper.")
        } else if (computer == "SCISSORS") {
            alert("Draw!")
        }
    }
}
