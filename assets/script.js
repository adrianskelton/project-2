/*const computerChoiceDisplay = document.getElementById("rockomputerimg");
const resultDisplay = document.createElement('h1');
const gameGrid = document.getElementById('game');
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ['rock', 'paper', 'scissors'];
let userChoice;

const handleClick = (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
};

for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button');
    button.id = choices[i];
    button.innerHTML = choices[i];
    button.addEventListener('click', handleClick);
    gameGrid.appendChild(button);
}*/

/*testing here;*/


var x = document.getElementById("rock");
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
    //document.getElementById("playerimg") src = 'assets/images/scissors.png';
}




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

console.log('hello');