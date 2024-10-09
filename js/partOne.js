const container = document.querySelector(".container");
const btn = document.querySelector(".button");

function changeColor(){
  container.setAttribute("style", "background-color:darkblue;");
}

btn.addEventListener("click", changeColor);