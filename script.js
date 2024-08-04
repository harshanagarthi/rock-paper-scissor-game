let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreUpdate = document.querySelector("#user-score");
const compScoreUpdate = document.querySelector("#comp-score");



const playGame = (userChoice) => {
    console.log("User choice : ", userChoice);
    const computerChoice = getComputerChoice();
    console.log("Computer choice : ", computerChoice);

    if (userChoice === computerChoice) {
        draw();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice == "paper") {
            userWin = computerChoice == "scissor" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;

        }
        showWinner(userWin, userChoice, computerChoice);
    }
    
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        console.log("You win");
        msg.innerText = `You win, your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
        userScore+=1;
        userScoreUpdate.innerText = userScore;

    } else {
        console.log("You loose");
        msg.innerText = `You loose, ${userChoice} beats your ${computerChoice}`;
        msg.style.backgroundColor = "red";
        compScore+=1;
        compScoreUpdate.innerText = compScore;
    }
}

const draw = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw, play again";
    msg.style.backgroundColor = "black";
}



const getComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const ranIndx = Math.floor(Math.random() * 3);
    return options[ranIndx];
     
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        // console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    });
});