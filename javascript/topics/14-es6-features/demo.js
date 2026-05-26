/**
 * ES6+ syntax essentials for interviews
 * Run: npm run js:es6
 *
 * Covers: destructuring, rest/spread, default params, template literals,
 * optional chaining (?.), nullish coalescing (??), for...of, arrow vs regular `this`.
 */

const user = { name: "Amit", role: "dev", meta: { city: "Pune" } };

// Destructuring — pull properties into variables
const { name, role } = user;
const { city = "Unknown" } = user.meta;
console.log("destructure:", name, role, city);

// Rest (collect remaining) + spread (shallow copy / merge)
const { meta, ...rest } = user;
const clone = { ...user, active: true };
console.log("rest keys:", Object.keys(rest), "spread active:", clone.active);

// Default parameters — used when argument is undefined
function greet(msg = "Hello", who = "Guest") {
  return `${msg}, ${who}`;
}
console.log(greet(undefined, "Amit"));

// Template literals
console.log(`Hi ${name}, role: ${role}`);

// ?. stops if left side is null/undefined; ?? fallback only for null/undefined
console.log(user.meta?.zip ?? "no zip");

// for...of — iterate values of iterable (arrays, strings)
const nums = [10, 20, 30];
let sum = 0;
for (const n of nums) sum += n;
console.log("for...of sum:", sum);

// Arrow functions do NOT have own `this` — lexical from enclosing scope
const counter = {
  count: 0,
  incRegular: function () {
    setTimeout(function () {
      console.log("regular this.count:", this?.count);
    }, 10);
  },
  incArrow: function () {
    setTimeout(() => {
      this.count++;
      console.log("arrow this.count:", this.count);
    }, 20);
  },
};
counter.incRegular();
counter.incArrow();
