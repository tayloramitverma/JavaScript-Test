const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum);

/**
 * Polyfill of Array Reduce
 * @param {*} callback
 * @param {*} initialValue
 * @returns
 */

Array.prototype.myReduce = function (callback, initialValue = null) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

const mySum = numbers.myReduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(mySum); // Output: 15
