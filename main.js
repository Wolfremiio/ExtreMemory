//Variable´s starting
let uncoverCard = 0;
let card1 = null;
let card2 = null;
firstResult = null;
secondResult = null;
let movements = 0;
let success = 0;
let timing = false;
let timer = 30;
let initialTimer = 30;
let resetTimer = null;

// Pointing to document
let showmovements = document.getElementById("movements");
let showSucces = document.getElementById("success");
let showTime = document.getElementById("time_left");
//Generate random numbers
let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numbers = numbers.sort(() => {
  return Math.random() - 0.5;
});
console.log(numbers);

function counterTime() {
  resetTimer = setInterval(() => {
    timer--;
    showTime.innerHTML = `Tiempo: ${timer} segundinos`;
    if (timer == 0) {
      clearInterval(resetTimer);
      blockCard();
    }
  }, 1000);
}

function blockCard() {
  for (let i = 0; i <= 15; i++) {
    let cardBlock = document.getElementById[i];
    cardBlock.innerHTML = numbers[i];
    cardBlock.disabled = true;
  }
}
// Principal function
function uncover(id) {
  if (timing == false) {
    counterTime();
    timing = true;
  }
  uncoverCard++;

  console.log(uncoverCard);

  if (uncoverCard == 1) {
    card1 = document.getElementById(id);
    firstResult = numbers[id];
    card1.innerHTML = firstResult;

    // Disable first button
    card1.disabled = true;
    //Show second button
  } else if (uncoverCard == 2) {
    card2 = document.getElementById(id);
    secondResult = numbers[id];
    card2.innerHTML = secondResult;

    // Disable second button
    card2.disabled = true;

    // Increase movements
    movements++;
    showmovements.innerHTML = `Movimientos: ${movements}`;
  }

  if (firstResult == secondResult) {
    // Reset of UncoverCard
    uncoverCard = 0;

    // Increase Check
    success++;
    showSucces.innerHTML = `Aciertos: ${success}`;

    if (success == 8) {
      clearInterval(resetTimer);
      showSucces.innerHTML = `Aciertos: ${success}🥳`;
      showTime.innerHTML = `Fantástico! 🎊 solo fueron ${
        initialTimer - timer
      } segundinos `;
      showmovements.innerHTML = `Movimientos: ${movements}😎`;
    }
  } else {
    // Show values momentarily cover again
    setTimeout(() => {
      card1.innerHTML = " ";
      card2.innerHTML = " ";
      card1.disabled = false;
      card2.disabled = false;
      uncoverCard = 0;
    }, 800);
  }
}
