// Create a function
// var ourFirstFunction = function () {
//     console.log("Hello World!");
//     return 5;
// };
// ourFirstFunction();
// // console.log(ourFirstFunction());

// Passing Arguments to a Function
// var sayHelloTo = function (name) {
//     console.log("Hello " + name + "!");
// };
// sayHelloTo("Bhabha");
// sayHelloTo("Audrey");
// // sayHelloTo(3);

// var printMultipleTimes = function (howManyTimes, whatToDraw) {
//     for (var i = 0; i < howManyTimes; i++) {
//         console.log(i + ": " + whatToDraw);
//     };
// };
// printMultipleTimes(5, "=^.^=");
// printMultipleTimes(3, 10);
// printMultipleTimes(2, true);
// printMultipleTimes(2, ourFirstFunction());

// Returning Values from Functions
// var double = function (number) {
//   return number * 2;
// };
// double(10);
// console.log(double(10));

// console.log(double(5) + double(6));

// console.log(double(double(3)));

// Using Functions to Simplify Code
// var pickRandomWord = function (words) {
//   return words[Math.floor(Math.random() * words.length)];
// };

// var randomWords = ["Planet", "Worm", "Flower", "Computer"];

// pickRandomWord(randomWords);
// console.log(pickRandomWord(randomWords));

// console.log(pickRandomWord(["Aj", "Darrel", "Denzil", "Malcom", "Joseph", "Sam"]));

// Random Insult Generator Using Function Call
// Option 1
// var randomBodyParts = ["Face", "Nose", "Hair"];
// var randomAdjective = ["Smelly", "Boring", "Stupid"];
// var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

// var randomString =
//   "Your " +
//   pickRandomWord(randomBodyParts) +
//   " is like a " +
//   pickRandomWord(randomAdjective) +
//   " " +
//   pickRandomWord(randomWords) +
//   "!!!";
// console.log(randomString);
//
//
// Option 2
// **todo

// var fifthLetter = function (name) {
//   if (name.length < 5) {
//     return "Your name is too short";
//   };
//   return "Fifth letter of your name is " + name[4];
// };

// fifthLetter("Bhabha");
// console.log(fifthLetter("Bhabha"));
// console.log(fifthLetter("Amy"));

// Using return instead of if/else statements
// var medalForScore = function (score) {
//     if (score < 3) {
//         return "Bronze";
//     };
//     if (score < 7) {
//         return "Silver";
//     };
//     return "Gold";
// };
// medalForScore(5);
// console.log(medalForScore(1));
// console.log(medalForScore(5));
// console.log(medalForScore(10));

// var medalForScore = function (score) {
//   if (score < 3) {
//     return "Bronze";
//   } else if (score < 7) {
//     return "Silver";
//   } else {
//     return "Gold";
//   }
// };
// console.log(medalForScore(9));

// Shorthand VS Longhand creation of functions
// var double = function (number) {
//     return number * 2;
// };

// function double(number) {
//     return number * 2;
// };

// ========================================================================

// PROGRAMMING CHALLENGES
// 1) Doing Arithmetic with Functions
var add = function (a, b) {
  return a + b;
};

var multiply = function (a, b) {
  return a * b;
};

add(multiply(36325, 9824), 777);

// 2) Are these arrays the same
var areArraysSame = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

areArraysSame([1, 2, 3], [4, 5, 6]);
// false

areArraysSame([1, 2, 3], [1, 2, 3]);
// true

areArraysSame([1, 2, 3], [1, 2, 3, 4]);
// false

// 3) Hangman using Functions
// Function to pick random word from array
var pickWord = function () {
  var words = ["javascript", "monkey", "amazing", "pancake"];

  return words[Math.floor(Math.random() * words.length)];
};

// Function to set up answer array
var setupAnswerArray = function (word) {
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }

  return answerArray;
};

// Function to show players progress
var showPlayerProgress = function (answerArray) {
  alert(answerArray.join(" "));
};

// Function for user input/guess
var getGuess = function () {
  return prompt("Guess a letter, or click Cancel to stop playing.");
};

// Function to update the state of game after user input/guess
var updateGameState = function (guess, word, answerArray) {
  var appearances = 0;
  for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answerArray[j] = guess;
      appearances++;
    }
  }

  return appearances;
};

// Function for end of game
var showAnswerAndCongratulatePlayer = function (answerArray) {
  showPlayerProgress(answerArray);
  alert("Good job! The answer was " + answerArray.join(""));
};

// FINAL GAME CODE
var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;

while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  var guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
}

showAnswerAndCongratulatePlayer(answerArray);
