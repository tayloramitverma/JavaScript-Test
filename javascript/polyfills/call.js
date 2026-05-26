/**
 * Polyfill: Function.prototype.call
 * Run: npm run js:polyfill-call
 *
 * Temporarily attach function to context object, invoke, delete — sets `this`.
 */

const person = { firstname: "Amit", lastName: "Verma" };

function greet(city, country) {
  return `${this.firstname} ${this.lastName} from ${city}, ${country}`;
}

Function.prototype.myCall = function (context, ...args) {
  context = context ?? globalThis;
  const fnKey = Symbol("fn");
  context[fnKey] = this;
  const result = context[fnKey](...args);
  delete context[fnKey];
  return result;
};

console.log("native:", greet.call(person, "Pune", "India"));
console.log("polyfill:", greet.myCall(person, "Pune", "India"));
