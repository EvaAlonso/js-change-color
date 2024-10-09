const container = document.querySelector(".container");
const btn = document.querySelector(".button");
const colorWord = document.querySelector(".color");

function changeColor(){
  container.style.backgroundColor = "darkblue";
  colorWord.innerHTML = "darkblue";
}

btn.addEventListener("click", changeColor);