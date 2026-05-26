/**
 * Polyfill: Array.prototype.filter
 * Run: npm run js:polyfill-filter
 *
 * filter(callback) → new array with items where callback returns truthy.
 * Optional: callback.call(context, item, i, arr) for custom `this`.
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getEvenNumber = (item) => item % 2 === 0;

console.log("native filter:", arr.filter(getEvenNumber));

Array.prototype.myFilter = function (callback, context) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

console.log("myFilter:", arr.myFilter(getEvenNumber));
