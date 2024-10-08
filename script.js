const container = document.querySelector(".container");
<<<<<<< HEAD
createGrid(16);
function createGrid(input) {
  const number = input * input;
  for (let y = 0; y < number; y++) {
=======

for (let x = 0; x < 16; x++) {
  const divContainer = document.createElement("div");
  divContainer.setAttribute("class", "div-container");
  container.appendChild(divContainer);
  for (let y = 0; y < 16; y++) {
>>>>>>> parent of daad718 (fix div dimension to fill container)
    const divBox = document.createElement("div");
    divBox.setAttribute("class", "div-box");
    container.appendChild(divBox);
  }
}

const button = document.createElement("button");
button.setAttribute("class", "reset");
button.textContent = "Create New Grid";
container.before(button);

button.addEventListener("click", () => {
  const input = prompt("Input grid size (max 100)");
  container.innerHTML = "";
  if (input > 100) {
    createGrid(100 * 100);
  } else {
    createGrid(input * input);
  }
});

const action = document.querySelectorAll(".div-box");
action.forEach((div) => {
  div.addEventListener("mouseover", () => {
    div.classList.add("colored");
  });
});
