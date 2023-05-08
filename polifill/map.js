const numbers = [1, 2, 3, 4, 5];

const result = numbers.map((item) => item * 2);

console.log(result);

/**
 * Polyfill of Array Map
 * @param {*} callback
 * @returns
 */

Array.prototype.myMap = function (callback) {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }

  return newArr;
};

const myResult = numbers.myMap((item) => item * 2);

console.log(myResult);
