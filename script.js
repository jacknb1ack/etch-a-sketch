const container = document.querySelector(".container");

for (let x = 0; x < 30; x++) {
  const divContainer = document.createElement("div");
  divContainer.setAttribute("class", "div-container");
  container.appendChild(divContainer);
  for (let y = 0; y < 30; y++) {
    const divBox = document.createElement("div");
    divBox.setAttribute("class", "div-box");
    divContainer.appendChild(divBox);
  }
}

const action = document.querySelectorAll(".div-box");
action.forEach((div) => {
  div.addEventListener("mouseover", () => {
    div.classList.add("colored");
  });
});

const button = document.createElement("button");
button.setAttribute("class", "reset");
button.textContent = "Create New Grid";
container.before(button);
