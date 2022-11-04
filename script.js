
const variants = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return variants[Math.floor(Math.random() * variants.length)];
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        return "Player";
    } else return "Computer";
}

function playRound(playerSelection, computerSelection) {
 const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a tie";
    } else if (result == "Player") {
            return `You WON! ${playerSelection} beats ${computerSelection}`;
        } else
            return `You LOSE! ${computerSelection} beats ${playerSelection}`;
}

function getPlayerSelection() {
    let validatedInput = false;
    while ( validatedInput == false ){
        const choice = prompt("Type you choice: Rock, Paper, Scissors");
        if ( choice == null ){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (variants.includes(choiceInLower)) {
            validatedInput == true;
            return choiceInLower;
        }
    }
}
function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Hi there")
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerSelection();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("-------------")
        if (checkWinner(playerSelection, computerSelection) == "Player"){
            scorePlayer++;
        } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
            scoreComputer++;
        }
    }
    console.log ("Game over")
    if (scorePlayer > scoreComputer) {
        console.log("Player won");
    }   else if (scorePlayer < scoreComputer) {
            console.log ("Computer won")
        } else {
        console.log("It's a tie")
    }
}
game();