const upBtn = document.querySelector(".up-button"),
  downBtn = document.querySelector(".down-button"),
  sidebar = document.querySelector(".sidebar"),
  container = document.querySelector(".container"),
  mainSlide = document.querySelector(".main-slide"),
  slidesCount = mainSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      changeSlide("up");
      break;

    case "ArrowDown":
      changeSlide("down");
      break;
  }
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;

    if (activeSlideIndex > slidesCount - 1) {
      activeSlideIndex = 0;
    }
  } else {
    activeSlideIndex--;

    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  const height = activeSlideIndex * container.clientHeight;

  mainSlide.style.transform = `translateY(-${height}px)`;
  sidebar.style.transform = `translateY(${height}px)`;
}
