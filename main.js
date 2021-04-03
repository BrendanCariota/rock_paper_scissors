// Global Variables
const playerSelection = window.prompt('Make you choice')
let winningPhrase


// Computer Player
const computerPlay = () => {

    let randomNum = Math.floor(Math.random() * 3)
    let computerChoice

    if (randomNum === 0) {
        computerChoice = 'Rock'
    } else if (randomNum === 1) {
        computerChoice = 'Paper'
    } else {
        computerChoice = 'Scissors'
    }

    return computerChoice
}

const computerSelection = computerPlay()

// Single Round
const playRound = (playerSelection, computerSelection) => {
    const newPlayerSelection = playerSelection.toLowerCase()
    const newComputerSelection = computerSelection.toLowerCase()

    if (newPlayerSelection === 'rock' && newComputerSelection === 'rock') {
        winningPhrase = 'You Tied! Rock ties with Rock'
    }  else if (newPlayerSelection === 'rock' && newComputerSelection === 'paper') {
        winningPhrase = 'You Lose! Rock loses to Paper'
    } else if (newPlayerSelection === 'rock' && newComputerSelection === 'scissors') {
        winningPhrase = 'You Win! Rock beats Scissors'
    } else if (newPlayerSelection === 'paper' && newComputerSelection === 'rock') {
        winningPhrase = 'You Win! Paper beats Rock'
    } else if (newPlayerSelection === 'paper' && newComputerSelection === 'paper') {
        winningPhrase = 'You Tied! Paper ties with Paper'
    } else if (newPlayerSelection === 'paper' && newComputerSelection === 'scissors') {
        winningPhrase = 'You Lose! Paper loses to Scissors'
    } else if (newPlayerSelection === 'scissors' && newComputerSelection === 'rock') {
        winningPhrase = 'You Lose! Scissors loses to Rock'
    } else if (newPlayerSelection === 'scissors' && newComputerSelection === 'paper') {
        winningPhrase = 'You Win! Scissors beats paper'
    } else if (newPlayerSelection === 'scissors' && newComputerSelection === 'scissors') {
        winningPhrase = 'You Tied! Scissors ties with Scissors'
    } else {
        winningPhrase = "Game Broken"
    }

    return winningPhrase
}


// Game 
const game = () => {
    for (let i = 0; i <= 4; i++) {
        playRound(playerSelection, computerSelection)
    }
}

console.log(playRound(playerSelection, computerSelection))