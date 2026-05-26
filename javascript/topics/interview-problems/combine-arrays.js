// Run: npm run js:combine-arrays

function getCombine(arrOne, arrTwo) {
  let combinedArr = [];

  for (let i = 1; i < arrOne.length; i++) {
    combinedArr.push(arrOne[i]);
  }

  combinedArr.sort();

  return combinedArr;
}

const arrOne = [1, 2, 2, 4, 6, 7];
const arrTwo = [2, 3, 3, 5, 5, 7, 9, 9];

console.log("getCombine", getCombine(arrOne, arrTwo));
