//Declare variables for player and computer score and set to 0.
let playerScore = 0;
let computerScore = 0;
//Declare variables to store the player and computer selections
let playerSelection;
let computerSelection;

//Calculate who won and update console log with result
//gameResult(playerScore, computerScore);

//Add event listeners to buttons so a round is played when one is selected with the 
//correct numerical input for the selection (0 for Rock, 1 for Paper and 2 for Scissors)
const rBtn = document.querySelector('#rockButton');
const pBtn = document.querySelector('#paperButton');
const sBtn = document.querySelector('#scissorsButton');
rBtn.addEventListener("click", () => playRound(0));
pBtn.addEventListener("click", () => playRound(1));
sBtn.addEventListener("click", () => playRound(2));
    
//Create a function to play 5 rounds of Rock Paper Scissors
function playRound(playerChoice){
        //Get input from the player
        playerSelection = playerChoice;
        //Randomly select computer's choice
        computerSelection = computerChoice();
        //Compare choices and establish win/lose/draw
        let victory = establishWinner(playerSelection, computerSelection);
        //Update scores and announce round result
        roundResult(victory);
}

// //Create a function that is called when a player makes their choice by clicking the 
// //Rock, Paper or Scissors buttons. 
// function playerChoice(choice){
//     //Switch string input obtained from the player and return 0 for 'rock', 1 for 'paper' 
//     //and 2 for 'scissors' to represent choice
//     switch (choice){
//         case "rock" : playRound(0);
//         case "paper" : playRound(1);
//         case "scissors" : playRound(2);
//     }
// }

//Create a function to randomly make a selection for the computer
function computerChoice(){
    // Randomly select a number between 0-2 and return
    return num = Math.floor(Math.random()*3); //0 = Rock, 1 = Paper, 2 = Scissors
}

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

//Create a function to get valid input from the player
function getValidInput(){
    //Get input from player and loop until valid choice provided
    while (true){
        input = prompt("Choose your weapon: \n Rock, Paper or Scissors?", "rock");
        if (input != null){ //If player pressed cancel and input is null, then skip
            //Change to all lower case for validation checks
            input = input.toLowerCase();
            //Check for valid entry and break out of loop if valid
            if (input === "rock" || input === "paper" || input === "scissors"){
                return input;
            }
        }
        //If entry is not valid then alert message sent before the loop starts again
        alert("Invalid choice. \n Please try again");
    }
}

function roundResult(victory){
    //If victory is null, then announce a draw and don't alter the scores
    if (victory === null){
            console.log("This round was a draw.");
        }
        //Otherwise check to for victory, update score and announce result.
        else {
            if (victory){
                playerScore++;
                console.log(`You won this round! ${getSelectionString(playerSelection)} beats ${getSelectionString(computerSelection)}.`)
            }
            else {
                computerScore++;
                console.log(`You lost this round! ${getSelectionString(computerSelection)} beats ${getSelectionString(playerSelection)}.`)
            }
        }
}

//Create function to announce overall winner of the game
function gameResult(playerScore, computerScore){
    if (playerScore > computerScore){ //Player victory
        console.log(`Congratulations, you are the victor! \n You: ${playerScore} \n Computer: ${computerScore}`);
    }
    else if (playerScore < computerScore){ //Computer victory
        console.log(`Commiserations, you were beaten by a machine! \n You: ${playerScore} \n Computer: ${computerScore}`);
    }
    else{ //Draw
        console.log(`It was a draw! What a waste of time. \n You: ${playerScore} \n Computer: ${computerScore}`);
    }
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