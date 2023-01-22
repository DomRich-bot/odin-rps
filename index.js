 let playerScore = 0;
 let computerScore = 0;
 const choices = ["rock", "paper", "scissors"];
 const container = document.getElementById('container');
 const rockButton = document.querySelector('.rock');
 const paperButton = document.querySelector('.paper');
 const scissorsButton = document.querySelector('.scissors');
 const outcomeDiv = document.querySelector('.outcome');
 const playerScoreSpan = document.querySelector('.player-score');
 const computerScoreSpan = document.querySelector('.computer-score')
 
 function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
 }

function playRound(playerSelection,computerSelection){
    const p = document.createElement('p')
    if (playerSelection == computerSelection){
        p.innerText = `It's a Tie, You both chose ${playerSelection}`
        
    }else if(playerSelection== "rock" && computerSelection == "scissors"){
        playerScore++
        p.innerText = 'You Win! Rock beats Scissors'

    }else if(playerSelection== "paper" && computerSelection == "rock"){
        playerScore++
        p.innerText = 'You Win! Paper Covers Rock'

    }else if(playerSelection== "scissors" && computerSelection == "paper"){
        playerScore++
        p.innerText ='You Win! Scissors beats Paper'

    }else if(playerSelection== "rock" && computerSelection == "paper"){
        computerScore++
        p.innerText = 'You Lose! Paper Covers Rock'

    }else if(playerSelection== "paper" && computerSelection == "scissors"){
        computerScore++
        p.innerText = 'You Lose! Scissors beats Paper'

    }else if(playerSelection== "scissors" && computerSelection == "rock"){
        computerScore++
        p.innerText = 'You Lose! Rock beats Scissors'}
        
    outcomeDiv.appendChild(p)    

}

const checkWinner = (playerScore, computerScore) => {
    if (playerScore === 5 ){
        const h2 = document.createElement('h2')
        h2.classList.add('player-won')
        h2.innerText = `You won ${playerScore} to ${computerScore}. You are The RPS Champion!`
        outcomeDiv.appendChild(h2)
    }else if(computerScore === 5){
        const h2 = document.createElement('h2')
        h2.classList.add('computer-won')
        h2.innerText = `You lost ${computerScore} to ${playerScore}. Try again!`
        outcomeDiv.appendChild(h2)
    }
}

const updateScore = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`
    computerScoreSpan.innerText = `Computer Score: ${computerScore}`
}


paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection,computerSelection);
    updateScore(playerScore, computerScore);
    checkWinner(playerScore, computerScore);
 });
 
 rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection,computerSelection);
    updateScore(playerScore, computerScore);
    checkWinner(playerScore, computerScore);
 });
 
scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection,computerSelection);
    updateScore(playerScore, computerScore);
    checkWinner(playerScore, computerScore);
 });
 



