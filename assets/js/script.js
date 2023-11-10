//global variables
let userScore = 0;
let computerScore = 0;
let userRoundswon = 0;
let computerRoundswon = 0;
let gamePaused = false;
let quitMessageRun = false;
let gameMode = "bestOfFive"; // "single" round feature not yet added, "bestOfFive" for best of five rounds
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const computerRound = document.getElementById("computer-Roundswon");
const userRound = document.getElementById("user-roundswon");
const playLoseaudio = document.getElementById("pcwin_audio");
const playWinaudio = document.getElementById("userwin_audio");
const makeChoice = document.getElementById("make-choice");
const makeChoiceParagraph = document.getElementById("whowontext");

window.onload = loadedAtStart;

function loadedAtStart() {
    document.querySelectorAll("#quit, #play-again").forEach(function (element) {
        element.style.display = "none";
    });
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

/**
 * My function to hide the game section and display appropriate message
 */
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

        if (userRoundswon >= 3) {
            thanksMessage.innerHTML =
            "<p class='thanks-message'>You are the ultimate winner! Click restart game if you want to play again.</center></p>";
        mainGameSection.appendChild(thanksMessage);
        }
        else if (computerRoundswon >=3) {
            thanksMessage.innerHTML =
            "<p class='thanks-message'>You ultimately lost! Click restart game if you want to play again.</center></p>";
        mainGameSection.appendChild(thanksMessage);
        }
        else
        thanksMessage.innerHTML =
            "<p class='thanks-message'>Thanks for playing! Click restart game if you want to play again.</center></p>";
        mainGameSection.appendChild(thanksMessage);
    }
}

/**
 * My function to reset the rounds and the game;
 */
 
function hardReloadgame() {
    if (quitMessageRun) {
        location.reload();
    } else {
        makeChoice.style.display = "block";
        gamePaused = false;
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
    }
}

/**
 * My function to change text if user wins round
 */
function playerWinMesssage() {
    let message = "Congratulations you win the round!!";
    makeChoiceParagraph.textContent = message;
}

/**
 * my function to change text if computer wins round
 */
function pcWinMesssage() {
    let message = "ARG!! You lost the round, better luck next time!!";
    makeChoiceParagraph.textContent = message;
}

/**
 * my function to change the lightning images based on the players score
 */
function updateLightning() {
    checkResult();
    changeLightning();
    changeLightningPc();
    lightningPlayer.src = `assets/images/lightning${currentLightning}.png`;
    lightningPc.src = `assets/images/lightning${currentLightningPc}.png`;
    winGame();
}

/**
 * 
 * function to get computer random choice
 */
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

// My googley eye function for animation of girls eyes when game ends
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

/**
 * My word to letter function
 */

function convertToWord(letter) {
    const wordDictionary = {
        r: "Rock",
        p: "Paper",
        s: "Scissors",
    };

    return wordDictionary[letter] || "Invalid Choice";
}

/**
 * Function if user wins
 */
function win(userChoice, computerChoice) {
    userScore++;
    //girls face changes to a sad face when computer wins
    document.getElementById("middleImg").src = "assets/images/facewin.png";
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(
        computerChoice
    )}. You win! `;
}

/**
 * Function if computer wins
 */
function lose(userChoice, computerChoice) {
    computerScore++;
    //girls face changes to a sad face when computer wins
    document.getElementById("middleImg").src = "assets/images/facehand.png";
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(
        computerChoice
    )}. You lost! `;
}

/**
 * Function if its a draw
 */
function draw(userChoice, computerChoice) {
    //girls face changes to a sad face when a draw
    document.getElementById("middleImg").src = "assets/images/facedraw.png";
    result_p.innerHTML = `${convertToWord(userChoice)} draws with ${convertToWord(
        computerChoice
    )}. Its a draw `;
}

/**
 * Function to get outcome of each game based on choices
 */
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

/**
 * Function to check result and display messages
 */
function checkResult() {
    if (gameMode === "bestOfFive") {
        makeChoiceParagraph.textContent = `Round ${userRoundswon + computerRoundswon + 1}`;
    }

    if (userRoundswon >= 3) {
        showResult("You are the overall winner! Click restart if you want to play again!");
        quitMessage();
    } else if (computerRoundswon >= 3) {
        showResult("Computer wins overall! Click restart if you want another go!");
        quitMessage();
    }

    if (userScore === 5) {
        userRoundswon += 1;
        playWinaudio.play();
        userRound.innerText = userRoundswon.toString();
        if (userRoundswon ===3) {
            quitMessage();
        }
        showResult("You win this round onto the next!");

    } else if (computerScore === 5) {
        computerRoundswon += 1;
        playLoseaudio.play();
        computerRound.innerText = computerRoundswon.toString();
        if (computerRoundswon ===3) {
            quitMessage();
        }
        showResult("Computer wins this round, better luck next time!");
    }

    if (userRoundswon + computerRoundswon >= 5) {
        showResult();
    }
}

/**
 *  gamePaused condition to pause game scoring and lightning when round is won
 */
function main() {
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

        if (userScore === 5) {
            document.querySelectorAll("#quit, #play-again").forEach(function (element) {
                element.style.display = "block";
            });
            userRoundswon++;
            userRound.innerHTML = userRoundswon; // Update userRound element
            gamePaused = true;
            playWinaudio.play();
            currentLightning = 5;
            changeLightning();
            playerWinMesssage();
            googleEyes();
        } else if (computerScore === 5) {
            document.querySelectorAll("#quit, #play-again").forEach(function (element) {
                element.style.display = "block";
            });
            computerRoundswon++;
            computerRound.innerHTML = computerRoundswon; // Update computerRound element
            gamePaused = true;
            if (computerRoundswon ===3) {
                quitMessage();
            }
            currentLightningPc = 5;
            changeLightningPc();
            playLoseaudio.play();
            pcWinMesssage();
            googleEyes();
        }
    }
}

/**
 * My function to change the lightning image to reflect the user score
 */
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

/**
 * My function to change the lightning image to reflect the computer score
 */
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

/**
 * My function to change the lightning image to reflect the user score
 */
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
        makeChoice.style.display = "none";
    });
    playWinaudio.play();
    userRoundswon++;
    userRound.innerHTML = userRoundswon;
    gamePaused = true;
    currentLightning = 5;
    changeLightning();
    playerWinMesssage();
    googleEyes();

    //makeChoiceParagraph.textContent = message;
} else if (computerScore === 5) {
    document.querySelectorAll("#quit, #play-again").forEach(function (element) {
        element.style.display = "block";
    });    
    playLoseaudio.play();
    computerRoundswon++;
    computerRound.innerHTML = computerRoundswon;
    gamePaused = true;
    currentLightningPc = 5;
    changeLightningPc();
    pcWinMesssage();
    googleEyes();
}

/**
 * My function checks who wins and displays associated paragraph
 */
function showResult() {
    if (userScore > computerScore) {
        makeChoiceParagraph.textContent = "You win this round, to the next!";
    } else if (userScore < computerScore) {
        makeChoiceParagraph.textContent = "Computer wins this round! Better luck next time!";
    } else if (userScore === computerScore) {
        makeChoiceParagraph.textContent = "It's a tie!";
    }
    makeChoice.style.display = "none";
    gamePaused = true;
    document.querySelectorAll("#quit, #play-again").forEach(function (element) {
        element.style.display = "block";
    });
}

/**
 * My function for sound effects toggle on and off
 */
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
    $("#startupModal").modal("show");
});

main();