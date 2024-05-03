//testing testing testing
console.log("scissor paper rock game yurp")

let humanScore = 0, computerScore = 0;
let turn = 5

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0: computerChoice = "rock";
        break;
        case 1: computerChoice = "paper";
        break;
        case 2: computerChoice = "scissors";
        break;
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice!")
    return humanChoice.toLowerCase();
}




function playRound(computerSelection, humanSelection) {

    if (computerSelection === humanSelection) {
        console.log("Point goes to no one!")
    } 

    else if(computerSelection == "rock") {
         if(humanSelection == "paper"){
            ++humanScore;
            --turn
            console.log("The Human Scores !")
         } else {
            ++computerScore;
            --turn
            console.log("The Computer Scores !")
         }
    } 
    
    else if(computerSelection == "paper") {
        if(humanSelection == "scissors"){
           ++humanScore;
           --turn
           console.log("The Human Scores !")
        } else {
           ++computerScore;
           --turn
           console.log("The Computer Scores !")
        }
    }
    
    else if(computerSelection == "scissors") {
        if(humanSelection == "rock"){
           ++humanScore;
           --turn
           console.log("The Human Scores !")
        } else {
           ++computerScore;
           --turn
           console.log("The Computer Scores !")
        }

    }
}

function playGame() {
    for(; turn > 0;) {
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice()
        console.log("Human chose " + humanSelection)
        console.log("Computer chose " + computerSelection)
        playRound(computerSelection, humanSelection)
        console.log("------*EXECUTED ONCE*------")
    }
}

playGame()

if (humanScore > computerScore) {
    console.log("Humans reign supreme !")
    console.log(`Computer - ${computerScore} || Human - ${humanScore}`)
} 
else {
    console.log("The future will be robots !")
    console.log(`Computer - ${computerScore} || Human - ${humanScore}`)
}
