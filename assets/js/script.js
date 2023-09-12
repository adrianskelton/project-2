//global variables
let userScore = 0;
let computerScore = 0;
let userRoundswon = 0;
let computerRoundswon = 0;
let userTotalscore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const computerRound = document.getElementById("computer-roundswon");
const userRound = document.getElementById("user-roundswon");

const playLoseaudio = document.getElementById("pcwin_audio");
const playWinaudio = document.getElementById("userwin_audio");


//update lightning bolts
let currentLightning = 0;
let currentLightningPc = 0;
let lightningscoreplayer = document.getElementById("user-score");
let lightningscorecomputer = document.getElementById("computer-score");
let lightningPlayer = document.getElementById("lightningplayer");
let lightningPc = document.getElementById("lightningcomputer");
let leaderboardModalcontent = document.getElementById("leaderboardscore");
const lightningScore = document.getElementById("myBtn");
const addName = document.getElementById("closeModal");
const soundToggle = document.getElementById("soundonoff");
const soundButtonChange = document.getElementsByClassName(".audio");


//eventlisteners
lightningScore.addEventListener("click", updateLightning);
soundToggle.addEventListener("click", muteAudio);
document.getElementById("restart").addEventListener("click", hardReloadgame);
document.getElementById("highscoreclose").addEventListener("click", hardReloadgame);
addName.addEventListener("click", nameToCookies);

//modal hide by default
$(document).ready(function () {
    $("#highscoremodal").modal("hide"), $("#welcomeplayer").modal("hide");
});

//function to toggle audio on or off;
function muteAudio() {
    soundButtonChange.innerText = "Sound Off";
    soundButtonChange = document.getElementById("soundonoff");
    alert(soundGroup.muted);
}


//Add player name to cookie function
function nameToCookies() {
    let playerName = document.getElementById("username").value;
    sessionStorage.setItem("name", playerName);
    playerNameDisplay = document.getElementById("theplayersname");
    playerNameDisplay = document.getElementById("user-name");
    $("#rulesModal").modal("show");
    playerNameDisplay.innerText = playerName;
}

// My function to restart the game when clicked resets all images and scores to default
function reloadGame() {
    document.getElementById("user-score").innerText = 0;
    document.getElementById("computer-score").innerText = 0;
    document.getElementById("lightningplayer").src =
        "assets/images/lightning0.png";
    document.getElementById("lightningcomputer").src =
        "assets/images/lightning0.png";
    document.getElementById("playerimg").src = "assets/images/question.png";
    document.getElementById("computerimg").src =
        "assets/images/questionreverse.png";
    document.getElementById("middleImg").src = "assets/images/facestart.png";
    userScore = 0;
    computerScore = 0;
}

//my function to reset the rounds and the game
function hardReloadgame() {
    document.getElementById("user-score").innerText = 0;
    document.getElementById("computer-score").innerText = 0;
    document.getElementById("user-roundswon").innerText = 0;
    document.getElementById("computer-roundswon").innerText = 0;
    document.getElementById("lightningplayer").src =
        "assets/images/lightning0.png";
    document.getElementById("lightningcomputer").src =
        "assets/images/lightning0.png";
    document.getElementById("playerimg").src = "assets/images/question.png";
    document.getElementById("computerimg").src =
        "assets/images/questionreverse.png";
    document.getElementById("middleImg").src = "assets/images/facestart.png";
    document.getElementById("whowontext").innerHTML =
        "First to 5 lightning bolts wins!";
    userScore = 0;
    computerScore = 0;
    userRoundswon = 0;
    computerRoundswon = 0;
}

//my function to change the lightning images based on the players score
function updateLightning() {
    changeLightning();
    changeLightningPc();
    lightningPlayer.src = `assets/images/lightning${currentLightning}.png`;
    lightningPc.src = `assets/images/lightning${currentLightningPc}.png`;
    console.log("playerlightning" + currentLightning);
    console.log("pclightning" + currentLightningPc);
    winGame();
    winRounds();
    console.log(`User score is ${userScore}`);
}

function getComputerChoice() {
    const choices = ["r", "p", "s"];
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
    userTotalscore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //girls face changes to a sad face when computer wins
    document.getElementById("middleImg").src = "assets/images/facewin.png";
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(
        computerChoice
    )}. You win! `;
}

//function if computer wins
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //girls face changes to a sad face when computer wins
    document.getElementById("middleImg").src = "assets/images/facehand.png";

    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(
        computerChoice
    )}. You lost! `;
}

//function if it's a draw
function draw(userChoice, computerChoice) {
    //girls face changes to a sad face when a draw
    document.getElementById("middleImg").src = "assets/images/facedraw.png";
    result_p.innerHTML = `${convertToWord(userChoice)} draws with ${convertToWord(
        computerChoice
    )}. Its a draw `;
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
    rock_div.addEventListener("click", function () {
        game("r");
        document.getElementById("playerimg").src = "assets/images/rock.png";
        updateLightning();
    });

    paper_div.addEventListener("click", function () {
        game("p");
        document.getElementById("playerimg").src = "assets/images/paper.png";
        updateLightning();
    });

    scissors_div.addEventListener("click", function () {
        game("s");
        document.getElementById("playerimg").src = "assets/images/scissors.png";
        updateLightning();
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
            console.log("defaultswitchcase");
    }
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
            console.log("defaultswitchcasePc");
    }
    return currentLightningPc;
}

//Function that stops the game when someone gets to 5 points and prompts an alert.
function winGame() {
    if (userScore == 5) {
        currentLightning = 5;
        userRoundswon++;
        userRound.innerHTML = userRoundswon;
        playWinaudio.play();
        console.log("user-round");
        window.alert("You Win");
        reloadGame();
        //function reloadGame();
    } else if (computerScore == 5) {
        currentLightningPc = 5;
        computerRoundswon++;
        computerRound.innerHTML = computerRoundswon;
        playLoseaudio.play();
        console.log("computer-round");
        window.alert("Computer Wins");
        reloadGame();
        //function reloadGame();
    } else {
        return;
    }
}

//Function that stops the game when someone wins 5 rounds and prompts an alert.
function winRounds() {
    if (userRoundswon == 2) {
        userRound.innerHTML = userRoundswon;
        console.log("user-WINS EVERYTHING");
        playWinaudio.play();
        $("#highscoremodal").modal("show");
    } else if (computerRoundswon == 2) {
        computerRound.innerHTML = computerRoundswon;
        playLoseaudio.play();
        console.log("COMPUTERWINS");
        $("#highscoremodal").modal("show");
    } else {
        return;
    }
}

main();
