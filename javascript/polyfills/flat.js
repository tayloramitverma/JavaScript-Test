/**
 * Polyfill: Array.prototype.flat(depth)
 * Run: npm run js:polyfill-flat
 *
 * Flattens nested arrays up to `depth` levels (default 1).
 */

Array.prototype.myFlat = function (depth = 1) {
  const result = [];

  const flatten = (arr, currentDepth) => {
    for (const item of arr) {
      if (Array.isArray(item) && currentDepth > 0) {
        flatten(item, currentDepth - 1);
      } else {
        result.push(item);
      }
    }
  };

  flatten(this, depth);
  return result;
};

const nested = [1, [2, [3, [4]]]];
console.log("native flat(2):", nested.flat(2));
console.log("myFlat(2):", nested.myFlat(2));
