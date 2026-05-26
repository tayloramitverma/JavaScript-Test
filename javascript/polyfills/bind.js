/**
 * call, apply, bind usage + bind polyfill
 * Run: npm run js:polyfill-bind
 *
 * call(ctx, a, b)   — invoke now, comma args
 * apply(ctx, [args]) — invoke now, array args
 * bind(ctx, ...partial) — returns NEW function with fixed this + partial args
 *
 * Polyfill pattern: return wrapper that calls original with apply + merged args.
 */

let Person = {
  firstname: "Amit",
  lastName: "Verma",
};

const getPerson = function (State, Country, ZipCode) {
  console.log(
    `${this.firstname} ${this.lastName}, ${State}, ${Country}, ${ZipCode}`
  );
};

console.log("--- native call / apply / bind ---");
getPerson.call(Person, "Rajasthan", "India", 302012);
getPerson.apply(Person, ["Rajasthan", "India", 302012]);

const boundFn = getPerson.bind(Person, "Rajasthan", "India");
boundFn(302012);

Function.prototype.myBind = function (context, ...partialArgs) {
  const fn = this;
  return function (...laterArgs) {
    return fn.apply(context, [...partialArgs, ...laterArgs]);
  };
};

console.log("--- myBind ---");
getPerson.myBind(Person, "Rajasthan", "India")(302012);
