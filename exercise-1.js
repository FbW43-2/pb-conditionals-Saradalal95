// Exercise-1
"use strict";

// 1
var x = 5;
var y = 6;
if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
  console.log(true);
} else {
  console.log(false);
}

// 2
var z = 53;
if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99)) {
  console.log(true);
} else {
  console.log(false);
}

// 3
var a = 50;
var b = 5;
var c = 17;
if (a > b && a > c) {
  console.log("a");
} else if (b > c) {
  console.log("b");
} else {
  console.log("c");
}

// 4
let str = "pyramid";
let str2 = "py" + str;
let start = str.charAt(0) + str.charAt(1);
if (start === "py") {
  console.log(str);
} else {
  console.log(str2);
}

// 5
var n = 15;
var m = 50;
if (m + n >= 50 && m + n <= 80) {
  console.log(65);
} else {
  console.log(80);
}
// 6
if (m + n === 8 || m - n === 8 || n - m === 8) {
  console.log(true);
} else {
  console.log(false);
}

// 7
if (m === 15 || n === 15 || n + m === 15) {
  console.log(true);
} else {
  console.log(false);
}

// 8
if (m === 7 + 11 || n === 7 + 11) {
  console.log(true);
} else {
  console.log(false);
}
//9
let inteager1 = 5;
let inteager2 = 5;
let triple = inteager1 * 3;
if (inteager1 === inteager2) {
  console.log(triple);
} else {
  console.log(inteager1 + inteager2);
}

// 10
let num1 = 59;
let num2 = 19;
let difference = num1 - num2;
if (num1 > num2) {
  console.log(difference * 2);
} else {
  console.log(difference);
}
