// Global Variables
let winningPhrase
let gameWinner
let playerScore
let computerScore


// Player Choice
const playerChoice = () => {
    let playerChoice = window.prompt('Make you choice')
    return playerChoice
}

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

// Single Round
const playRound = () => {
    const newPlayerSelection = playerChoice().toLowerCase()
    const newComputerSelection = computerPlay().toLowerCase()

    if (newPlayerSelection === 'rock' && newComputerSelection === 'rock') {
        winningPhrase = 'You Tied! Rock ties with Rock' + ' No points awarded' + ' Current Score: Player: ' + playerScore + ' Computer: ' + computerScore
    }  else if (newPlayerSelection === 'rock' && newComputerSelection === 'paper') {
        computerScore++
        winningPhrase = 'You Lose! Rock loses to Paper' + ' The Computer won a point' + ' Current Score: Player: ' + playerScore + ' Computer: ' + computerScore
    } else if (newPlayerSelection === 'rock' && newComputerSelection === 'scissors') {
        playerScore++
        winningPhrase = 'You Win! Rock beats Scissors' + ' You won a point' + ' Current Score: Player: ' + playerScore + ' Computer: ' + computerScore
    } else if (newPlayerSelection === 'paper' && newComputerSelection === 'rock') {
        playerScore++
        winningPhrase = 'You Win! Paper beats Rock' + ' You won a point' + ' Current Score: Player: ' + playerScore + ' Computer: ' + computerScore
    } else if (newPlayerSelection === 'paper' && newComputerSelection === 'paper') {
        winningPhrase = 'You Tied! Paper ties with Paper' + ' No points awarded'
    } else if (newPlayerSelection === 'paper' && newComputerSelection === 'scissors') {
        computerScore++
        winningPhrase = 'You Lose! Paper loses to Scissors' + ' The Computer won a point' + ' Current Score: Player: ' + playerScore + ' Computer: ' + computerScore
    } else if (newPlayerSelection === 'scissors' && newComputerSelection === 'rock') {
        computerScore++
        winningPhrase = 'You Lose! Scissors loses to Rock' + ' The Computer won a point' + ' Current Score: Player: ' + playerScore + ' Computer: ' + computerScore
    } else if (newPlayerSelection === 'scissors' && newComputerSelection === 'paper') {
        playerScore++
        winningPhrase = 'You Win! Scissors beats Paper' + ' You won a point' + ' Current Score: Player: ' + playerScore + ' Computer: ' + computerScore
    } else if (newPlayerSelection === 'scissors' && newComputerSelection === 'scissors') {
        winningPhrase = 'You Tied! Scissors ties with Scissors' + ' No points awarded'
    } else {
        winningPhrase = "Game Broken"
    }

    return winningPhrase
}


// Game 
const game = () => {
    playerScore = 0
    computerScore = 0

    for (let i = 0; i <= 4; i++) {
        console.log(playRound())
    }

    if (playerScore === computerScore) {
        gameWinner = 'YOU TIED'
    } else if (playerScore < computerScore) {
        gameWinner = 'YOU LOST'
    } else {
        gameWinner = 'YOU WON'
    }

    return gameWinner
}

console.log(game())
