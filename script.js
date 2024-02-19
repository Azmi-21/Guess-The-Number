"use strict";

let theNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// functionality of the "check" button
document.querySelector(".check").addEventListener("click", function () {
  const myGuess = Number(document.querySelector(".guess").value);
  // no input or invalid number
  if (!myGuess) {
    document.querySelector(".message").textContent =
      "🚫 Please enter a valid number!";
    // guess wrong
  } else if (myGuess !== theNumber) {
    document.querySelector(".message").textContent =
      myGuess > theNumber
        ? "🔻 Your guess is too high"
        : "🔺 Your guess is too low";
    score--;
    document.querySelector(".score").textContent = score;
    if (score < 1) {
      document.querySelector(".message").textContent =
        myGuess > theNumber
          ? "How do you manage to still not find it? I am getting disappointed 🤦‍♂️ 🔻 Your guess is too high"
          : "How do you manage to still not find it? I am getting disappointed 🤦‍♂️ 🔺 Your guess is too low";
    }
  } else if (myGuess == theNumber) {
    if (score < 1) {
      document.querySelector(".message").textContent =
        "🎊 FIOU you finally found The Number. I am still disappointed tho 😪";
    } else {
      document.querySelector(".message").textContent =
        "🎊 Congrats you found The Number !!!";
    }
    // winner page features
    document.querySelector(".number").textContent = theNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
});

// functionality of the "play again" button
document.querySelector(".again").addEventListener("click", function () {
  // resetting the number
  document.querySelector(".number").textContent = "?";
  theNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";

  // resetting the score and the message
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = "20";
  score = 20;
  document.querySelector(".number").style.width = "15rem";
  // resetting the background
  document.querySelector("body").style.backgroundColor = "#222";
});
