// ===== Glabal Var =====
// input for creating a card
var cardInput = document.querySelector("#card-input")
var displayInput = document.querySelector("#display-input")
// where cards are displayed after being made
var displayCard = document.querySelector("#display-card")
// array input being stored in
// var cardArr = ["a", "b", "c"] for testing 
var cardArr = ["a", "b", "c"]

function storeCard() {
  cardArr.push(cardInput.value) 
  
  console.log(cardArr)
  cardInput.value = ""
  
}

function clearCards() {
  displayCard.innerHTML = ""
}
// idea -- make function to display the input number in the array + 1 *No.(item number) input*
function showCard() {
  var x = cardArr.length + 1
  displayCard.insertAdjacentHTML("beforeend", `
  <div class="card-display margin-10 card-box">
    <p>No.${cardArr[displayInput.value]}</p>
  </div>
  `
  )
}

function showAllCards() {
  clearCards()
  for (var i = 0; i < cardArr.length; i++) {
      displayCard.insertAdjacentHTML("beforeend", `
      <div class="card-display margin-10 card-box">
        <p>${cardArr[i]}</p>
      </div>
    `
    )
  }
}
// future idea -- when displaying this card insert a GIF of shuffling a deck of cards or somthing like that for 3 sec?
// then display the card 
function randomCard() {
  clearCards()
  var randomNumber = getRandomInt(0, cardArr.length) 
  console.log(randomNumber)
  displayCard.insertAdjacentHTML("beforeend", `
  <div class="card-display margin-10 card-box">
    <h4>The card selected is...</h4>
    <p>${cardArr[randomNumber]}!</p>
  </div>
  `
  )
}

function getRandomInt(min, max) {
  // The maximum is inclusive and the minimum is inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}