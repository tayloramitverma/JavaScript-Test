let myName;

console.log(myName);

myName = "amit divya";

myName = myName.replace(/[^\w]/, "").toLowerCase();

console.log(myName);

// myName = myName.split("").reverse().join("");

// console.log(myName);

let myMap = {};

for (let i = 0; i < myName.length; i++) {
  let ele = myName[i];
  myMap[ele] = myMap[ele] + 1 || 1;
}

let replacedChar = "";
for (char of myName) {
  if (char === "a") {
    replacedChar += "W";
  } else {
    replacedChar += char;
  }
}

console.log("replacedChar", replacedChar);

let duplicateChar = [];
for (char in myMap) {
  if (myMap[char] > 1) {
    duplicateChar.push(char);
  }
}

console.log("duplicateChar", duplicateChar);

{
  let myName = "Amit";
  console.log("myName", myName);
}

function hello() {
  let myName = "Kriyansh";

  console.log("myName", myName);
}

hello();
