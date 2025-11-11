// /**************************** PART ONE: **********************************/
// let secret = 7;
// let answer = prompt("Please guess the secret number (1-10): ");

// //Converting the string 'Guess' to an integer for comparison
// let guess = parseInt(answer);
// if (guess === secret) {
//   alert("CORRECT!");
//   document.write("Refresh the page to play again! {^_^}")
// } else {
//   alert("Sorry, incorrect");
//   document.write("Refresh the page to try again! {^.^}");
// }

// /*************************** PART TWO: **********************************/
// let secret = 10;
// let guess = parseInt(prompt("Please guess a secret number between 1-10 : "));

// if (guess === secret) {
//     alert("CORRECT! -- END OF GAME -- ");
//     document.write("Refresh the page to play again! {^_^}");
// } else {
//     alert("Oooops, incorrect...");
//     document.write("Refresh the page to try again! {^.^}");
// }

// /******************* PART THREE: USING WHILE LOOP *************************/
let secret = Math.floor(Math.random() * 11);
let remainingGuesses = 5;
let answer;
let finalMessage = document.getElementById("finalMessage");
let message = document.getElementById("message1");

guess();

while (answer !== secret && remainingGuesses > 0) {
  remainingGuesses--;
  if (isNaN(answer)) {
    exitGame();
    break;
  } else if (answer < secret) {
    alert("Incorrect, too low! Try again");
    guess();
  } else if (answer > secret) {
    alert("Incorrect, too high! Try again");
    guess();
  }
}
endGame();

function guess() {
  answer = parseInt(prompt("Please guess a secret number between 0-10 : "));
  
}

function endGame() {
  if (answer === secret) {
    alert("Correct! The secret number is: [ " + secret + " ]");
  } else if (remainingGuesses === 0) {
    alert("Sorry, you ran out of guesses... The secret number was: [ " + secret + " ]");
  } else {
    alert("The secret number was: [ " + secret + " ]");
  }
  finalMessage.style.color = "red";
  finalMessage.innerHTML = "Refresh the page if you wish to play again! {^_^}";
}

function exitGame() {
  let play = prompt("Invalid input...Do you want to exit the game? Type 'yes' or 'no' ");
  
  if (play === null ) {
    message.innerHTML = "Bye! Hope to see you again later";
    endGame();
  }

  play = play.toLowerCase();

  if (play === "yes") {
    message.innerHTML = "Bye! Hope to see you again later";
    endGame();
  } else if (play === "no") {
    guess();
  } else {
    exitGame();
  }
}
