/**
 * Core JavaScript concepts (interview essentials)
 * Run: npm run js:core
 *
 * Topics in this file:
 * - Falsy vs truthy (8 falsy values only)
 * - &&, ||, ?? short-circuit (return operands, not always booleans)
 * - Closures (makeCounter)
 * - var vs let in loops + setTimeout
 * - Scope chain & hoisting (scopeDemo / voo)
 * - Event loop (sync before setTimeout)
 * - fetch + promise chaining (return inner promises)
 */

// =============================================================================
// FALSY VALUES — only these 8 values are falsy in Boolean context (if, &&, ||, !)
// Everything else is truthy (including "0", "false", [], {}, function() {})
// =============================================================================
//
//   false
//   0
//   -0
//   0n          (BigInt zero)
//   ""          (empty string)
//   null
//   undefined
//   NaN

// =============================================================================
// LOGICAL OPERATORS — short-circuit evaluation (result is not always true/false)
// =============================================================================

console.log(true && "abc"); // "abc"  — both truthy → returns last value
console.log(false && "abc"); // false  — stops at first falsy
console.log(true || "abc"); // true   — stops at first truthy
console.log(false || "abc"); // "abc"  — first falsy, returns second

console.log(0 && "abc"); // 0        — 0 is falsy, never reaches "abc"
console.log("" && "abc"); // ""       — empty string is falsy
console.log(null && "abc"); // null
console.log("hi" && 42); // 42       — both truthy → last value

console.log(0 || "default"); // "default"
console.log("" || "default"); // "default"
console.log(null || "fallback"); // "fallback"
console.log("user" || "guest"); // "user"   — first truthy wins

// Nullish coalescing (??) — only null/undefined trigger fallback (not 0 or "")
console.log(null ?? "default"); // "default"
console.log(undefined ?? "default"); // "default"
console.log(0 ?? 99); // 0          — 0 is NOT nullish
console.log("" ?? "empty"); // ""         — "" is NOT nullish

console.log(!"hello"); // false    — logical NOT → boolean
console.log(!!"hello"); // true     — double NOT → truthy as boolean

// =============================================================================
// Array.filter — keeps items where callback returns truthy
// =============================================================================

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myEven = arr.filter((num) => {
  if (num % 2 === 0) {
    return num; // truthy → kept (return true is clearer; this works the same)
  }
  // odd numbers: implicit return undefined → falsy → filtered out
});
console.log("myEven", myEven);

// =============================================================================
// CLOSURE — inner function remembers `start` from outer scope
// =============================================================================

function makeCounter(start) {
  console.log("start");
  start++;
  return function () {
    console.log("in-side");
    start++; // same `start` variable, updated each call
    return start;
  };
}

var test = makeCounter(3);
console.log(test()); // 5
console.log(test()); // 6
console.log(test()); // 7
console.log(test()); // 8

// =============================================================================
// let vs var in loops + setTimeout (classic interview topic)
// =============================================================================

// `let` — new binding each iteration → closures capture 0,1,2,3,4
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log("let i:", i);
  }, 100);
}

// `var` — one shared `i` → by the time callbacks run, i is often 5
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log("var i:", i);
  });
}

// Fix for var: IIFE captures a copy of i per iteration
var result = [];
for (var i = 0; i < 5; i++) {
  (function () {
    var i2 = i; // copy current i into this closure's scope
    result.push(function () {
      return i2;
    });
  })();
}

var result1 = [];
for (let j = 0; j < 5; j++) {
  (function () {
    let i2 = j;
    result1.push(function () {
      return i2;
    });
  })();
}

console.log("result[1]", result[1]()); // 1
console.log("result1[4]", result1[4]()); // 4

// =============================================================================
// SCOPE & HOISTING — var vs function vs outer global
// =============================================================================

function scopeDemo() {
  var x = 100; // function-scoped; shadows global `x` inside scopeDemo
  console.log(x); // 100
  (function inner() {
    console.log(x); // 100 — inner IIFE sees scopeDemo's x
  })();
  voo(); // voo has no local x → uses global x (200)
  console.log(x); // 100 — scopeDemo's x unchanged by voo
}

function voo() {
  console.log(x); // global x (var x is hoisted; assignment runs before scopeDemo call)
}

var x = 200;
console.log(x); // 200
scopeDemo(); // 100, 100, 200, 100
console.log(x); // 200

// =============================================================================
// EVENT LOOP — synchronous code runs before setTimeout (even with 0ms delay)
// =============================================================================

function eventLoopDemo() {
  console.log("First");
  setTimeout(function () {
    console.log("Second"); // macrotask — runs after current stack clears
  }, 0);
  console.log("Third");
}

eventLoopDemo(); // First → Third → Second

// =============================================================================
// fetch — returns a Promise; chain with .then / .catch
// =============================================================================

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => {
    return res.json(); // must RETURN the promise from json(), or next .then gets undefined
  })
  .then((resData) => {
    console.log("todos count", resData?.length);

  // nested fetch — return inner promise if you want to chain on its result
    return fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
      return res.json();
    });
  })
  .then((singleTodo) => {
    console.log("single todo", singleTodo);
  })
  .catch((err) => console.log("fetch error", err));
