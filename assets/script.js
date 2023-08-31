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

//eventlisteners
lightningScore.addEventListener("click", myFunction1);
document.getElementById("restart").addEventListener("click", reloadGame);

function myFunction1() {
    changeLightning();
    changeLightningPc();
    lightningplayer.src = `assets/images/lightning${currentLightning}.png`;
    lightningPc.src = `assets/images/lightning${currentLightningPc}.png`;
    console.log(currentLightning);
    console.log(`User score is ${userScore}`);
}

// My function to restart the game when clicked
function reloadGame() {
    location.reload();
}

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user";
    const smallCompWord = "comp";
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win! `;
}
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user";
    const smallCompWord = "comp";
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost! `;
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user";
    const smallCompWord = "comp";
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} draws with ${convertToWord(computerChoice)}${smallCompWord}. Its a draw `;
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

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
        myFunction1();
    });

    paper_div.addEventListener('click', function () {
        game("p");
        myFunction1();
    });

    scissors_div.addEventListener('click', function () {
        game("s");
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

main();



//show modal on load
$(window).on('load', function () {
    $('#myModal').modal('show');
});
