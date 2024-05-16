const rbtn = document.querySelector(".rock")
const pbtn = document.querySelector(".paper")
const sbtn = document.querySelector(".scissors")

const panel = document.querySelector("h3.panel")
const scoreboard = document.querySelector("h2.scoreboard")
const commentary = document.querySelector("h4.commentary")

let computerChoice = ""
let humanScore = 0, computerScore = 0

rbtn.addEventListener("click", () => {
    computerChoice = getComputerChoice()
    playRound(computerChoice, "rock")
    commentary.textContent = `Human chose ${"rock".toUpperCase()} and Computer chose ${computerChoice.toUpperCase()}`
})

pbtn.addEventListener("click", () => {
    computerChoice = getComputerChoice()
    playRound(computerChoice, "paper")
    commentary.textContent = `Human chose ${"paper".toUpperCase()} and Computer chose ${computerChoice.toUpperCase()}`
})

sbtn.addEventListener("click", () => {
    computerChoice = getComputerChoice()
    playRound(computerChoice, "scissors")
    commentary.textContent = `Human chose ${"scissors".toUpperCase()} and Computer chose ${computerChoice.toUpperCase()}`
})


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

function playRound(computerSelection, humanSelection) {

    if (computerSelection === humanSelection) {
        panel.textContent = "DRAW ! IT'S GETTING INTENSE !!!"
    } 

    else if(computerSelection == "rock") {
         if(humanSelection == "paper"){
            ++humanScore;
            panel.textContent = "HUMAN SCORES !"
         } else {
            ++computerScore;
            panel.textContent = "COMPUTER SCORES !"
         }
    } 
    
    else if(computerSelection == "paper") {
        if(humanSelection == "scissors"){
           ++humanScore;
           panel.textContent = "HUMAN SCORES !"
        } else {
           ++computerScore;
           panel.textContent = "COMPUTER SCORES !"
        }
    }
    
    else if(computerSelection == "scissors") {
        if(humanSelection == "rock"){
           ++humanScore;
           panel.textContent = "HUMAN SCORES !"
        } else {
           ++computerScore;
           panel.textContent = "COMPUTER SCORES !"
        }
    }

    scoreboard.textContent = `Computer - ${computerScore} || Human - ${humanScore}`
    if (humanScore == 5) {
        panel.textContent = "MASTERS OF MANKIND , FEARED BY THE GODS !"
    } else if (computerScore == 5) {
        panel.textContent = "OVERWHELMING THEIR CREATORS, A GREAT UTOPIA AWAITS !"
    }
}
