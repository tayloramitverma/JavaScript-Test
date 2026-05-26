// Run: npm run js:largest-distance

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
