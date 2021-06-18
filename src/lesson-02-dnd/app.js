let dragged;
const items = document.querySelectorAll(".item");
const placeholders = document.querySelectorAll(".placeholder");

items.forEach((item) => {
  item.addEventListener("dragstart", dragstart);
  item.addEventListener("dragend", dragend);
});

placeholders.forEach((ph) => {
  ph.addEventListener("dragover", dragover);
  ph.addEventListener("dragenter", dragenter);
  ph.addEventListener("dragleave", dragleave);
  ph.addEventListener("drop", dragdrop);
});

function dragstart(event) {
  dragged = event.target;
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"), 1);
}

function dragend(event) {
  event.target.className = "item";
}

function dragover(event) {
  event.preventDefault();
}

function dragenter(event) {
  if (
    event.target.classList !== undefined &&
    event.target.classList.contains("placeholder")
  ) {
    event.target.classList.add("hovered");
  }
}

function dragleave(event) {
  if (event.target.classList !== undefined) {
    event.target.classList.remove("hovered");
  }
}

function dragdrop(event) {
  if (
    event.target.classList !== undefined &&
    event.target.classList.contains("placeholder")
  ) {
    event.target.append(dragged);
  }

  dragleave(event);
}
