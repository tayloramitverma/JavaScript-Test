// Run: npm run js:distinct-duplicates

function findDistinctDuplicates(input1, input2) {
  const counts = {};

  for (let i = 0; i < input1; i++) {
    let element = input2[i];
    counts[element] = counts[element] + 1 || 1;
  }

  let resultArr = [];

  for (let [char, count] of Object.entries(counts)) {
    if (count > 1) {
      resultArr.push(Number(char));
    }
  }

  return resultArr.sort((a, b) => a - b);
}

const input1 = 9;
const input2 = [2, 3, 4, 5, 2, 4, 7, 8, 9];

console.log("distinct duplicates", findDistinctDuplicates(input1, input2));
