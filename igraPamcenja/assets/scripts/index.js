var correctBtnOrder = [];
var initialNumberOfGuesses = 3;
var nextCorrectGuess = undefined;
var numberOfCorrectGuesses = 0;
var audio = new Audio('assets/scripts/ding.wav');


async function startHandler() {
  correctBtnOrder = [];
  for (let i = 0; i < initialNumberOfGuesses; i++) {
    let randomNo = getRandomInt(4);
    correctBtnOrder.push("btn_" + randomNo);
    await lightUpBox(randomNo);
  }
  nextCorrectGuess = correctBtnOrder.shift();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function lightUpBox(boxId) {
  return new Promise((resolve, reject) => {
    const box = document.getElementById("btn_" + boxId);
    box.classList.remove("faded");
    box.classList.add("nonFaded");
    setTimeout(function () {
      box.classList.remove("nonFaded");
      box.classList.add("faded");
      resolve(true);
    }, 800);
    })
}

function handleBoxClick(boxNumber) {
  if (nextCorrectGuess === "btn_" + boxNumber) {
    nextCorrectGuess = correctBtnOrder.shift();
    numberOfCorrectGuesses++;
  } else {
    audio.play()
    alert('You have lost!');
    resetGame(false);
  }
  if (numberOfCorrectGuesses === initialNumberOfGuesses) {
    audio.play()
    alert('Congratulations!');
    resetGame(true);
  } 
}

function resetGame(won) {
  if (won) {
    initialNumberOfGuesses++;
  } else {
    initialNumberOfGuesses = 3;
  }
  correctBtnOrder = [];
  numberOfCorrectGuesses = 0;
}