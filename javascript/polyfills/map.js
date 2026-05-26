/**
 * Polyfill: Array.prototype.map
 * Run: npm run js:polyfill-map
 *
 * map(callback) → new array, same length; callback(value, index, array).
 * Does NOT mutate original array.
 */

const numbers = [1, 2, 3, 4, 5];

console.log("native map:", numbers.map((item) => item * 2));

Array.prototype.myMap = function (callback) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }
  return newArr;
};

console.log("myMap:", numbers.myMap((item) => item * 2));
