/**
 * Output prediction practice (uncomment one block at a time)
 * Run: npm run js:output-prediction
 *
 * Predict console output BEFORE running. Covers:
 * hoisting (var vs let), loop + closure, this binding, event loop order.
 */

console.log("=== 1. var hoisting (predict before uncomment) ===");
// console.log(a); // ?
// var a = 10;

console.log("=== 2. let TDZ ===");
// console.log(b); // ReferenceError
// let b = 10;

console.log("=== 3. closure in loop (let) — prints 0,1,2 ===");
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("let i:", i), 10);
}

console.log("=== 4. closure in loop (var) — often 3,3,3 ===");
for (var j = 0; j < 3; j++) {
  setTimeout(() => console.log("var j:", j), 20);
}

console.log("=== 5. this in object ===");
const obj = {
  x: 42,
  getX: function () {
    return this.x;
  },
  getXArrow: () => this,
};
console.log("method:", obj.getX());
console.log("arrow:", obj.getXArrow());

console.log("=== 6. event loop: sync → microtask → macrotask ===");
console.log("sync 1");
setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("microtask"));
console.log("sync 2");
