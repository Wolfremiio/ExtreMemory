//Variable´s starting
let uncoverCard = 0;
let card1 = null;
let card2 = null;
firstResult = null;
secondResult = null;
let movements = 0;
let success = 0;

// Pointing to document

let showmovements = document.getElementById("movements");
let showSucces = document.getElementById("success");
//Generate random numbers
let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numbers = numbers.sort(() => {
  return Math.random() - 0.5;
  console.log(numbers);
});

// Principal function
function uncover(id) {
  uncoverCard++;
  console.log(numbers);
  if (uncoverCard == 1) {
    card1 = document.getElementById(id);
    firstResult = numbers[id];
    card1.innerHTML = numbers[id];

    // Disable first button
    card1.disabled = true;
    //Show second button
  } else if (uncoverCard == 2) {
    card2 = document.getElementById(id);
    secondResult = numbers[id];
    card2.innerHTML = numbers[id];

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
      showSucces.innerHTML = `Aciertos: ${success}🥳`;
    }
  } else {
    // Show values momentarily cover again
    setTimeout(() => {
      card1.innerHTML = "";
      card2.innerHTML = "";
      card1.disabled = false;
      card2.disabled = false;
      uncoverCard = 0;
    }, 2000);
  }
}
