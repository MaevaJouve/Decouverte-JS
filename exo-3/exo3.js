// you can write js here
console.log('exo-3');

const playerInput = prompt("Your choice (rock, paper, scissors) ?");

let player = playerInput.toLowerCase();

function getPlayerChoice() {

    if (player === 'rock' || player === 'paper' || player === 'scissors' || player === 'bomb') {
        return(player);
    } else {
        return 'Choose a weapon';
    }
}

function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3);

    if (computer === 0) {
        return 'rock';
    } else if (computer === 1) {
        return 'paper';
    } else if (computer === 2) {
        return 'scissors';
    }
}

function findWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'TIED!'
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'bomb')) {
        return 'WON!'
    } else  {
        return 'LOST!'
    }
}

function playGame() {

    let uChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    console.log('Players choice: ' + uChoice +
        ' \ncomputer choice: ' + computerChoice +
        '\nThe Player: ' + findWinner(uChoice, computerChoice));
}

playGame();