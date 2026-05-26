/**
 * Combine & sort array elements (practice)
 * Run: npm run js:combine-arrays
 *
 * Note: Original skipped index 0 of arrOne (starts at i=1). sort() coerces to strings
 * unless comparator passed — [1,10,2].sort() → [1,10,2] wrong for numbers.
 */

function getCombine(arrOne, arrTwo) {
  let combinedArr = [];

  for (let i = 1; i < arrOne.length; i++) {
    combinedArr.push(arrOne[i]);
  }

  combinedArr.sort((a, b) => a - b); // numeric sort

  return combinedArr;
}

const arrOne = [1, 2, 2, 4, 6, 7];
const arrTwo = [2, 3, 3, 5, 5, 7, 9, 9];

console.log("getCombine", getCombine(arrOne, arrTwo));
