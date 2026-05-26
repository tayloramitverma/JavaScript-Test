const arr = [1, 2, 3, 4, 5];

const res1 = arr.map((item) => {
  return item >3;
});

console.log("res1", res1);

const res2 = arr.filter((item) => {
  return item >3;
});

console.log("res2", res2);

const res3 = arr.find((item) => {
  return item >3;
});

console.log("res3", res3);

const res4 = arr.reduce((acc, item) => {
  return acc + item;
}, 0);

console.log("res4", res4);

const res5 = arr.findIndex((item) => {
  return item > 3;
});

console.log("res5", res5);