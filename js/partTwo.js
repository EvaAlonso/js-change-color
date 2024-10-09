const container = document.querySelector(".container");
const btn = document.querySelector(".button");
const colorWord = document.querySelector(".color");

function changeColor(){
  if (container.style.backgroundColor === "red"){
    container.style.backgroundColor = "darkblue";
    colorWord.innerHTML = "darkblue" ;
  } else {
    container.style.backgroundColor = "red";
    colorWord.innerHTML = "red"
  }
  
}

btn.addEventListener("click", changeColor);