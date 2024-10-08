const container = document.querySelector(".container");

for (let x = 0; x < 16; x++) {
  const divContainer = document.createElement("div");
  divContainer.setAttribute("class", "div-container");
  container.appendChild(divContainer);
  for (let y = 0; y < 16; y++) {
    const divBox = document.createElement("div");
    divBox.setAttribute("class", "div-box");
    divContainer.appendChild(divBox);
  }
}
