 const choices = ["rock", "paper", "scissors"];
 const container = document.getElementById('container');
 const rockButton = document.querySelector('.rock');
 const paperButton = document.querySelector('.paper');
 const scissorsButton = document.querySelector('.scissors');

 
 function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
 }

function playRound(playerSelection,computerSelection){
    let playerScore = 0;
    let computerScore = 0;

    if (playerSelection == computerSelection){
        const p = document.createElement('p')
        p.innerText = `It's a Tie, You both chose ${playerSelection}`
        outcomeDiv.appendChild(p)
        
    }else if(playerSelection== "rock" && computerSelection == "scissors"){
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You Win! Rock beats Scissors'
        outcomeDiv.appendChild(p)

    }else if(playerSelection== "paper" && computerSelection == "rock"){
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You Win! Paper Covers Rock'
        outcomeDiv.appendChild(p)
        
    }else if(playerSelection== "scissors" && computerSelection == "paper"){
        playerScore++
        const p = document.createElement('p')
        p.innerText ='You Win! Scissors beats Paper'
        outcomeDiv.appendChild(p)

    }else if(playerSelection== "rock" && computerSelection == "paper"){
        computerScore++
        const p = document.createElement('p')
        p.innerText = 'You Lose! Paper Covers Rock'
        outcomeDiv.appendChild(p)

    }else if(playerSelection== "paper" && computerSelection == "scissors"){
        computerScore++
        const p = document.createElement('p')
        p.innerText = 'You Lose! Scissors beats Paper'
        outcomeDiv.appendChild(p)

    }else if(playerSelection== "scissors" && computerSelection == "rock"){
        computerScore++
        const p = document.createElement('p')
        p.innerText = 'You Lose! Rock beats Scissors'
        outcomeDiv.appendChild(p)}

}

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection,computerSelection);
 });
 
 rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection,computerSelection);
 });
 
scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection,computerSelection);
 });
 


/*function game(){
    let playerScore = 0;
    let computerScore = 0;
    console.log("Game On")
    for (let i = 0; i < 5; i++) {
        if (playRound(playerSelection,computerSelection) == "You Win " + playerSelection + " beats "+ computerSelection){
            playerScore++
        } 
        else if (playRound(playerSelection, computerSelection) == "You lose "+ computerSelection+ " beats "+playerSelection){
            computerScore++
        } 
        console.log("Player Score: "+ playerScore + "\nComputer Score "+ computerScore)
     }
     console.log("Game Over")
     if (playerScore > computerScore){
        alert("You Win")   
     }
     else if (playerScore < computerScore){
        alert("You Lose")
     }
     else{
        alert("We have a TIE")
     }
 }*/




