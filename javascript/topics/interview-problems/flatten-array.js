/**
 * Flatten nested array to given depth
 * Run: npm run js:flatten-array
 *
 * Approach: reduce — if item is array and depth > 0, recurse; else push value.
 * depth Infinity flattens fully. Native: arr.flat(depth).
 */

function flattenArray(arr, depth = 1) {
  if (depth <= 0) return arr.slice();

  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc.push(...flattenArray(item, depth - 1));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}

const nested = [1, [2, [3, 4]], 5];
console.log("depth 1:", flattenArray(nested, 1));
console.log("depth 2:", flattenArray(nested, 2));
console.log("Infinity:", flattenArray(nested, Infinity));
