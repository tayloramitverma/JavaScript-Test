/**
 * The `this` keyword — binding rules (interview)
 * Run: npm run js:this
 *
 * Uncomment ONE section at a time and predict output before running.
 *
 * Rules:
 * - Global: `this` === global object (or undefined in modules/strict)
 * - obj.method(): `this` === obj
 * - Plain call fn(): `this` === global or undefined (strict)
 * - Arrow functions: lexical `this` from enclosing scope (NOT from call)
 * - call/apply/bind: force `this` to first argument
 */

"use strict";

// 1. this in global context
console.log("1. global this:", this);

// 2. this inside a plain function
// function doSome() {
//   console.log("2. plain fn this:", this);
// }
// doSome();

// 3. this inside arrow at top level (inherits lexical — often undefined in strict Node)
// const doSome2 = () => {
//   console.log("3. top-level arrow this:", this);
// };
// doSome2();

// 4. this inside an object method
// const person1 = {
//   name: "person1",
//   doSome: function () {
//     console.log("4. method this.name:", this.name);
//   },
// };
// person1.doSome();

// 5. Borrow method with call
// const person2 = { name: "person2" };
// person1.doSome.call(person2); // this === person2

// 6. Arrow as object method — `this` is NOT the object
// const person3 = {
//   name: "person3",
//   doSome: () => {
//     console.log("6. arrow method this:", this);
//   },
// };
// person3.doSome();

// 7. Nested plain function inside method — loses `this`
// const person4 = {
//   name: "person4",
//   doSome: function () {
//     console.log("7. outer this.name:", this.name);
//     function inner() {
//       console.log("7. inner this:", this); // not person4
//     }
//     inner();
//   },
// };
// person4.doSome();
