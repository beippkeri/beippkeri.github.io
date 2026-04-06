const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const ball = {
    x: Math.random()*800,
    y: Math.random()*800,
    dx: 2,
    dy: -2,
    radius: 10
}
const balls = [];
for (let i = 0; i<200; i++) {
    const ball = {
      x: Math.random()*800,
      y: Math.random()*800,
      dx: 2,
      dy: -2,
      radius: 10,
      rColor: Math.floor(Math.random()*255),
      gColor: Math.floor(Math.random()*255),
      bColor: Math.floor(Math.random()*255)
    };
  balls.push(ball);
}

const paddleHeight = 10;
const paddleWidth = 75;

let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;

let interval = 0;

const brickRowCount = 3;
const brickColumnCount = 9;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;


function drawBricks(){
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      ctx.fillRect(
        brickOffsetLeft+(brickWidth+brickPadding)*c,
        brickOffsetTop+(brickHeight+brickPadding)*r, brickWidth, 
        brickHeight
      );
    }
  }
}

function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  }
}

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function drawBall() {
  for (const ball of balls) {
  let colorString = (ball.rColor.toString(16)+ball.gColor.toString(16)+ ball.bColor.toString(16));
  ctx.fillStyle = ("#" + colorString);
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  ctx.fillStyle = "black"
  drawPaddle();
  drawBricks();
  for (const ball of balls) {
    if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
      ball.dx = -ball.dx;
    }
    if (ball.y + ball.dy < ball.radius || ball.y + ball.dy > canvas.height - ball.radius) {
      ball.dy = -ball.dy;
    }
}
  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  //move the ball
  for (const ball of balls){
    ball.x += ball.dx;
    ball.y += ball.dy;
  }
  requestAnimationFrame(draw);
}

draw();