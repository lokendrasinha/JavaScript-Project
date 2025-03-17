let gameContainer = document.querySelector(".game-container");
let scoreContainer = document.querySelector(".score-container");

let foodX,foodY;
let headX=12, headY=12;
let velocityX=0,velocityY=0;
let snakeBody = [];
let score = 0;

function generatetFood(){
    foodX=Math.floor(Math.random()*25) +1;
    foodY=Math.floor(Math.random()*25) +1;
    for (let i = 0; i < snakeBody.length; i++) {
        if(snakeBody[i][0]==foodX && snakeBody[i][1]==foodY){
            generatetFood();
        }
        
    }
}

function gameOver(){
    headX=12;
    headY=12;
    velocityX=0;
    velocityY=0;
    snakeBody=[];
    score=0;
    scoreContainer.innerHTML = "Score :"+score;
    alert("Game Over");
}







function renderGame(){
    let updateGame = `<div class="food" style="grid-area: ${foodY}/${foodX};"></div>`;

    if(foodX==headX && foodY==headY){
        snakeBody.push([foodX,foodY]);
        generatetFood();
        score+=10;
        scoreContainer.innerHTML = "Score :"+score;
    }
    snakeBody.pop();
    headX+=velocityX;
    headY+=velocityY;
    snakeBody.unshift([headX,headY]);

    if(headX==0 || headY==0 || headX==26 || headY==26){
        gameOver();
    }

    for(let i=1 ; i<snakeBody.length;i++){
        if(snakeBody[0][0]==snakeBody[i][0] && snakeBody[0][1]==snakeBody[i][1]){
            gameOver();
        }
    }

    for(let i=0 ; i<snakeBody.length;i++){
        updateGame += `<div class="snake" style="grid-area: ${snakeBody[i][1]}/${snakeBody[i][0]};"></div>`;
    }
    
    gameContainer.innerHTML = updateGame;
}
generatetFood();
setInterval(renderGame,150);

document.addEventListener("keydown",function(e){
    console.log(e.key);
    let key = e.key;
    if((key=="ArrowUp" || key=="w") && velocityY!=1){
velocityX=0;
    velocityY=-1;
    }
    else if((key=="ArrowDown" || key=="s") && velocityY!=-1){
        velocityX=0;
        velocityY=1;
    }
    else if((key=="ArrowLeft" || key=="a") && velocityX!=1){
        velocityY=0;
        velocityX=-1;
    }
    else if((key=="ArrowRight" || key=="d") && velocityX!=-1){
        velocityY=0;
        velocityX=1;
    }
})