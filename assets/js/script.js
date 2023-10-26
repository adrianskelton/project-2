//global variables
let userScore = 0;
let computerScore = 0;
let userRoundswon = 0;
let computerRoundswon = 0;
let userTotalscore = 0;
let gamePaused = false;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
//const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const computerRound = document.getElementById("computer-roundswon");
const userRound = document.getElementById("user-roundswon");
const playLoseaudio = document.getElementById("pcwin_audio");
const playWinaudio = document.getElementById("userwin_audio");
const makeChoiceParagraph = document.getElementById("make-choice");



//update lightning bolts
let currentLightning = 0;
let currentLightningPc = 0;
let lightningPlayer = document.getElementById("lightningplayer");
let lightningPc = document.getElementById("lightningcomputer");
const lightningScore = document.getElementById("myBtn");




//eventlisteners
lightningScore.addEventListener("click", updateLightning);
document.getElementById("restart").addEventListener("click", hardReloadgame);
document.getElementById("youWinClose").addEventListener("click", hardReloadgame);
document.getElementById("youLoseClose").addEventListener("click", hardReloadgame);



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
    document.getElementById("");
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
    document.getElementById("lightningplayer").src =
        "assets/images/lightning0.png";
    document.getElementById("lightningcomputer").src =
        "assets/images/lightning0.png";
    document.getElementById("playerimg").src = "assets/images/question.png";
    document.getElementById("computerimg").src =
        "assets/images/questionreverse.png";
    document.getElementById("middleImg").src = "assets/images/facestart.png";
    document.getElementById("whowontext").innerHTML =
        "Lets play rock paper scissors!";
    userScore = 0;
    computerScore = 0;
    userRoundswon = 0;
    computerRoundswon = 0;
}

//my function to change text if user wins round
function playerWinMesssage() {
    let message = "Congratulations you win the round!!";
    makeChoiceParagraph.textContent = message;
}

//my function to change text if computer wins round
function pcWinMesssage() {
    let message = "ARG!! You lost the round, better luck next time!!";
    makeChoiceParagraph.textContent = message;
}



//my function to change the lightning images based on the players score
function updateLightning() {
    changeLightning();
    changeLightningPc();
    lightningPlayer.src = `assets/images/lightning${currentLightning}.png`;
    lightningPc.src = `assets/images/lightning${currentLightningPc}.png`;
    winGame();
    winRounds();
}

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNumber];
    pcChoiceImg(computerChoice);
    return choices[randomNumber];
}



// My function that gets the computers choice and updates the image.
function pcChoiceImg(choice) {
    if (choice === "r") {
        document.getElementById("computerimg").src = "assets/images/rock.png";
    } else if (choice === "p") {
        document.getElementById("computerimg").src = "assets/images/paper.png";
    } else {
        document.getElementById("computerimg").src = "assets/images/scissors.png";
    }
}

// convert the letters to words

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

//function to get the outcome of the game based on users choice and computers choice

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
    // my gamePaused condition to pause game scoring and lightning when round is won
    {
        rock_div.addEventListener("click", function () {
            if (!gamePaused) {
                game("r");
                document.getElementById("playerimg").src = "assets/images/rock.png";
                updateLightning();
            }
        });

        paper_div.addEventListener("click", function () {
            if (!gamePaused) {
                game("p");
                document.getElementById("playerimg").src = "assets/images/paper.png";
                updateLightning();
            }
        });

        scissors_div.addEventListener("click", function () {
            if (!gamePaused) {
                game("s");
                document.getElementById("playerimg").src = "assets/images/scissors.png";
                updateLightning();
            }
        });
    }
}

//function to change the lightning image to reflect the user score

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
    }
    return currentLightning;
}
//function to change the lightning image to reflect the computer score

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
    }
    return currentLightningPc;
}

//function that stops the game when someone gets to 5 points and prompts an alert.
function winGame() {
    if (userScore === 5) {
        currentLightning = 5;
        changeLightning();
        playerWinMesssage();
        userRoundswon++;
        userRound.innerHTML = userRoundswon;
        playWinaudio.play();
        message = "Congatulations you win the round!";
        //disable rock, paper, scissor button clicks
        gamePaused = true;
        //makeChoiceParagraph.textContent = message;

    } else if (computerScore === 5) {
        currentLightningPc = 5;
        changeLightningPc();
        pcWinMesssage();
        computerRoundswon++;
        computerRound.innerHTML = computerRoundswon;
        playLoseaudio.play();
        message = "Better luck next time pc wins this round!";
        makeChoiceParagraph.textContent = message;
        //disable rock, paper, scissor button clicks
        gamePaused = true;
    } else {
        return;
    }
}


//Function that stops the game when someone wins 5 rounds and prompts an alert.
function winRounds() {
    if (userRoundswon == 5) {
        userRound.innerHTML = userRoundswon;
        playWinaudio.play();
        $("#youWinModal").modal("show");
    } else if (computerRoundswon == 5) {
        computerRound.innerHTML = computerRoundswon;
        playLoseaudio.play();
        $("#youLoseModal").modal("show");
    } else {
        return;
    }
}

//audiomute function
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the audio elements and the button
    var audio1 = document.getElementById("pcwin_audio");
    var audio2 = document.getElementById("userwin_audio");
    var soundOnOff = document.getElementById("soundOnOff");

    // Initialize the mute state
    var isMuted = false;

    // Add click event listener to the toggle button
    soundOnOff.addEventListener("click", function () {
        // Toggle the mute state
        isMuted = !isMuted;

        // Update the button text based on the mute state
        if (isMuted) {
            audio1.muted = true;
            audio2.muted = true;
            soundOnOff.textContent = "Turn Sound ON";
        } else {
            audio1.muted = false;
            audio2.muted = false;
            soundOnOff.textContent = "Turn Sound OFF";
        }
    });
});

main();
