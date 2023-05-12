console.log(true && "abc"); //abc
console.log(false && "abc"); //false
console.log(true || "abc"); //true
console.log(false || "abc"); //abc

/**
 * Filter
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myEven = arr.filter((num) => {
  if (num % 2 === 0) {
    return num;
  }
});

/**
 *
 */

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

/**
 *
 */

function foo() {
  var x = 100;
  console.log(x);
  (function too() {
    console.log(x);
  })();
  voo();
  console.log(x);
}

function voo() {
  console.log(x);
}

var x = 200;
console.log(x); //200
foo(); // 100 100 200 100
console.log(x);
200;

/**
 *
 */

function foo() {
  console.log("First");
  setTimeout(function () {
    console.log("Second");
  }, 0);
  console.log("Third");
}

foo();

/**
 * Fetch
 */

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => {
    res.json();
  })
  .then((resData) => {
    //here can cll another one
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
      return res;
    });
    return resData;
  })
  .catch((err) => console.log(err));
