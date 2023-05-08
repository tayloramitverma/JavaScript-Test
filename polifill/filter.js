const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getEvenNum = function (item) {
  if (item % 2 === 0) {
    return item;
  } else {
    return;
  }
};

const filterRes = numArray.filter(getEvenNum);
console.log(filterRes);

Array.prototype.myFilter = function (callback, context) {
  const arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

const myFilterRes = numArray.myFilter((item, index, items) => {
  console.log("item", item);
  console.log("index", index);
  console.log("items", items);
}, "args");
console.log(myFilterRes);
