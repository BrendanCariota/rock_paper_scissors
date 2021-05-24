// Global Variables
let winningPhrase
let gameWinner
let playerScore = 0
let computerScore = 0

const rockBtn = document.querySelector('.rockBtn')
const paperBtn = document.querySelector('.rockBtn')
const scissorsBtn = document.querySelector('.scissorsBtn')

const playersChoice = document.querySelector('.playerChoice')
const computersChoice = document.querySelector('.computerChoice')

const winnerBanner = document.querySelector('.winnerBanner')

const playersScore = document.querySelector('.playerScore')
const computersScore = document.querySelector('.computerScore')

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

    computersChoice.innerText = computerChoice

    return computerChoice
}

// Player Choice
function playerChoice(e) {
    let tempPlayerChoice
    let tempComputerChoice
    const playerChoice = e.target.innerText
    playersChoice.innerText = playerChoice
    tempPlayerChoice = playerChoice.toLowerCase()
    let computersChoice = computerPlay()
    tempComputerChoice = computersChoice.toLowerCase()
    playRound(tempPlayerChoice, tempComputerChoice)
}

// Add event listeners
const btns = document.querySelectorAll('.selectBtn')
btns.forEach(btn => {
    btn.addEventListener('click', playerChoice)
})



// Single Round
const playRound = (playerChoice, computersChoice) => {
    const newPlayerSelection = playerChoice
    const newComputerSelection = computersChoice

    if (newPlayerSelection === 'rock' && newComputerSelection === 'rock') {
        winnerBanner.innerText = 'You Tied! Rock ties with Rock' + ' No points awarded'
    }  else if (newPlayerSelection === 'rock' && newComputerSelection === 'paper') {
        computerScore++
        computersScore.innerHTML = computerScore
        winnerBanner.innerText = 'You Lose! Rock loses to Paper' + ' The Computer won a point' 
    } else if (newPlayerSelection === 'rock' && newComputerSelection === 'scissors') {
        playerScore++
        playersScore.innerHTML = playerScore
        winnerBanner.innerText = 'You Win! Rock beats Scissors' + ' You won a point' 
    } else if (newPlayerSelection === 'paper' && newComputerSelection === 'rock') {
        playerScore++
        playersScore.innerHTML = playerScore
        winnerBanner.innerText = 'You Win! Paper beats Rock' + ' You won a point'
    } else if (newPlayerSelection === 'paper' && newComputerSelection === 'paper') {
        winnerBanner.innerText = 'You Tied! Paper ties with Paper' + ' No points awarded'
    } else if (newPlayerSelection === 'paper' && newComputerSelection === 'scissors') {
        computerScore++
        computersScore.innerHTML = computerScore
        winnerBanner.innerText = 'You Lose! Paper loses to Scissors' + ' The Computer won a point'
    } else if (newPlayerSelection === 'scissors' && newComputerSelection === 'rock') {
        computerScore++
        computersScore.innerHTML = computerScore
        winnerBanner.innerText = 'You Lose! Scissors loses to Rock' + ' The Computer won a point'
    } else if (newPlayerSelection === 'scissors' && newComputerSelection === 'paper') {
        playerScore++
        playersScore.innerHTML = playerScore
        winnerBanner.innerText = 'You Win! Scissors beats Paper' + ' You won a point' 
    } else if (newPlayerSelection === 'scissors' && newComputerSelection === 'scissors') {
        winnerBanner.innerText = 'You Tied! Scissors ties with Scissors' + ' No points awarded'
    } else {
        winnerBanner.innerText = "Game Broken"
    }

    return winningPhrase
}

