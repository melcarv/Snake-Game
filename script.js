let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 16;
let snake = [];
snake[0] = {
    x: 16 * box,
    y: 16 * box
}

let direction = "right";
let food = {
    x: Math.floor(Math.random() * 31 + 1) * box,
    y: Math.floor(Math.random() * 31 + 1) * box
}


function drawBG(){
    context.fillStyle = "#F20530";
    context.fillRect(0, 0, 32 * box, 32 * box);
}

function drawSnake(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "#8DF27E";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood(){
    context.fillStyle = "#056CF2";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown' , update);

function update(event) {
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left" ) direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function startGame(){
    if(snake[0].x > 31 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 32 * box;
    if(snake[0].y > 31 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 32 * box;

    for(i = 1; i < snake.length; i++){
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(game);
            alert('GAME OVER!');
        }
    }

    drawBG();
    drawSnake();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    }else{
        food.x = Math.floor(Math.random() * 31 + 1) * box;
        food.y = Math.floor(Math.random() * 31 + 1) * box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let game = setInterval(startGame, 100);