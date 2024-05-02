//testing testing testing
console.log("scissor paper rock game yurp")

let humanScore = 0, computerScore = 0;

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

let humanSelection = getHumanChoice()
let computerSelection = getComputerChoice()
console.log(humanSelection)
console.log(computerSelection)

function playRound(computerSelection, humanSelection) {
    if (computerSelection === humanSelection) {
        console.log("Point goes to no one!")
    } 

    else if(computerSelection == "rock") {
         if(humanSelection == "paper"){
            humanScore = ++humanScore;
            console.log("The Human Scores !")
         } else {
            computerScore = ++computerScore;
            console.log("The Computer Scores !")
         }
    } 
    
    else if(computerSelection == "paper") {
        if(humanSelection == "scissors"){
           humanScore = ++humanScore;
           console.log("The Human Scores !")
        } else {
           computerScore = ++computerScore;
           console.log("The Computer Scores !")
        }
    }
    
    else if(computerSelection == "scissors") {
        if(humanSelection == "rock"){
           humanScore = ++humanScore;
           console.log("The Human Scores !")
        } else {
           computerScore = ++computerScore;
           console.log("The Computer Scores !")
        }

    }
}

function playGame() {
    for(i = 0; i < 5; i++) {
        playRound(computerSelection, humanSelection)
    }

    if (human > getComputerChoice) {
        console.log("Humans reign supreme !")
    } 
    else {
        console.log("The future will be robots !")
    }
}
