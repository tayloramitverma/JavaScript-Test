console.log(true && "abc");

console.log(false && "abc");

console.log(true || "abc");

console.log(false || "abc");

function a(start) {
  console.log("start");
  start++;
  return function () {
    console.log("in-side");
    start++;
    return start;
  };
}

var test = a(3);
console.log(test());
console.log(test());
console.log(test());
console.log(test());

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  });
}

var result = [];
for (var i = 0; i < 5; i++) {
  (function () {
    var i2 = i; // copy current i
    result.push(function () {
      return i2;
    });
  })();
}

var result1 = [];
for (let j = 0; j < 5; j++) {
  (function () {
    let i2 = j; // copy current i
    result1.push(function () {
      return i2;
    });
  })();
}

console.log(result[1]());
console.log(result1[4]());
