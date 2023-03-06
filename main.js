//Variable´s starting
let uncoverCard = 0;
let timing = false;
let same = 0;
let initialTimer = 30;
let timer = 30;
let success = 0;
let movements = 0;

// Pointing to document
let showmovements = document.getElementById("movements");
let showSucces = document.getElementById("success");
let showTime = document.getElementById("time_left");

let winAudio = new Audio("./sound/win.wav");
let loseAudio = new Audio("/sound/lose.wav");
let clickAudio = new Audio("/sound/click.wav");
let rightAudio = new Audio("sound/right.wav");
let wrongAudio = new Audio("/sound/wrong.wav");

//Generate random numbers
let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numbers = numbers.sort(function () {
  return Math.random() - 0.3;
});
console.log(numbers);

function counterTime() {
  resetTimer = setInterval(
    () => {
      showTime.innerHTML = `Tiempo: ${timer} segundinos`;
      timer--;
      if (timer < 0) {
        clearInterval(resetTimer);
        blockCard(numbers);
        loseAudio.play(); //insert audio
      }
    },
    1000,
    timer
  );
}

function blockCard(numbers) {
  for (let i = 0; i <= 15; i++) {
    let cardBlock = document.getElementById(i);
    cardBlock.innerHTML = `<image src="./images/${numbers[i]}.png" alt="">`;
    cardBlock.disabled = true;
  }
}
// Principal function
function uncover(id) {
  if (timing == false) {
    counterTime();
    timing = true;
  }

  if (uncoverCard == 0) {
    let card1 = document.getElementById(id);
    firstResult = numbers[id];
    card1.innerHTML = `<img src="./images/${firstResult}.png" alt="" >`;
    clickAudio.play();
    // Disable first button
    card1.disabled = true;
    uncoverCard++;

    firstId = id;
    //Show second button
  } else if (uncoverCard == 1) {
    let card2 = document.getElementById(id);
    secondResult = numbers[id];
    card2.innerHTML = `<img src="./images/${secondResult}.png">`;

    // Disable second button
    card2.disabled = true;
    uncoverCard++;

    secondId = id;
    // Increase movements
    movements++;
    showmovements.innerHTML = `Movimientos: ${movements}`;

    if (firstResult == secondResult) {
      // Reset of UncoverCard
      uncoverCard = 0;
      same++;
      // Increase Check
      success++;
      showSucces.innerHTML = `Aciertos: ${success}`;
      rightAudio.play();
    } else {
      wrongAudio.play();
      // Show values momentarily cover again
      setTimeout(() => {
        card1 = document.getElementById(firstId);
        card2 = document.getElementById(secondId);
        card1.innerHTML = " ";
        card2.innerHTML = " ";
        card1.disabled = false;
        card2.disabled = false;
        uncoverCard = 0;
      }, 500);
    }
  }

  if (same == 8) {
    winAudio.play();
    clearInterval(resetTimer);
    showSucces.innerHTML = `Aciertos: ${success}🥳`;
    showTime.innerHTML = `Fantástico! 🎊 solo fueron ${
      initialTimer - timer
    } segundinos `;
    showmovements.innerHTML = `Movimientos: ${movements}😎`;
  }
}
