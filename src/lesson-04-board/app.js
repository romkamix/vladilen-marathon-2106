const SQUARES_NUMBER = 625,
  board = document.querySelector("#board"),
  colors = [
    "#CC0066",
    "#9900FF",
    "#6633FF",
    "#339999",
    "#CCFF33",
    "#FF9933",
    "#FF00CC",
  ];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");

  square.classList.add("square");
  square.addEventListener("mouseover", setColor);
  square.addEventListener("mouseleave", removeColor);

  board.append(square);
}

function setColor({ target }) {
  target.style.color = getRandomColor();
}

function removeColor({ target }) {
  target.style.color = "";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
