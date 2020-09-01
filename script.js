let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 16;
let snake = [];
snake[0] = {
    x: 16 * box,
    y: 16 * box
}

let direction = "right";


function criarBG() {
    context.fillStyle = "#F20530";
    context.fillRect(0, 0, 32 * box, 32 * box);
}

function criarCobrinha() {
    for(i=0; i < snake.length; i++){
        context.fillStyle = "#8DF27E";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);