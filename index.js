 const choices = ["rock", "paper", "scissors"]

 function getComputerChoice(){
    const choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
 }

 function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie"
    }
    else if(
       (playerSelection== "rock" && computerSelection == "scissors")||
       (playerSelection== "scissors" && computerSelection == "paper")||
       (playerSelection== "paper" && computerSelection == "rock")
    ){
        return "Player"
    }
    else{
        return "Computer"
    }
 }

 function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection)
    if(result == "Tie"){
        return "It's a Tie"
    }
    else if(result == "Player"){
        return "You Win " + playerSelection + " beats "+ computerSelection;
    }
    else{
        return "You lose "+ computerSelection+ " beats "+playerSelection
    }
 }

 function getPlayerChoice(){
    playerSelection = prompt("Rock, Paper, or Scissors",'');
    const playerInput = playerSelection.toLowerCase();
    if ((playerSelection.toLowerCase()=="rock")||
        (playerSelection.toLowerCase()=="paper")||
        (playerSelection.toLowerCase()=="scissors")){
        return playerInput;

        } else {
            alert("Invalid, Choose Again");
            getPlayerChoice();
        }
 }

 
 function game(){
    console.log("Game On")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
     }
 }

 game()
