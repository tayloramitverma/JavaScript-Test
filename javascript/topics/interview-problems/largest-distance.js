/**
 * Largest gap between two occurrences of character Y in string X
 * Run: npm run js:largest-distance
 *
 * Problem: Max number of characters strictly BETWEEN two Y's (not including Y).
 * Approach: Walk with indexOf — track last index, compare gap to each new pair.
 * Time: O(n * occurrences) with indexOf; O(n) with single pass scan.
 */

function largestDistance(X, Y) {
  let lastYIndex = X.indexOf(Y);
  let maxDistance = -1;

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

console.log("largestDistance", largestDistance(X, Y));
