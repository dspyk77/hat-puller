// ===== Glabal Var =====
// input for creating a card
var cardInput = document.querySelector("#card-input");
var pickOneBtn = document.querySelector("#pick-one-btn");
var displayInput = document.querySelector("#display-input");
var popGif = document.querySelector("#pop-gif");
var displayErrorMsg = document.querySelector("#error-msg");
// where cards are displayed after being made
var displayCard = document.querySelector("#display-card");
// array input being stored in
// var cardArr = ["a", "b", "c"] for testing
var cardArr = [];

// adds input to the array
function storeCard() {
  cardArr.push(cardInput.value);

  console.log(cardArr);
  cardInput.value = "";
  if (cardArr.length >= 2) {
    pickOneBtn.hidden = false;
  } else {
    pickOneBtn.hidden = true;
  }
}
// removes all cards
function clearCards() {
  displayCard.innerHTML = "";
}

// hide/show error msg
function hideErrorMsg() {
  displayErrorMsg.hidden = true;
}

function showCard() {
  if (displayInput.value >= 0 && displayInput.value <= cardArr.length - 1) {
    clearCards();
    displayCard.insertAdjacentHTML(
      "beforeend",
      `
    <div class="card-display margin-10 card-box">
      <p>${cardArr[displayInput.value]}</p>
    </div>
    `
    );
  } else {
    clearCards();
    displayErrorMsg.hidden = false;
    setTimeout(hideErrorMsg, 2000);
  }
}

function showAllCards() {
  clearCards();
  for (var i = 0; i < cardArr.length; i++) {
    displayCard.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card-display margin-10 card-box">
        <p>${cardArr[i]}</p>
      </div>
    `
    );
  }
}
// hide GIF
function hideGif() {
  popGif.style.display = "none";
}
// show GIF
function showGif() {
  popGif.style.display = "block";
  setTimeout(hideGif, 2800);
  setTimeout(randomCard, 2800);
}

function randomCard() {
  clearCards();
  var randomNumber = getRandomInt(0, cardArr.length - 1);
  console.log(randomNumber);
  displayCard.insertAdjacentHTML(
    "beforeend",
    `
  <div class="card-display margin-10 card-box">
    <h4>The card selected is...</h4>
    <p>${cardArr[randomNumber]}!</p>
  </div>
  `
  );
}

function getRandomInt(min, max) {
  // The maximum is inclusive and the minimum is inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// cardInput.addEventListener("keypress", function (event) {
//   // If the user presses the "Enter" key on the keyboard
//   if (event.key === "Enter") {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.querySelector("#add-card").click();
//   }
// });
