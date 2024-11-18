let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoiceNum = Math.floor(Math.random() * 3);

    let computerChoice

    if (computerChoiceNum == 0) {
        computerChoice = 'Rock';
    } else if (computerChoiceNum == 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoiceQuest = prompt("Select Rock, Paper, or Scissors");
    return humanChoiceQuest;    
}


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        console.log("You win this round! " + humanChoice + " beats " + computerChoice);
    } else {
        computerScore++;
        console.log("You lose this round! " + computerChoice + " beats " + humanChoice);
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert("event being triggered")
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }); 
})
    


// function playGame() {
//     humanScore = 0;  // Reset scores at the start of each game
//     computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
        
//         playRound(humanSelection, computerSelection);
//         console.log(`Score after round ${i + 1}: Human - ${humanScore}, Computer - ${computerScore}`);
//     }

//     if (humanScore > computerScore) {
//         console.log("Congratulations! You won the game!");
//     } else if (computerScore > humanScore) {
//         console.log("You lost the game. Better luck next time!");
//     } else {
//         console.log("The game is a tie!");
//     }
// }

//playGame();






