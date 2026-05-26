/**
 * Scope, block scope, and character-frequency patterns
 * Run: npm run js:scope
 *
 * Covers:
 * - Block scope: inner `{ let myName }` shadows outer variable
 * - Function scope: each function has its own bindings
 * - Frequency map pattern: obj[char] = (obj[char] || 0) + 1
 * - for...in on object keys vs for...of on iterables
 */

// --- String cleanup & char frequency map ---
let myName;

console.log(myName); // undefined (declared but not assigned)

myName = "amit divya";
myName = myName.replace(/[^\w]/, "").toLowerCase(); // remove first non-word char

console.log(myName);

let myMap = {};

for (let i = 0; i < myName.length; i++) {
  let ele = myName[i];
  // Count occurrences: if key missing, treat as 0 then add 1
  myMap[ele] = myMap[ele] + 1 || 1;
}

// --- Build new string with replacement ---
let replacedChar = "";
for (char of myName) {
  if (char === "a") {
    replacedChar += "W";
  } else {
    replacedChar += char;
  }
}

console.log("replacedChar", replacedChar);

// --- Find chars that appear more than once ---
let duplicateChar = [];
for (char in myMap) {
  if (myMap[char] > 1) {
    duplicateChar.push(char);
  }
}

console.log("duplicateChar", duplicateChar);

// --- Block scope: `let` inside {} is not visible outside ---
{
  let myName = "Amit";
  console.log("block myName", myName);
}

// --- Function scope: separate `myName` binding ---
function hello() {
  let myName = "Kriyansh";
  console.log("function myName", myName);
}

hello();
