// Run: npm run js:two-sum-pairs

function findPairs(array, target) {
  const pairs = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        pairs.push([array[i], array[j]]);
      }
    }
  }

  return pairs;
}

const array = [2, 4, 6, 8, 10];
const target = 12;

console.log("pairs", findPairs(array, target));
