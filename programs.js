const arrOne = [1, 2, 2, 4, 6, 7];
const arrTwo = [2, 3, 3, 5, 5, 7, 9, 9];

function getCombine(arrOne, arrTwo) {
  //let arrComb = [...arrOne, ...arrTwo];

  let combinedArr = [];

  for (let i = 1; i < arrOne.length; i++) {
    combinedArr.push(arrOne[i]);
  }

  for (let num of arrTwo) {
    combinedArr.push(num);
  }

  combinedArr.sort();

  console.log(combinedArr);
}

getCombine(arrOne, arrTwo);

//second tech question

async function fetchRecords(id) {
  try {
    let res = await fetch(`https://reqres.in/api/users?page=${id}`);
    let data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

let postIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let promiseArr = [];

for (let pid of postIds) {
  promiseArr.push(fetchRecords(pid));
}

//console.log("promiseArr", promiseArr);

Promise.all(promiseArr)
  .then((results) => {
    console.log("results", results);
  })
  .catch((err) => console.log(err));

/**
 * you are given a string X and a string containing single character Y.
 * your task is find the largest distance between any two occurrences of the character Y in string X.
 * create program usingJavaScript
 */

function largestDistance(X, Y) {
  let maxDistance = -1;
  let lastYIndex = X.indexOf(Y);

  console.log("maxDistance", maxDistance);
  console.log("lastYIndex", lastYIndex);

  while (lastYIndex !== -1) {
    let nextYIndex = X.indexOf(Y, lastYIndex + 1);

    if (nextYIndex !== -1) {
      let distance = nextYIndex - lastYIndex - 1;

      if (distance > maxDistance) {
        maxDistance = distance;
      }
    }

    lastYIndex = nextYIndex;
  }

  return maxDistance;
}

let X = "aabbYccdYddeYYeeffgYhhiiYjjk";
let Y = "Y";

let LDResult = largestDistance(X, Y);

console.log("largestDistance", LDResult);

/**
 * you are given an integer array of N positive elements.
 * any integer in the array can occur multiple times.
 * your task is to find all the distinct duplicate elements
 * & store them in an array in increasing order & then finally return the array as the output?
 * */

function findDistinctDuplicates(input1, input2) {
  const counts = {};

  for (let i = 0; i < input1; i++) {
    let element = input2[i];
    counts[element] = counts[element] + 1 || 1;
  }

  let resultArr = [];

  for (let [el, count] of Object.entries(counts)) {
    if (count > 1) {
      resultArr.push(el);
    }
  }

  return resultArr;
}

const input1 = 9;
const input2 = [2, 3, 4, 5, 2, 4, 7, 8, 9];
const distintResult = findDistinctDuplicates(input1, input2);

console.log("distintResult", distintResult);

// anagram program using JavaScript

function checkAnagrams(str1, str2) {
  let maxCount = 0;
  let maxChar = "";

  let newStr1 = str1.replace(/[^\w]/g, "").toLowerCase();
  let newStr2 = str2.replace(/[^\w]/g, "").toLowerCase();

  if (newStr1.length !== newStr2.length) {
    return false;
  }

  console.log(newStr1, newStr2);

  let charMap1 = {};
  let charMap2 = {};
  
  for (let char of newStr1) {
    charMap1[char] = charMap1[char] + 1 || 1;
  }

  for (let char of newStr2) {
    charMap2[char] = charMap2[char] + 1 || 1;
  }

  console.log("charMap1", charMap1);
  console.log("charMap2", charMap2);

  for (let char in charMap1) {
    if (charMap1[char] > maxCount) {
      maxCount = charMap1[char];
      maxChar = char;
    }
    
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }

  console.log("maxCount", maxCount);
  console.log("maxChar", maxChar);

  return true;
}

console.log(checkAnagrams("rail safety", "fairy tales"));
