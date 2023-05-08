/**
 * Call, Apply & Bind
 */
let Person = {
  firstname: "Amit",
  lastName: "Verma",
};

const getPerson = function (State, Country, ZipCode) {
  console.log(
    `First Name: ${this.firstname}, 
    Last Name: ${this.lastName}, 
    State: ${State}, 
    Country: ${Country}, 
    Zip Code: ${ZipCode}`
  );
};

getPerson.call(Person, "Rajasthan", "India", 302012);

getPerson.apply(Person, ["Rajasthan", "India", 302012]);

let boundFn = getPerson.bind(Person, "Rajasthan", "India");

console.log("boundFn:", boundFn);

boundFn(302012);

/**
 * Bind Polifill
 */

Function.prototype.mybind = function (...arg1) {
  let obj = this;
  let params = arg1.slice(1);
  return function (...arg2) {
    obj.apply(arg1[0], [...params, ...arg2]);
  };
};

let myBoundFn = getPerson.mybind(Person, "Rajasthan", "India");

myBoundFn(302012);
