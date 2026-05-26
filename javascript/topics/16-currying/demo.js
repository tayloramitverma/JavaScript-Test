/**
 * Currying — transform f(a,b,c) into f(a)(b)(c)
 * Run: npm run js:currying
 *
 * Benefits: partial application, reusable specialized functions.
 * Logic: if enough args collected, call fn; else return function waiting for more.
 */

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return (...next) => curried(...args, ...next);
  };
}

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

console.log("curried:", curriedAdd(1)(2)(3));
console.log("partial:", curriedAdd(1, 2)(3));

// Practical: pre-fill first arguments of a generic filter
const filterBy = curry((key, value, list) =>
  list.filter((item) => item[key] === value)
);

const filterByRole = filterBy("role");
const devs = filterByRole("dev", [
  { name: "A", role: "dev" },
  { name: "B", role: "hr" },
  { name: "C", role: "dev" },
]);
console.log("devs:", devs.map((d) => d.name));
