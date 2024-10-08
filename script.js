//select container class
const container = document.querySelector(".container");

//create initial grid 16x16
createGrid(16);

//add button to reset and create grid with input value
const button = document.createElement("button");
button.setAttribute("class", "reset");
button.textContent = "Create New Grid";

button.addEventListener("click", () => {
  const input = prompt("Input grid size (max 100)");
  container.innerHTML = "";
  if (input > 100) {
    createGrid(100);
  } else {
    createGrid(input);
  }
});

//place button before container
container.before(button);

//create grid
function createGrid(input) {
  for (let x = 0; x < input; x++) {
    const divContainer = document.createElement("div");
    divContainer.setAttribute("class", "div-container");
    container.appendChild(divContainer);
    for (let y = 0; y < input; y++) {
      const divBox = document.createElement("div");
      divBox.setAttribute("class", "div-box");
      divContainer.appendChild(divBox);
    }
  }

  //change background color for hovered div-box
  let action = document.querySelectorAll(".container .div-box");
  action.forEach((div) => {
    div.addEventListener("mouseover", () => {
      //   div.classList.add("colored"); //for black color
      div.setAttribute("style", "background-color:" + randomColor() + ";");
    });
  });
}

function randomColor() {
  let hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
}
