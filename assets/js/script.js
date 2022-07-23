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
    fence.src = "assets/images/fence.webp";
    box.appendChild(fence);

    let character = document.createElement("img");
    character.classList.add("character");
    character.src = "assets/images/bunny.webp";
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

setInterval( function(){
    let over = document.querySelector(".game-over");
    let text = document.querySelector('.canvas h2');
    let h1 = document.querySelector('.canvas h1');
    timer--;

    if (timer>=0){
        timeLeft.innerHTML = timer;
    }
    if (timer === 0) {
        // for (var i=0;i<header.length;i+=1){
        //     header[0].style.display = 'block';
        //   }
        canvas.classList.remove("canvasClose");
        over.style.display ="block";
        startBtn.style.visibility = "visible";
        startBtn.textContent = "Try Again";
        text.style.display="none";
        h1.style.display="none";   
        highscoreText.style.display = "block";
        instructions.style.display="none";
        // homeLink.style.display="block";
        header.classList.add("right-side");
        const h = document.createElement('header');
        
        score.innerHTML=0; 
    } 
    if(result>max)
    {
        max=result;
        highscore.innerHTML = max;
    }
    else{highscore.textContent =max; }  
}, 1000);

function move() {
    setInterval(function() {
        const rab = document.querySelectorAll('.character');

        let chose = Math.floor(Math.random() * rab.length);
        rab[chose].style.pointerEvents = "all";
        rab[chose].style.animation = "up 2s ease";
        rab[chose].addEventListener("animationend", () => {
            rab[chose].style.pointerEvents = "all";
            rab[chose].style.animation = "down 2s ease";
            rab[chose].addEventListener("animationend", () => {
                rab[chose].style.pointerEvents = "none";      
            });
        });
    }, 2000);
}
move();