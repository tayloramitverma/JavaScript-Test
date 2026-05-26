/**
 * Polyfill: Function.prototype.apply
 * Run: npm run js:polyfill-apply
 *
 * Same as call but arguments passed as array (or array-like).
 */

const person = { firstname: "Amit", lastName: "Verma" };

function greet(city, country) {
  return `${this.firstname} ${this.lastName} from ${city}, ${country}`;
}

Function.prototype.myApply = function (context, args = []) {
  context = context ?? globalThis;
  const fnKey = Symbol("fn");
  context[fnKey] = this;
  const result = context[fnKey](...args);
  delete context[fnKey];
  return result;
};

console.log("native:", greet.apply(person, ["Pune", "India"]));
console.log("polyfill:", greet.myApply(person, ["Pune", "India"]));
