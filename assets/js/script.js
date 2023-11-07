//global variables
let userScore = 0;
let computerScore = 0;
let userRoundswon = 0;
let computerRoundswon = 0;
let gamePaused = false;
let quitMessageRun = false;
let gameMode = "single"; // "single" is one round, "bestOfFive" for best of five rounds
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const computerRound = document.getElementById("computer-roundswon");
const userRound = document.getElementById("user-roundswon");
const playLoseaudio = document.getElementById("pcwin_audio");
const playWinaudio = document.getElementById("userwin_audio");
const makeChoice = document.getElementById("make-choice");
const makeChoiceParagraph = document.getElementById("whowontext");
const oneRoundButton = document.getElementById("one-round-game");
const fiveRoundsButton = document.getElementById("best-of-five");

window.onload = loadedAtStart;

function loadedAtStart() {
    document.querySelectorAll("#quit, #play-again").forEach(function (element) {
        element.style.display = "none";
    });
}

// add event listeners for game mode buttons
oneRoundButton.addEventListener("click", () => {
    gameMode = "single";
    resetGame();
});

fiveRoundsButton.addEventListener("click", () => {
    gameMode = "bestOfFive";
    resetGame();
});

// Function to reset game for chosen game mode
function resetGame() {
    gamePaused = false;
    disableChoices(false);
    document.querySelectorAll("#quit, #play-again").forEach(function (element) {
        element.style.display = "none";
    });
    userScore = 0;
    computerScore = 0;
    userRoundswon = 0;
    computerRoundswon = 0;
    userRound.innerHTML = userRoundswon;
    computerRound.innerHTML = computerRoundswon;
    makeChoice.style.display = "block"; // Show the make choice paragraph

    // Reset specific elements
    document.getElementById("lightningplayer").src = "assets/images/lightning0.png";
    document.getElementById("lightningcomputer").src = "assets/images/lightning0.png";
    document.getElementById("playerimg").src = "assets/images/question.png";
    document.getElementById("computerimg").src = "assets/images/questionreverse.png";
    document.getElementById("middleImg").src = "assets/images/facestart.png";
    makeChoiceParagraph.innerHTML = "Let's play rock paper scissors!";
}


// makes sure googleEyes animation is loaded and not affected by lazyload
document.addEventListener("DOMContentLoaded", function () {
    googleEyes();
});

// update lightning bolts
let currentLightning = 0;
let currentLightningPc = 0;
let lightningPlayer = document.getElementById("lightningplayer");
let lightningPc = document.getElementById("lightningcomputer");
const lightningScore = document.getElementById("myBtn");

// eventlisteners
lightningScore.addEventListener("click", updateLightning);
document.getElementById("restart").addEventListener("click", hardReloadgame);
document.getElementById("play-again").addEventListener("click", hardReloadgame);
document.getElementById("quit").addEventListener("click", quitMessage);

// my function to hide the game section with a thanks for playing message
function quitMessage() {
    quitMessageRun = true;
    const mainGameSection = document.getElementById("game-contain");
    if (mainGameSection) {
        while (mainGameSection.firstChild) {
            mainGameSection.removeChild(mainGameSection.firstChild);
        }

        // hide make choice element
        makeChoice.style.display = "none";

        // insert this message instead
        const thanksMessage = document.createElement("div");
        thanksMessage.innerHTML =
            "<p class='thanks-message'>Thanks for playing! Click restart game if you want to play again.</center></p>";
        mainGameSection.appendChild(thanksMessage);
    }
}

// my function to disable rock paper scissors buttons when round is won

function disableChoices(disabled) {
    rock_div.disabled = true;
    paper_div.disabled = true;
    scissors_div.disabled = true;
}

// my function to reset the rounds and the game;
function hardReloadgame() {
    if (quitMessageRun) {
        location.reload();
    } else {
        gamePaused = false;
        disableChoices(false);
        document.querySelectorAll("#quit, #play-again").forEach(function (element) {
            element.style.display = "none";
        });

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
}

// my function to change text if user wins round
function playerWinMesssage() {
    let message = "Congratulations you win the round!!";
    makeChoiceParagraph.textContent = message;
}

// my function to change text if computer wins round
function pcWinMesssage() {
    let message = "ARG!! You lost the round, better luck next time!!";
    makeChoiceParagraph.textContent = message;
}

// my function to change the lightning images based on the players score
function updateLightning() {
    checkResult();
    changeLightning();
    changeLightningPc();
    lightningPlayer.src = `assets/images/lightning${currentLightning}.png`;
    lightningPc.src = `assets/images/lightning${currentLightningPc}.png`;
    winGame();
    //winRounds();
}

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNumber];
    pcChoiceImg(computerChoice);
    return choices[randomNumber];
}

// my function that gets the computers choice and updates the image.
function pcChoiceImg(choice) {
    if (choice === "r") {
        document.getElementById("computerimg").src = "assets/images/rock.png";
    } else if (choice === "p") {
        document.getElementById("computerimg").src = "assets/images/paper.png";
    } else {
        document.getElementById("computerimg").src = "assets/images/scissors.png";
    }
}

// my googley eye function for animation of girls eyes when game ends
function googleEyes() {
    const middleImg = document.getElementById("middleImg");
    const quitbutton = document.getElementById("quit");
    const replaybutton = document.getElementById("play-again");

    if (gamePaused) {
        makeChoice.style.display = "none"; //hide make choice paragraph
    }

    if (gamePaused) {
        document.getElementById("middleImg").src =
            "assets/images/face_googleyes_reset.png";
    }

    quitbutton.addEventListener("mouseover", function () {
        if (gamePaused) {
            middleImg.src = "assets/images/face_googleyes_quit.png";
        }
    });

    quitbutton.addEventListener("mouseout", function () {
        if (gamePaused) {
            middleImg.src = "assets/images/face_googleyes_reset.png";
        }
    });
    replaybutton.addEventListener("mouseover", function () {
        if (gamePaused) {
            middleImg.src = "assets/images/face_googleyes_play.png";
        }
    });

    replaybutton.addEventListener("mouseout", function () {
        if (gamePaused) {
            middleImg.src = "assets/images/face_googleyes_reset.png";
        }
    });
}

// modified word to letter code from tutorial

function convertToWord(letter) {
    const wordDictionary = {
        r: "Rock",
        p: "Paper",
        s: "Scissors",
    };

    return wordDictionary[letter] || "Invalid Choice";
}

// function if user wins
function win(userChoice, computerChoice) {
    userScore++;
    //girls face changes to a sad face when computer wins
    document.getElementById("middleImg").src = "assets/images/facewin.png";
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(
        computerChoice
    )}. You win! `;
}

// function if computer wins
function lose(userChoice, computerChoice) {
    computerScore++;
    //girls face changes to a sad face when computer wins
    document.getElementById("middleImg").src = "assets/images/facehand.png";
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(
        computerChoice
    )}. You lost! `;
}

// function if it's a draw
function draw(userChoice, computerChoice) {
    //girls face changes to a sad face when a draw
    document.getElementById("middleImg").src = "assets/images/facedraw.png";
    result_p.innerHTML = `${convertToWord(userChoice)} draws with ${convertToWord(
        computerChoice
    )}. Its a draw `;
}

// function to get the outcome of the game based on users choice and computers choice

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

// Function to check and display the result
function checkResult() {
    if (userScore === 5) {
        showResult("You win the game!");
    } else if (computerScore === 5) {
        showResult("Computer wins the game, better luck next time!");
    }
}

// Function to show game result
function showResult(resultMessage) {
    makeChoiceParagraph.textContent = resultMessage;
    gamePaused = true;
    disableChoices(true);
    document.querySelectorAll("#quit, #play-again").forEach(function (element) {
        element.style.display = "block";
    });
}

// event listener for choices of rock paper scissor icons and also added code to change the player image choice

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

// my function to change the lightning image to reflect the user score

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
// my function to change the lightning image to reflect the computer score

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

// function that stops the game when someone gets to 5 points and prompts an alert.
function winGame() {
    if (gameMode === "single") {
        // For single round mode
        if (userScore === 5 || computerScore === 5) {
            showResult();
        }
    } else if (gameMode === "bestOfFive") {
        // For best of five rounds mode
        if (userRoundswon === 3 || computerRoundswon === 3) {
            showResult();
        }
    }

}


if (userScore === 5) {
    document.querySelectorAll("#quit, #play-again").forEach(function (element) {
        element.style.display = "block";
    });
    gamePaused = true;
    playWinaudio.play();
    currentLightning = 5;
    changeLightning();
    playerWinMesssage();
    disableChoices(true);
    userRoundswon++;
    userRound.innerHTML = userRoundswon;
    googleEyes();

    //makeChoiceParagraph.textContent = message;
} else if (computerScore === 5) {
    document.querySelectorAll("#quit, #play-again").forEach(function (element) {
        element.style.display = "block";
    });
    gamePaused = true;
    currentLightningPc = 5;
    changeLightningPc();
    playLoseaudio.play();
    pcWinMesssage();
    disableChoices(true);
    computerRoundswon++;
    computerRound.innerHTML = computerRoundswon;
    googleEyes();
}

// function to show game result
function showResult() {
    if (userScore > computerScore) {
        makeChoiceParagraph.textContent = "You win the game!";
    } else if (userScore < computerScore) {
        makeChoiceParagraph.textContent = "Computer wins the game, better luck next time!";
    } else if (userScore === computerScore) {
        makeChoiceParagraph.textContent = "It's a tie!";
    }
    gamePaused = true;
    disableChoices(true);
    document.querySelectorAll("#quit, #play-again").forEach(function (element) {
        element.style.display = "block";
    });
}


// audiomute function
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the audio elements and the button
    var audio1 = document.getElementById("pcwin_audio");
    var audio2 = document.getElementById("userwin_audio");
    var soundOnOff = document.getElementById("soundOnOff");

    // initialize the mute state
    var isMuted = false;

    // add click event listener to the toggle button
    soundOnOff.addEventListener("click", function () {
        // Toggle the mute state
        isMuted = !isMuted;

        // update the button text based on the mute state
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

$(document).ready(function () {
    $("#rulesOnlyModal").modal("show");
});

main();