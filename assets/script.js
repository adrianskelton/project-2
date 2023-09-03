//global variables
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");



//update lightning bolts
let currentLightning = 0;
let currentLightningPc = 0;
let lightningscoreplayer = document.getElementById("user-score");
let lightningscorecomputer = document.getElementById("computer-score");
let lightningPlayer = document.getElementById("lightningplayer");
let lightningPc = document.getElementById("lightningcomputer");
const lightningScore = document.getElementById("myBtn");
const addName = document.getElementById("closeModal");

//eventlisteners
lightningScore.addEventListener("click", myFunction1);
document.getElementById("restart").addEventListener("click", reloadGame);
addName.addEventListener("click", nameToCookies);

$(document).ready(function () {
    $("#exampleModal").modal('show');
});

//Add player name to cookie function
function nameToCookies() {
    let playerName = document.getElementById("username").value;
    sessionStorage.setItem("name", playerName);
    window.alert("Welcome" + " " + playerName);
    playerNameDisplay = document.getElementById("user-name");
    playerNameDisplay.innerText = playerName;
}


//my function to change the lightning images based on the players score
function myFunction1() {
    changeLightning();
    changeLightningPc();
    winGame();
    lightningplayer.src = `assets/images/lightning${currentLightning}.png`;
    lightningPc.src = `assets/images/lightning${currentLightningPc}.png`;
    console.log(currentLightning);
    console.log(`User score is ${userScore}`);
}

// My function to restart the game when clicked resets all images and scores to default
function reloadGame() {
    document.getElementById("lightningplayer").src = "assets/images/lightning0.png";
    document.getElementById("lightningcomputer").src = "assets/images/lightning0.png";
    document.getElementById("playerimg").src = "assets/images/question.png";
    document.getElementById("computerimg").src = "assets/images/questionreverse.png";
    document.getElementById("middleimage").src = "assets/images/facestart.png";

    document.getElementById("user-score").innerText = "0";
    document.getElementById("computer-score").innerText = "0";
    userScore = 0;
    computerScore = 0;
}


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNumber];
    const playerChoice = choices[randomNumber];
    console.log("pc choice =" + choices[randomNumber]);
    pcChoiceImg(computerChoice);
    return choices[randomNumber];
}

// My function that gets the computers choice and updates the image.
function pcChoiceImg(choice) {
    if (choice === "r") {
        document.getElementById("computerimg").src = "assets/images/rock.png";
        console.log("PcChoiceImg is set to" + " " + choice);
    } else if (choice === "p") {
        document.getElementById("computerimg").src = "assets/images/paper.png";
        console.log("PcChoiceImg is set to" + " " + choice);
    } else {
        document.getElementById("computerimg").src = "assets/images/scissors.png";
        console.log("PcChoiceImg is set to" + " " + choice);
    }
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

//function if user wins
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //girls face changes to a sad face when computer wins
    document.getElementById("middleImg").src = "assets/images/facewin.png";
    const smallUserWord = "user";
    const smallCompWord = "comp";
    //the old result... result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win! `;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win! `;
}

//function if computer wins
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //girls face changes to a sad face when computer wins
    document.getElementById("middleImg").src = "assets/images/facehand.png";
    const smallUserWord = "user";
    const smallCompWord = "comp";
    //old way... result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost! `;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost! `;
}

//function if it's a draw
function draw(userChoice, computerChoice) {
    const smallUserWord = "user";
    const smallCompWord = "comp";
    //girls face changes to a sad face when a draw
    document.getElementById("middleImg").src = "assets/images/facedraw.png";
    //old way result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} draws with ${convertToWord(computerChoice)}${smallCompWord}. Its a draw `;
    result_p.innerHTML = `${convertToWord(userChoice)} draws with ${convertToWord(computerChoice)}. Its a draw `;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

//Event listener for choices of rock paper scissor icons and also added code to change the player image choice

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
        document.getElementById("playerimg").src = "assets/images/rock.png";
        myFunction1();
    });

    paper_div.addEventListener('click', function () {
        game("p");
        document.getElementById("playerimg").src = "assets/images/paper.png";
        myFunction1();
    });

    scissors_div.addEventListener('click', function () {
        game("s");
        document.getElementById("playerimg").src = "assets/images/scissors.png";
        myFunction1();
    });
}

function changeLightning() {
    switch (userScore) {
        case 1:
            currentLightning = 1;
            break;
        case 2:
            currentLightning = 2;
            break;
        case 3:
            currentLightning = 3;
            break;
        case 4:
            currentLightning = 4;
            break;
        case 5:
            currentLightning = 5;
            break;
        default:
            currentLightning = 0;
            console.log('defaultswitchcase');
    };
    return currentLightning;
}

function changeLightningPc() {
    switch (computerScore) {
        case 1:
            currentLightningPc = 1;
            break;
        case 2:
            currentLightningPc = 2;
            break;
        case 3:
            currentLightningPc = 3;
            break;
        case 4:
            currentLightningPc = 4;
            break;
        case 5:
            currentLightningPc = 5;
            break;
        default:
            currentLightningPc = 0;
            console.log('defaultswitchcasePc');
    };
    return currentLightningPc;
}

//Function that stops the game when someone gets to 5 points and prompts an alert.
function winGame() {
    if (userScore == 5) {
        window.alert("You Win");
        location.reload();
    } else if (computerScore == 5) {
        window.alert("Computer Wins");
        location.reload();
    } else {
        return;
    }
}

main();

//show modal on load

