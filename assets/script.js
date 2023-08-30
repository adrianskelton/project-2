let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
//updatelightningbolts
//let lightningImages = ['assets/images/lightning1.png', 'assets/images/lightning2.png','assets/images/lightning3.png','assets/images/lightning4.png','assets/images/lightning5.png',]
let currentLightning = 0;
let currentLightningPc = 0;


let lightningscoreplayer = document.getElementById("user-score");
let lightningscorecomputer = document.getElementById("computer-score");

const lightningScore = document.getElementById("myBtn");



lightningScore.addEventListener("click", myFunction1);
function myFunction1() {
    changeLightning();
    changeLightningPc();
    lightningplayer.src = `assets/images/lightning${currentLightning}.png`;
    lightningPc.src = `assets/images/lightning${currentLightningPc}.png`
    document.getElementById("user-label").innerHTML += changeLightning();
    console.log(lightningImages);
    console.log(`User score is ${userScore}`)
}
/*element.addEventListener("click", myFunction2);

function myFunction2() {
    document.getElementById("lightningplayer").innerHTML += "22 function was executed! ";
}
*/

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
    });

    paper_div.addEventListener('click', function () {
        game("p");
    });

    scissors_div.addEventListener('click', function () {
        game("s");
    });
}

function changeLightning() {
    switch (userScore) {
        case 1:
            currentLightning = 0;
        case 2:
            currentLightning = 1;
        case 3:
            currentLightning = 2;
        case 4:
            currentLightning = 3;
        case 5:
            currentLightning = 4;
        default: 
        console.log('defaultswitchcase')
    };
    return imgUrl
}

main();

//show modal on load
$(window).on('load', function() {
        $('#myModal').modal('show');
    });
