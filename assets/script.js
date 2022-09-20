// ===== Glabal Var =====
var cardInput = document.querySelector("#card-input");
var pickOneBtn = document.querySelector("#pick-one-btn");
var displayInput = document.querySelector("#display-input");
var popGif = document.querySelector("#pop-gif");
var displayErrorMsg = document.querySelector("#error-msg");
var displayCard = document.querySelector("#display-card");
// array input being stored in
// var cardArr = ["a", "b", "c"] for testing
var cardArr = [];

// pseudocode edition 
// adds input to the array
function storeCard() {
  var inputIsBlank = (cardInput.value.trim() === "")
  if (inputIsBlank) {
    console.error("Input is blank")
    console.log(inputIsBlank)
    return false
  }

  if (cardInput.value.length > 100) {
    console.error("Input is too long")
    return false
  }

  cardArr.push(cardInput.value)
  showAllCards()
  cardInput.value = ""

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

function delCard() {
  var deleteIndex = document.querySelector("#del-card")
  if (deleteIndex.value >= 0 && deleteIndex.value <= cardArr.length - 1) {
  cardArr.splice(deleteIndex.value, 1);
  showAllCards()
} else {
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
        <p>No: ${i} - ${cardArr[i]}</p>
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
function showRandomCard() {
  clearCards()
  popGif.style.display = "block";
  setTimeout(hideGif, 2800);
  setTimeout(randomCard, 2900);
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

// this function is for later use or for use in later projects. It checks input and sends an error if to high or low 
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

// cardInput.addEventListener("keypress", function (event) {
//   // If the user presses the "Enter" key on the keyboard
//   if (event.key === "Enter") {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.querySelector("#add-card").click();
//   }
// });


// first rendition 
// function storeCard() {
  
//   console.log("[Store Card]")  
//   console.log(cardInput.value)
//   console.log("is blank?")
//   console.log(cardInput.value == "")
//   if (cardInput.value == "") {
//     return
//   }
//   console.log("working")
//   cardArr.push(cardInput.value)
//   console.log("cardArr before:")
//   console.log(cardArr)

  

//   console.log("cardArr after:")
//   console.log(cardArr)

   
//   cardInput.value = ""
//   if (cardArr.length >= 2) {
//     pickOneBtn.hidden = false;
//   } else {
//     pickOneBtn.hidden = true;
//   }

// }


// function storeCard() {
//   console.log("[Store Card]")

//   console.log(`Input value: ${cardInput.value}`)

//   var inputIsBlank = (cardInput.value.trim() === "")
//   console.log(`Blank? ${inputIsBlank}`)
//   if (inputIsBlank) {
//     console.error("Input is blank")
//     return
//   }

//   console.log(`Input Length: ${cardInput.value.length}`)
//   if (cardInput.value.length > 100) {
//     console.error("Input is too long")
//     return
//   }

//   console.log("-- Processing Input...")

//   console.log("Stored values before:")
//   console.log(cardArr)

//   cardArr.push(cardInput.value)

//   console.log("Stored values after:")
//   console.log(cardArr)

//   cardInput.value = ""

//   if (cardArr.length >= 2) {
//     pickOneBtn.hidden = false;
//   } else {
//     pickOneBtn.hidden = true;
//   }
// }

// function storeCard() {
//   // if input is blank, say so, and don't do anything
//   var inputIsBlank = (cardInput.value.trim() === "")
//   if (inputIsBlank) {
//     console.error("Input is blank")
//     return
//   }

//   // if input is too long, say so, and don't do anything
//   if (cardInput.value.length > 100) {
//     console.error("Input is too long")
//     return
//   }

//   // Add the input to the array
//   cardArr.push(cardInput.value)

//   // Clear out the input from the text box
//   cardInput.value = ""

//   // Determine whether or not to display the "random draw" button, and act accordingly
//   if (cardArr.length >= 2) {
//     pickOneBtn.hidden = false;
//   } else {
//     pickOneBtn.hidden = true;
//   }
// }