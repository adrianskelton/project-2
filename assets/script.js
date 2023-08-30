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
let lightningArray = ['assets/images/lightning1.png', 'assets/images/lightning2.png','assets/images/lightning3.png','assets/images/lightning4.png','assets/images/lightning5.png',]
let imgUrl = `<img
          src="assets/images/lightning${currentLightning}.png"
          id="lightningplayer"
          alt="player lightning score image"
        />`;


let lightningscoreplayer = document.getElementById("user-score");
let lightningscorecomputer = document.getElementById("computer-score");
const lightningScore = document.getElementById("myBtn");
let currentLightning;


lightningScore.addEventListener("click", myFunction1);
function myFunction1() {
    document.getElementById("user-label").innerHTML += changeLightning();
    console.log(lightningImages)
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

/*var x = document.getElementById("rock");
x.addEventListener("click", mySecondFunction);

function mySecondFunction() {
    document.getElementById("playerimg").innerHTML += "YOU CHOSE ROCK!<br>";
    //document.getElementById("playerimg") src = 'assets/images/scissors.png';
}

var choseScissor = document.getElementById("scissors");
choseScissor.addEventListener("click", myScissorFunction);

var chosePaper = document.getElementById("paper");
chosePaper.addEventListener("click", myPaperFunction);

function myScissorFunction() {
    document.getElementById("playerimg").innerHTML += "YOU CHOSE SCISSORS!<br>";
    alert("the computer won");
    //document.getElementById("playerimg") src = 'assets/images/scissors.png';
}

function myPaperFunction() {
    document.getElementById("playerimg").innerHTML += "YOU CHOSE PAPER!<br>";
    alert("the computer won");
    //document.getElementById("playerimg") src = 'assets/images/scissors.png';
}

var lightningimages = [
    "assets/images/lightning0",
    "assets/images/lightning1",
    "assets/images/lightning2",
    "assets/images/lightning3",
    "assets/images/lightning4",
    "assets/images/lightning5"
];

var lightningcurrent = 0; //current image displayed
var change_img = document.getElementById("lightningplayer");

function next() {
    console.log("NEXT");
    if (lightningcurrent === lightningimages.length) lightningcurrent = 0;
    console.log(lightningcurrent);
    change_img.src = lightningimages[lightningcurrent++];
}

const button = document.querySelector("button");
button.addEventListener("click", next);




//Popup Modal Script
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
//End of Modal Script

console.log('hello');*/;;
