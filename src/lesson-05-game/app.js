const screens = document.querySelectorAll(".screen"),
  startBtn = document.querySelector("#start"),
  timeList = document.querySelector("#time-list"),
  timeBtn = document.querySelector(".time-btn"),
  timeEl = document.querySelector("#time");

let time = 0,
  score = 0,
  timeInterval;

startBtn.addEventListener("click", () => screens[0].classList.add("up"));
timeList.addEventListener("click", ({ target }) => {
  if (target.classList.contains("time-btn")) {
    time = parseInt(target.getAttribute("data-time"));

    startGame();
  }
});

board.addEventListener("click", ({ target }) => {
  if (target.classList.contains("circle")) {
    score++;
    target.remove();
    createRandomCircle();
  }
});

function startGame() {
  renderTime();
  screens[1].classList.add("up");
  timeInterval = setInterval(decreaseTime, 1000);
  createRandomCircle();
}

function finishGame() {
  clearInterval(timeInterval);
  timeEl.parentNode.classList.add("hide");
  board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span></h1>`;
}

function decreaseTime() {
  renderTime();

  time--;

  if (time < 0) {
    finishGame();
  }
}

function renderTime() {
  const minutes = Math.floor(time / 60),
    seconds = time % 60;

  timeEl.innerHTML = `${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(v) {
  return v > 9 ? v : `0${v}`;
}

function createRandomCircle() {
  const circle = document.createElement("div"),
    size = getRandomNumber(10, 60),
    { width, height } = board.getBoundingClientRect(),
    x = getRandomNumber(0, width - size),
    y = getRandomNumber(0, height - size);

  circle.classList.add("circle");
  circle.style.color = getRandomColor();
  circle.style.width = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;

  setTimeout(() => (circle.style.opacity = 1), 0);

  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
  return "#" + getRandomNumber(0, 4095).toString(16).padStart(2, "0");
}
