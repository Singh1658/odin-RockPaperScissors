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



function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    const tieMessage = document.querySelector('#tieMessage'); // Select the tie message element

    

    if (humanChoice === computerChoice) {
        tieMessage.textContent = `It's a Tie. Both Chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        tieMessage.textContent = "";
        humanScore++;
        
        //console.log("You win this round! " + humanChoice + " beats " + computerChoice);
    } else {
        tieMessage.textContent = "";
        computerScore++;
        //console.log("You lose this round! " + computerChoice + " beats " + humanChoice);
    }
    if (humanScore == 5) {
        alert("Congratulations! You won the game!");
    }
    if (computerScore == 5) {
        alert("You lost the game. Better luck next time!");
    }
}


    


function playGame() {
    humanScore = 0;  // Reset scores at the start of each game
    computerScore = 0;
    const buttons = document.querySelectorAll("button");
    const humanScoreDisplay = document.querySelector('#HumanScore');
    const computerScoreDisplay = document.querySelector('#ComputerScore');

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            
            const humanSelection = button.id;
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
            humanScoreDisplay.textContent = "Human Score: " + humanScore;
            computerScoreDisplay.textContent = "Computer Score: " + computerScore;
                                    
        }); 
    })  

    
}

playGame();






