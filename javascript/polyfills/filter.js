const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getEvenNumber = function (item) {
  if (item % 2 === 0) {
    return item;
  } else {
    return;
  }
};

const filterRes = arr.filter(getEvenNumber);
console.log(filterRes);

/**
 * Pulifill of array filter method
 * @param {*} callback
 * @param {*} context
 * @returns
 */

Array.prototype.myFilter = function (callback, context) {
  console.log("callback", callback);
  console.log("context", context);
  const newArr = [];
  for (var i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

const myFilterRes = arr.myFilter((item, index, items) => {
  console.log("item", item, index, items);
}, "args");
console.log(myFilterRes);
