const header = document.querySelector(".header");
const card = document.querySelectorAll(".card");
const footer = document.querySelector(".footer");

const audio = document.getElementById("myAudio");
const button = document.querySelector(".button");

function playAudio() {
    audio.play();
}

function handleClick() {
    const url = "url('../Image/rainbow.gif')";
    header.style.backgroundImage = url;
    footer.style.backgroundImage = url;
    for (let i = 0; i < card.length; i++) {
        card[i].style.backgroundImage = url;
    }
    playAudio();
}

function init() {
    button.addEventListener("click", handleClick);
}

init();