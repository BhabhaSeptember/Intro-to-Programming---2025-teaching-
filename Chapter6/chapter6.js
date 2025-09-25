// var message = "Hello World";
// console.log(message);

// CONDITIONALS
// IF STATEMENTS
// var firstName = "Bhabha September";
// console.log("Hello " + firstName);

// if (firstName.length === 3) {
//   console.log("Wow, you have a REALLY long name!" + firstName);
// } else {
//   console.log("Your name isn't very long");
// };

// // CHAINING IF/ELSE STATEMENTS
/*
var lemonChicken = true;
var beefWithBlackBean = false;
var sweetAndSourPork = false;

if (lemonChicken) {
    console.log("Great! I am having lemon chicken");
} else if (beefWithBlackBean) {
    console.log("I will have the beef");
} else if (sweetAndSourPork) {
    console.log("Alright, I'll take the pork");
} else {
    console.log("I will settle for rice then");
};
*/

// WHILE LOOPS
// var sheepCounted = 0;
// while (sheepCounted < 10) {
//     sheepCounted++;
//     console.log("I have counted " + sheepCounted + " sheep!");
// };
// console.log("I'm done");

// FOR LOOPS
// a)
// for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
//     console.log("I have counted " + sheepCounted + " sheep!");
// };
// console.log("Zzzzzzzzzzzzzz");

// b)
// var timesToSayHello = 3;
// for (var i = 0; i < timesToSayHello; i++) {
//   console.log("Hello!");
// };

// c)
// var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
// for(var i = 0; i < animals.length; i++) {
//     console.log("This zoo contains a " + animals[i] + ".");
// };

// // d)
// var firstName = "Bhabha";
// for(var i = 0; i < firstName.length; i++) {
//     console.log("My name contains the letter: " + firstName[i] + ".");
// };

// e)
// for (var x = 2; x < 10000; x *= 2) {
//     console.log(x);
// };

// =============================================================================

// Try It Out
// 1)
// var name = "Victor";

// if (name === "Bhabha") {
//   console.log("Hello me!");
// } else if (name === "Victor") {
//   console.log("Hey Dad");
// } else if (name === "Audrey") {
//   console, log("Hey Mom!");
// } else {
//   console.log("Hello stranger!");
// }

// 2)
// console.log("Using For Loop")
// for (var i = 1; (3 ** i) < 10000; i++) {
//     console.log(3 ** i);
//   }

// console.log("\nUsing While Loop")
// var i = 1;
// while ((3 ** i ) < 10000) {
//     var result = 3 ** i;
//     console.log(result);
//     i++;
// };

// PROGRAMMING CHALLENGES
// 1) Awesome Animals
var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

for (var i = 0; i < animals.length; i++) {
  animals[i] = "Awesome " + animals[i];
};
console.log(animals);

// 2) Random String Generator
// var alphabet = "abcdefghijklmnopqrstuvwxyz";
// var randomString = "";
// var stringLength = 0;

// while (stringLength < 5) {
//   var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
//   randomString += randomLetter;
//   stringLength++;
// }
// console.log(randomString);

// 3)
// var input = "javascript is awesome";
// var output = "";

// for (var i = 0; i < input.length; i++) {
//   if (input[i] === "a") {
//     output += "4";
//   } else if (input[i] === "e") {
//     output += "3";
//   } else if (input[i] === "i") {
//     output += "1";
//   } else if (input[i] === "o") {
//     output += "0";
//   } else {
//     output += input[i];
//   }
// }
// console.log(input);
// console.log(output);
