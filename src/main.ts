function writeInput(event: Event) {
  let input = (event.target as HTMLInputElement).value;
  characterOutput.innerHTML = input;
}

function changeImage() {
  charImage.src = "../img/" + ClassImage.value + "-" + gender.value + ".jpg";
  charImage.style.display = "block";
}

function changeGame() {
  console.log(gameTypeInput.value)
  if (gameTypeInput.value === "Hardcore"){
    gameTypeOutput.innerHTML = "Hardcore"
  }
  if (gameTypeInput.value === "Softcore"){
    gameTypeOutput.innerHTML = "Softcore"
  }
}

let characterInput = document.getElementById("characterInput")!;
let characterOutput = document.getElementById("characterOutput")!;
let charImage = document.getElementById("charImage")!;
let ClassImage = document.getElementById("ClassImage")!;
let gender = document.getElementById("gender")!;
let gameTypeInput = document.getElementById("gameTypeInput")!
let gameTypeOutput = document.getElementById("gameTypeOutput")!

characterInput.addEventListener("input", writeInput);
ClassImage.addEventListener("change", changeImage);
gender.addEventListener("change", changeImage);
gameTypeInput.addEventListener("change", changeGame);
