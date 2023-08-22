console.log('hello');
function vsImageOver() {
        document.getElementById("vs-image").classList.add("vs");
        document.getElementById("vs-image").classList.remove("vs2");
    }
    
    function vsImageOut() {
        const dropdowns = document.querySelectorAll(".dropdown");
        dropdowns.forEach((dropdown) => {
            dropdown.classList.add("vs2");
            dropdown.classList.remove("vs");
        });
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