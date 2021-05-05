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

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myEven = arr.filter((num) => {
  if (num % 2 === 0) {
    return num;
  }
});

fetch("hdfgfd")
  .then((res) => {
    res.json();
  })
  .then((resData) => {
    //here can cll another one
    fetch("sdfsdf").then((res) => {
      return res;
    });
    return resData;
  })
  .catch((err) => console.log(err));

function foo() {
  console.log("First");
  setTimeout(function () {
    console.log("Second");
  }, 0);
  console.log("Third");
}

foo();

let emp = {
  name: "Aditya",
  salary: {
    fixed: 10000,
    variable: 1000,
  },
};

let newEmp = { ...emp };
