const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

let spaceship = {
    x: canvas.width / 2 - 25,
    y: canvas.height - 60,
    width: 50,
    height: 50,
    dx: 0,
    dy: 0
};

let obstacles = [];
let score = 0;

function drawSpaceship() {
    ctx.fillStyle = 'white';
    ctx.fillRect(spaceship.x, spaceship.y, spaceship.width, spaceship.height);
}

function drawObstacles() {
    ctx.fillStyle = 'red';
    obstacles.forEach(obstacle => {
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
}

function moveSpaceship() {
    spaceship.x += spaceship.dx;
    spaceship.y += spaceship.dy;

    if (spaceship.x < 0) spaceship.x = 0;
    if (spaceship.x + spaceship.width > canvas.width) spaceship.x = canvas.width - spaceship.width;
    if (spaceship.y < 0) spaceship.y = 0;
    if (spaceship.y + spaceship.height > canvas.height) spaceship.y = canvas.height - spaceship.height;
}

function moveObstacles() {
    obstacles.forEach(obstacle => {
        obstacle.y += 2;
    });

    obstacles = obstacles.filter(obstacle => obstacle.y < canvas.height);
}

function createObstacle() {
    const obstacleWidth = 50;
    const obstacleHeight = 50;
    const obstacleX = Math.random() * (canvas.width - obstacleWidth);
    const obstacleY = -obstacleHeight;
    obstacles.push({ x: obstacleX, y: obstacleY, width: obstacleWidth, height: obstacleHeight });
}

function detectCollision() {
    obstacles.forEach(obstacle => {
        if (spaceship.x < obstacle.x + obstacle.width &&
            spaceship.x + spaceship.width > obstacle.x &&
            spaceship.y < obstacle.y + obstacle.height &&
            spaceship.y + spaceship.height > obstacle.y) {
                alert('Game Over! Sua pontuação: ' + score);
                document.location.reload();
        }
    });
}

function updateScore() {
    score += 1;
    document.getElementById('score').innerText = 'Pontuação: ' + score;
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawSpaceship();
    drawObstacles();
    moveSpaceship();
    moveObstacles();
    detectCollision();
    updateScore();

    requestAnimationFrame(update);
}

function keyDown(e) {
    if (e.key === 'ArrowRight' || e.key === 'd') {
        spaceship.dx = 5;
    } else if (e.key === 'ArrowLeft' || e.key === 'a') {
        spaceship.dx = -5;
    } else if (e.key === 'ArrowUp' || e.key === 'w') {
        spaceship.dy = -5;
    } else if (e.key === 'ArrowDown' || e.key === 's') {
        spaceship.dy = 5;
    }
}

function keyUp(e) {
    if (e.key === 'ArrowRight' || e.key === 'd' ||
        e.key === 'ArrowLeft' || e.key === 'a' ||
        e.key === 'ArrowUp' || e.key === 'w' ||
        e.key === 'ArrowDown' || e.key === 's') {
        spaceship.dx = 0;
        spaceship.dy = 0;
    }
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

setInterval(createObstacle, 1000);
update();
