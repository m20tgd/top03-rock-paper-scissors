//Declare variables for player and computer score and set to 0.
let playerScore = 0;
let computerScore = 0;
//Declare variables to store the player and computer selections
let playerSelection;
let computerSelection;


//Assign DOM elements to variables
const score = document.querySelector('.score');
const display = document.querySelector('.display');
const inputButtons = document.querySelectorAll('.inputButton');
const rBtn = document.querySelector('#rockButton');
const pBtn = document.querySelector('#paperButton');
const sBtn = document.querySelector('#scissorsButton');
const resetBtn = document.querySelector('.reset-button');
//Add event listeners to input buttons so a round is played when one is selected with the 
//correct numerical input for the selection (0 for Rock, 1 for Paper and 2 for Scissors)
rBtn.addEventListener("click", () => playRound(0));
pBtn.addEventListener("click", () => playRound(1));
sBtn.addEventListener("click", () => playRound(2));
//Add event listener to Reset button so the game is reset if it is pressed
resetBtn.addEventListener("click", resetGame);
    
//Create a function to play 5 rounds of Rock Paper Scissors
function playRound(playerChoice){
        playerSelection = playerChoice;
        //Randomly select computer's choice
        computerSelection = computerChoice();
        //Compare choices and establish win/lose/draw
        let victory = establishWinner(playerSelection, computerSelection);
        //Update scores and announce round result
        roundResult(victory);
        //If player or computer reach 5 points, then call endGame
        if (playerScore >= 5 || computerScore >= 5) endGame();
}

//Create a function to randomly make a selection for the computer
function computerChoice(){
    // Randomly select a number between 0-2 and return
    return num = Math.floor(Math.random()*3); //0 = Rock, 1 = Paper, 2 = Scissors
}

//Create a function to receive the player and computer choices and establish the outcome.
//Returns True for player victory, False for computer victory and Null for draw
function establishWinner(playerSelection, computerSelection){

    //Return null as a draw if the computer and player selections are the same
    if (playerSelection === computerSelection){
        return null; //Draw
    }
    else{
    //Otherwise switch through the playerSelections and compare them to the computerSelection. Return
    //true for victory and false for defeat.
        switch (playerSelection){
            case 0 : //Rock
                return (computerSelection === 2) ? true : false;
            case 1 : //Paper
            return (computerSelection === 1) ? true : false;
            case 2 : //Scissors
            return (computerSelection === 0) ? true : false;
            default:
                console.log(playerSelection + " " + computerSelection);
                console.log("Something has gone wrong with checking for victory");
                debugger;
        }
    }
}

function roundResult(victory){
    //If victory is null, then announce a draw and don't alter the scores
    if (victory === null){
            display.innerText = "This round was a draw";
        }
        //Otherwise check to for victory, update score and announce result.
        else {
            if (victory){
                playerScore++;
                display.innerText = `You won this round! ${getSelectionString(playerSelection)} beats ${getSelectionString(computerSelection)}.`;
            }
            else {
                computerScore++;
                display.innerText = `You lost this round! ${getSelectionString(computerSelection)} beats ${getSelectionString(playerSelection)}.`;
            }
            //Update the score display with the new scores
            updateScore();
        }
}

//Create a function to update the score display
function updateScore(){
    score.innerText = `Player - ${playerScore} Computer - ${computerScore}`
}

//Create a function to return a string of the name of the selection from the number that represents it.
function getSelectionString(choice){
    switch(choice){
        case 0 : return "Rock";
        case 1 : return "Paper";
        case 2 : return "Scissors";
        default : console.log("Something went wrong with getSelectionString");
    }
}

//Create a function to end the game, display the results and disable buttons to 
//prevent further rounds.
function endGame(){
    //Iterate through all the input buttons to disable them all
    inputButtons.forEach(button => button.disabled = true);
    //Display the final outcome
    display.innerText = (playerScore > computerScore) ? "YOU WIN!" : "YOU LOSE!";
}

//Create a functions to reset the game. This is called by the Reset button
function resetGame(){
    //Reset the scores
    playerScore = 0
    computerScore = 0
    updateScore();
    //Reset the display text
    display.innerText = "Please make your choice."
    //Enable the input buttons
    inputButtons.forEach(button => button.disabled = false);
}