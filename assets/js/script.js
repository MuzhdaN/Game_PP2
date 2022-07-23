const container = document.querySelector('.container');
const boxes = document.querySelectorAll('.box');
const timeLeft = document.getElementById("time-left")
const score = document.querySelector('.score');
const startBtn = document.querySelector('.modal button');
const canvas = document.querySelector(".modal");
const header = document.querySelectorAll('header');

// score
const highscore = document.querySelector(".highscore");
const highscoreText = document.querySelector(".highscore-text");
const instructions = document.querySelector('.game-start .rules-btn');
const homeLink = document.querySelector('.right-side a');

let result = 0;
let timer;
let max=0;

for(let i=1; i<=12; i++){
    let box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);

    //adding fence image at the bottom of each box
    let fence = document.createElement("img");
    fence.classList.add("fence");
    fence.src = "assets/images/fence.png";
    box.appendChild(fence);

    let character = document.createElement("img");
    character.classList.add("character");
    character.src = "assets/images/Bugs_Bunny.svg.png";
    character.setAttribute("name", "rab");
    box.appendChild(character);
}

startBtn.addEventListener("click", () => {
    canvas.classList.add("canvasClose");
    for (var i=0;i<header.length;i+=1){
        header[i].style.display = 'flex';
      }
      timer = 10;
      result = 0;    
});

//when cliking the rabbit score will increase by 1
window.addEventListener("click", (e) => {
    if(e.target.name === "rab") {
            mySound = new Audio('assets/audio/ltmi_060.mp3');
            mySound.play();
        
       result++;
       score.textContent = result;
    }
});
