/**
 * Mutable vs immutable in JavaScript
 * Run: npm run js:mutable
 *
 * Immutable → primitives (number, string, etc.): reassign = new value.
 * Mutable     → objects/arrays: change in place via same reference.
 *
 * Important: `const` only stops REBINDING the variable, not mutating the object.
 *
 * Also covers: shallow copy vs shared nested refs, immutable-style updates (spread/map),
 * Object.freeze (shallow only).
 */

console.log("========== PRIMITIVES (immutable) ==========");

// Primitives are stored by VALUE. Changing them never mutates the old value in memory.

let a = 10;
let b = a; // b gets a copy of the value 10
b = 20; // only b changes; a is still 10

console.log("numbers", { a, b }); // a: 10, b: 20

let greeting = "Hello";
greeting.toUpperCase(); // returns "HELLO" — does NOT change greeting
console.log("string unchanged", greeting); // "Hello"

// "Changing" a string actually creates a new string:
let word = "cat";
word = word + "s"; // new string assigned to `word`; old "cat" is discarded
console.log("new string", word); // "cats"

// Same idea for boolean, null, undefined, bigint, symbol:
let flag = true;
flag = false; // reassign variable to a new value — not mutating `true` itself

// =============================================================================
// REFERENCE TYPES (mutable by default)
// =============================================================================

console.log("\n========== OBJECTS & ARRAYS (mutable) ==========");

const user = { name: "Amit", age: 30 };

// const blocks rebinding, NOT mutation:
// user = { name: "Other" }; // ❌ TypeError: Assignment to constant variable

user.age = 31; // ✅ OK — same object, property changed in place
user.city = "Pune";

console.log("mutated user", user);

const scores = [10, 20, 30];
scores.push(40); // mutates the same array
scores[0] = 99;

console.log("mutated scores", scores);

// Copying a reference — two variables, ONE object:
const original = { count: 1 };
const alias = original;

alias.count = 100;

console.log("shared reference", { original, alias }); // both { count: 100 }

// =============================================================================
// SHALLOW COPY — outer shell new, nested may still be shared
// =============================================================================

console.log("\n========== COPYING vs MUTATING ==========");

const emp = {
  name: "Vikash",
  address: { city: "Delhi" },
};

const shallowCopy = { ...emp };

shallowCopy.name = "Suraj"; // only shallowCopy.name changes
emp.address.city = "Mumbai"; // nested object is SHARED — both see Mumbai

console.log("emp", emp);
console.log("shallowCopy", shallowCopy);

// Deep copy if you need full independence:
const deepCopy = structuredClone(emp);
deepCopy.address.city = "Bangalore";

console.log("after deep copy change", {
  empCity: emp.address.city, // Mumbai
  deepCity: deepCopy.address.city, // Bangalore
});

// =============================================================================
// let vs const — binding mutability, not value mutability
// =============================================================================

console.log("\n========== let vs const ==========");

let counter = 0;
counter = 1; // ✅ reassign with let

const MAX = 100;
// MAX = 200; // ❌ cannot reassign const

const list = [1, 2, 3];
list.push(4); // ✅ mutating contents is allowed

// =============================================================================
// PATTERNS THAT AVOID MUTATION (immutable style)
// =============================================================================

console.log("\n========== IMMUTABLE-STYLE UPDATES ==========");

const todos = [
  { id: 1, text: "Learn JS", done: false },
  { id: 2, text: "Practice", done: false },
];

// Instead of: todos[0].done = true (mutates)
// Create new array + new objects:

const updatedTodos = todos.map((todo) =>
  todo.id === 1 ? { ...todo, done: true } : todo
);

console.log("original todos[0].done", todos[0].done); // false
console.log("updatedTodos[0].done", updatedTodos[0].done); // true

// Add item without .push (no mutation):
const moreTodos = [...todos, { id: 3, text: "Review", done: false }];

// Remove item without .splice:
const withoutFirst = todos.filter((t) => t.id !== 1);

console.log("moreTodos length", moreTodos.length);
console.log("withoutFirst length", withoutFirst.length);

// =============================================================================
// freeze — make an object shallowly immutable
// =============================================================================

console.log("\n========== Object.freeze (shallow) ==========");

const config = Object.freeze({
  apiUrl: "https://api.example.com",
  retries: 3,
});

// config.retries = 5; // silent fail in non-strict / TypeError in strict mode
// config.newKey = "x"; // not added

const nested = Object.freeze({
  settings: { theme: "dark" },
});

// nested.settings is NOT frozen — inner object can still mutate:
nested.settings.theme = "light";
console.log("nested.settings.theme", nested.settings.theme); // "light"

// =============================================================================
// SUMMARY
// =============================================================================
//
// | Kind              | Mutable? | Notes                                      |
// |-------------------|----------|--------------------------------------------|
// | number, string,   | No       | Reassign variable = new value              |
// | boolean, etc.     |          |                                            |
// | object, array     | Yes      | Change in place unless you copy/freeze     |
// | const             | —        | Immutable binding, not immutable value     |
// | spread / map      | —        | Common pattern for immutable-style updates |
// | Object.freeze     | Partial  | Shallow only; nested objects still mutable |
