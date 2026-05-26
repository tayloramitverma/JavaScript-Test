/**
 * Polyfill: Array.prototype.reduce
 * Run: npm run js:polyfill-reduce
 *
 * reduce(callback, initialValue) → single accumulated value.
 * callback(accumulator, currentValue, index, array).
 *
 * If no initialValue: use first element as accumulator, start loop at index 1.
 */

const numbers = [1, 2, 3, 4, 5];

console.log(
  "native reduce:",
  numbers.reduce((acc, n) => acc + n, 0)
);

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator;
  let startIndex = 0;

  if (arguments.length >= 2) {
    accumulator = initialValue;
  } else {
    if (this.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

console.log(
  "myReduce:",
  numbers.myReduce((acc, n) => acc + n, 0)
);
