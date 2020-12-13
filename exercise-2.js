"use strict";
// 1

var isDog = false;
if (isDog === true) {
  console.log("pat, pat");
} else {
  console.log("find me a dog to pat!");
}
// 2
var speedCheck = 70;
var speedLimit = 50;
if (speedCheck > speedLimit) {
  console.log("You're going too fast!");
} else {
  console.log("You're driving below the speed limit, Oma!");
}
//  3

var age = 25;
if (age < 16) {
  console.log("serve butter beer");
} else {
  console.log("serve beer");
}
// 4
var isStudent = false;
if (isStudent === true) {
  console.log("Ticket costs €5,00");
} else {
  console.log("Ticket costs €12,00");
}
// 5
var okMarie = 'juice,beer,popcorn,cake';
if (okMarie.includes('cake') === true) {
    console.log("Let them eat cake");
} else {
    console.log("Oh, bother");
}
// 6
let number = 25;

if (number % 2 === 0) {
    console.log(`${number} is even`)
}
else {
    console.log(`${number} is odd`)
}