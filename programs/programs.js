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
  let lastYIndex = X.indexOf(Y);
  let maxDistance = -1;

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

  for (let [char, count] of Object.entries(counts)) {
    if (count > 1) {
      resultArr.push(char);
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

// Prime Number

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function nthPrime(n) {
  let count = 0;
  let num = 2;
  while (count < n) {
    if (isPrime(num)) {
      count++;
    }

    if (count === n) {
      return num;
    }

    num++;
  }
}

console.log("Prime number :", isPrime(5));
console.log("nthPrime Number is:", nthPrime(10));

/**
 * example of a JavaScript code that makes pairs of numbers whose sum is equal to 15
 * without using a for loop:
 */

function findPairs(array, target) {
  const pairs = [];

  // loop through the array of numbers
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // check if the sum of the two numbers is equal to the target
      if (array[i] + array[j] === target) {
        pairs.push([array[i], array[j]]);
      }
    }
  }

  return pairs;
}

// example usage
const array = [2, 4, 6, 8, 10];
const target = 12;
const pairs = findPairs(array, target);
console.log(pairs); // output: [[2, 10], [4, 8]]

/**
 * How do you check if a given string is a palindrome
 */

const mapOfString = (str) => {
  const map = {};
  str.split("").forEach((i) => (map[i] = map[i] + 1 || 1));
  return map;
};

console.log(mapOfString("ffsss"));

const checkPalindrome = (string1, string2) => {
  const mapObject1 = mapOfString(string1);
  const mapObject2 = mapOfString(string2);
  if (mapObject1.length !== mapObject2.length) {
    return false;
  }
  for (let char in mapObject1) {
    if (mapObject1[char] !== mapObject2[char]) {
      return false;
    }
  }
  return true;
};
console.log(checkPalindrome("ffss", "sfsf"));
