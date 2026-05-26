# JavaScript Interview Prep Guide

Study guide based on your **js-learn1** through **js-learn4** practice folders, expanded with interview theory. Read topic-by-topic; each section links to what you already coded.

---

## Folder map (what you practiced)

| Folder | Files | Main topics |
|--------|-------|-------------|
| **js-learn1** | `basic.js`, `mutable-immutable.js`, `objects-cloning.js`, `callback.js`, `promise-basic.js`, `promise.js`, `throttling.js` | Falsy/truthy, closures, event loop, fetch, mutability, cloning, prototypes, callbacks, promises, throttle |
| **js-learn2** | `main.js` | Arrays, `Promise.all`, string/array interview problems (anagram, prime, palindrome, duplicates) |
| **js-learn3** | `main.js` | Scope, block scope, char frequency maps |
| **js-learn4** | `main.js`, `main1.js`, `main2.js` | Promises (`all`, `finally`), `this`, call/apply, `map` vs `filter` vs `find` vs `reduce` |

---

## Table of contents

1. [JavaScript execution phases](#1-javascript-execution-phases)
2. [Variable declaration: var, let, const](#2-variable-declaration-var-let-const)
3. [Hoisting & Temporal Dead Zone](#3-hoisting--temporal-dead-zone)
4. [Scope, closures & `this`](#4-scope-closures--this)
5. [call, apply, bind](#5-call-apply-bind)
6. [Shallow copy vs deep copy](#6-shallow-copy-vs-deep-copy)
7. [Mutable vs immutable](#7-mutable-vs-immutable)
8. [Array methods](#8-array-methods)
9. [Object methods & prototype](#9-object-methods--prototype)
10. [Promises & async](#10-promises--async)
11. [Event loop](#11-event-loop)
12. [Throttling vs debouncing](#12-throttling-vs-debouncing)
13. [Truthy, falsy & operators](#13-truthy-falsy--operators)
14. [Interview problems from your code](#14-interview-problems-from-your-code)
15. [Quick revision cheat sheet](#15-quick-revision-cheat-sheet)

---

## 1. JavaScript execution phases

When a script runs, the engine goes through **two main phases** for each scope (global or function):

### Phase 1: Creation (memory allocation)

- Creates a **Global Execution Context** (or function context).
- Sets up **Variable Environment** and **Lexical Environment**.
- Creates `this` binding (global: `window` in browser, `global` in Node).
- **Hoists** `var` and `function` declarations (see [§3](#3-hoisting--temporal-dead-zone)).
- `let` / `const` are hoisted but **not initialized** (TDZ until declaration line runs).

### Phase 2: Execution

- Runs code line by line.
- Assigns values, calls functions, runs callbacks.
- Each function call gets a **new execution context** on the **call stack**.

```text
┌─────────────────────────────────────┐
│  Creation: hoist, allocate memory   │
└─────────────────┬───────────────────┘
                  ▼
┌─────────────────────────────────────┐
│  Execution: run statements top-down │
└─────────────────────────────────────┘
```

**Interview one-liner:** *Creation sets up memory and bindings; execution runs the code and fills in values.*

Your `basic.js` **scope demo** (`scopeDemo`, `voo`, global `x`) shows how hoisted `var x` and function order affect what `console.log(x)` prints.

---

## 2. Variable declaration: var, let, const

| Feature | `var` | `let` | `const` |
|---------|-------|-------|---------|
| Scope | Function (or global) | Block `{}` | Block `{}` |
| Hoisting | Yes, initialized `undefined` | Yes, TDZ until line runs | Yes, TDZ |
| Reassign | Yes | Yes | No (binding locked) |
| Re-declare in same scope | Yes | No | No |
| Loop + `setTimeout` | One shared `i` → often prints `5` five times | New `i` per iteration → `0..4` | Same as `let` |

### `const` does NOT make objects immutable

From **js-learn1** `mutable-immutable.js`:

```javascript
const user = { name: "Amit" };
user.age = 31;        // OK — mutating the object
// user = {};         // Error — cannot rebind the variable
```

**Interview tip:** `const` = immutable **binding**, not immutable **value** for objects/arrays.

---

## 3. Hoisting & Temporal Dead Zone

**Hoisting:** Declarations are registered before the line runs; assignments happen at the line.

```javascript
console.log(x); // undefined (var hoisted, not yet assigned)
var x = 200;

console.log(y); // ReferenceError — TDZ
let y = 10;
```

**Function declarations** are fully hoisted (name + body):

```javascript
foo(); // works
function foo() { }
```

**Function expressions** follow `var`/`let` rules:

```javascript
bar(); // TypeError or ReferenceError depending on var vs let
var bar = function () { };
```

**TDZ (Temporal Dead Zone):** From start of block until `let`/`const` declaration — accessing the name throws `ReferenceError`.

Your **js-learn3** block `{ let myName = "Amit"; }` — `myName` outside that block is a different binding (or outer one).

---

## 4. Scope, closures & `this`

### Scope chain

Inner functions look up variables in: **local → outer function → … → global**.

### Closure

Inner function **remembers** variables from the outer scope even after the outer function returns.

From **js-learn1** `basic.js`:

```javascript
function makeCounter(start) {
  start++;
  return function () {
    start++;
    return start;
  };
}
var test = makeCounter(3);
test(); // 5, then 6, 7, 8 — same `start`
```

**Use cases:** private state, factories, module pattern, callbacks that need context.

### Fix: `var` in loop + async (classic interview)

```javascript
// Bad with var — one shared i
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 100); // often 5,5,5,5,5
}

// Good with let — new binding per iteration
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 100); // 0,1,2,3,4
}

// Fix var: IIFE captures copy
for (var i = 0; i < 5; i++) {
  (function () {
    var i2 = i;
    // use i2 in closure
  })();
}
```

### `this` — how it is set

| Context | `this` |
|---------|--------|
| Global (non-strict) | `window` / `global` |
| Global strict | `undefined` |
| Object method `obj.fn()` | `obj` |
| Plain function call | `undefined` (strict) or `window` |
| Arrow function | Lexical — from enclosing scope, **not** from call |
| `new Constructor()` | new empty object |
| `call` / `apply` / `bind` | first argument (or bound value) |

From **js-learn4** `main1.js`: arrow methods on objects **do not** get `this` = the object — they inherit outer `this` (often global).

```javascript
const person = {
  name: "person1",
  doSome: function () { console.log(this.name); },  // this === person
  doArrow: () => { console.log(this); },             // lexical this
};
person1.doSome.call(person2); // borrow method — this === person2
```

---

## 5. call, apply, bind

All three **set `this`** for a function. Difference is **when** it runs and **how** arguments are passed.

| Method | Invokes now? | Arguments | Returns |
|--------|--------------|-----------|---------|
| `call` | Yes | comma-separated: `fn.call(ctx, a, b)` | function result |
| `apply` | Yes | array: `fn.apply(ctx, [a, b])` | function result |
| `bind` | No | comma-separated (partial application) | **new** function with fixed `this` |

```javascript
function greet(greeting, punct) {
  return `${greeting}, ${this.name}${punct}`;
}
const user = { name: "Amit" };

greet.call(user, "Hi", "!");           // "Hi, Amit!"
greet.apply(user, ["Hello", "."]);     // "Hello, Amit."

const bound = greet.bind(user, "Hey");
bound("?");                             // "Hey, Amit?"
```

**When to use in interviews:**

- **call/apply:** borrow method (`Array.prototype.slice.call(arguments)`), invoke once with explicit `this`.
- **bind:** pass callback that must keep `this` (e.g. class method to `setTimeout`), partial application.

**Arrow functions:** `call`/`apply`/`bind` cannot change `this` on arrows — they ignore it.

---

## 6. Shallow copy vs deep copy

From **js-learn1** `objects-cloning.js` and `mutable-immutable.js`.

### Reference assignment (not a copy)

```javascript
let a = { x: 1 };
let b = a;
b.x = 2; // a.x is also 2 — same object in memory
```

### Shallow copy

New top-level object; **nested** objects/arrays still shared.

```javascript
const shallow = { ...emp };
// or
const shallow2 = Object.assign({}, emp);
```

| Technique | Depth | Notes |
|-----------|-------|-------|
| Spread `{...obj}` | Shallow | Plain own enumerable props |
| `Object.assign({}, obj)` | Shallow | Same idea for plain objects |
| `arr.slice()` / `[...arr]` | Shallow | New array, same element refs |

### Deep copy

Duplicates nested structure.

| Technique | Pros | Cons |
|-----------|------|------|
| `JSON.parse(JSON.stringify(obj))` | Simple | No functions, `undefined`, `Symbol`, `Date` as string, no circular refs |
| `structuredClone(obj)` | Built-in, Date/Map/Set | No functions, DOM nodes |
| Recursive clone / library (lodash) | Full control | You implement edge cases |

**Mental model after mutating nested `salary`:**

```text
emp ──────────────┐
newAssignOp ──────┤ same object
newObjAssign ─────┤ shallow: own keys copied, salary shared
newDeepEmp ───────┘ fully separate tree
```

**Interview answer:** *Shallow = one level new; deep = all levels new references.*

---

## 7. Mutable vs immutable

| Type | Mutable? | Stored as |
|------|----------|-----------|
| number, string, boolean, null, undefined, bigint, symbol | No (primitives) | Value |
| object, array, function | Yes | Reference |

**Immutable-style updates** (React-friendly):

```javascript
const updated = todos.map(t =>
  t.id === 1 ? { ...t, done: true } : t
);
const added = [...todos, newTodo];
const removed = todos.filter(t => t.id !== 1);
```

**`Object.freeze(obj)`** — shallow only; nested objects still mutable.

---

## 8. Array methods

From **js-learn4** `main2.js` and **js-learn1** `basic.js`.

| Method | Returns | Mutates? | Use |
|--------|---------|----------|-----|
| `map` | New array (same length) | No | Transform each item |
| `filter` | New array (subset) | No | Keep items where callback is truthy |
| `find` | First match or `undefined` | No | One element |
| `findIndex` | Index or `-1` | No | Position of match |
| `reduce` | Single accumulated value | No | Sum, group, flatten |
| `forEach` | `undefined` | No* | Side effects only |
| `some` / `every` | boolean | No | Any / all pass test |
| `includes` | boolean | No | Value exists |
| `sort` | Same array reference | **Yes** | Sort in place |
| `push` / `pop` / `splice` | varies | **Yes** | Mutate |

```javascript
[1, 2, 3, 4, 5].map(x => x > 3);    // [false, false, false, true, true]
[1, 2, 3, 4, 5].filter(x => x > 3); // [4, 5]
[1, 2, 3, 4, 5].find(x => x > 3);   // 4
[1, 2, 3, 4, 5].reduce((a, x) => a + x, 0); // 15
```

**`filter` trap:** Return **boolean** (or truthy/falsy). `return num` for even numbers works because even numbers are truthy, but `return num % 2 === 0` is clearer.

### Useful patterns from **js-learn2**

```javascript
// Frequency map
counts[element] = counts[element] + 1 || 1;
// or
counts[element] = (counts[element] ?? 0) + 1;
```

---

## 9. Object methods & prototype

From **js-learn1** `objects-cloning.js`.

### Property lookup

```text
instance → Constructor.prototype → Object.prototype → null
```

### Constructor + `new`

`new Person("Amit")` roughly:

1. Create object with `[[Prototype]]` = `Person.prototype`
2. Run `Person` with `this` = that object
3. Return object (unless constructor returns another object)

**Best practice:** Put methods on `Person.prototype`, not inside constructor (one shared function vs one per instance).

### `class` syntax

Syntactic sugar over constructor + prototype; methods on class body go on **prototype** (except fields/arrow instance methods you define in constructor).

### Common static methods

| API | Purpose |
|-----|---------|
| `Object.keys(obj)` | Own enumerable keys |
| `Object.values(obj)` | Own values |
| `Object.entries(obj)` | `[key, value]` pairs |
| `Object.assign(target, ...sources)` | Shallow merge |
| `Object.create(proto)` | New object with given prototype |
| `Object.freeze` / `seal` | Restrict mutability (shallow for freeze) |
| `hasOwnProperty(key)` | Own vs inherited |

---

## 10. Promises & async

### Promise states

| State | Meaning |
|-------|---------|
| **pending** | Not settled yet |
| **fulfilled** | `resolve(value)` ran |
| **rejected** | `reject(reason)` ran |

Settled = fulfilled or rejected (only once).

### Creating a promise

From **js-learn1** `promise-basic.js`:

```javascript
new Promise((resolve, reject) => {
  if (success) resolve(data);
  else reject("error message");
});
```

### Chaining

```javascript
fetch(url)
  .then(res => res.json())  // must RETURN next promise/value
  .then(data => { ... })
  .catch(err => { ... })
  .finally(() => { ... });  // always runs
```

**Rule:** If you forget `return` inside `.then`, the next `.then` gets `undefined`.

### async / await

Syntactic sugar over promises.

```javascript
async function harry() {
  const response = await fetch(url);
  const users = await response.json();
  return users;
}
const a = harry(); // a is a Promise
a.then(data => console.log(data));
```

- `async` function **always** returns a Promise.
- `await` pauses **inside** that function only; other sync code still runs.
- Use `try/catch` for errors with `await`.

From **js-learn1** `promise-basic.js` order: *Before calling → After calling → Last line → Inside harry → users resolved* (microtasks after sync stack).

### Promise combinator methods (types)

| Method | Resolves when | Rejects when | Typical use |
|--------|---------------|--------------|-------------|
| `Promise.all([p1,p2])` | **All** fulfill | **Any** rejects | Parallel tasks, need all results |
| `Promise.allSettled([...])` | Always (all done) | Never (per-promise status) | Audit success + failure |
| `Promise.race([...])` | First settle (win or lose) | First rejection if that's first | Timeout pattern |
| `Promise.any([...])` | First **fulfill** | All rejected | First success |

```javascript
// js-learn4 / js-learn2 pattern
const promises = ids.map(id => fetchRecords(id));
Promise.all(promises)
  .then(results => { /* array of all data */ })
  .catch(err => { /* one failed */ });
```

**`Promise.all` vs parallel `await`:**

```javascript
// Parallel
await Promise.all([fetch(1), fetch(2)]);

// Sequential (slower)
await fetch(1);
await fetch(2);
```

### Evolution: callback → Promise → async/await

| Pattern | File | Issue |
|---------|------|-------|
| Callback | `callback.js` | Callback hell, hard error handling |
| Promise | `promise-basic.js`, `promise.js` | Flattened chain |
| async/await | `promise.js` `wordGIF` | Reads like sync code |

**js-learn1** `callback.js`: `enrollStudent(student, getStudents)` — second action only after first finishes (async control flow).

---

## 11. Event loop

From **js-learn1** `basic.js`.

```javascript
console.log("First");
setTimeout(() => console.log("Second"), 0);
console.log("Third");
// First → Third → Second
```

### Queues (simplified)

```text
┌──────────────┐     ┌─────────────────┐     ┌──────────────┐
│  Call stack  │ ──► │  Microtasks     │ ──► │  Macrotasks  │
│  (sync code) │     │  (Promises,     │     │  (setTimeout,│
│              │     │   queueMicrotask)│     │   I/O, UI)   │
└──────────────┘     └─────────────────┘     └──────────────┘
```

1. Run sync until stack empty.
2. Drain **all** microtasks (promise `.then`, `await` continuations).
3. Run **one** macrotask (e.g. `setTimeout`).
4. Repeat.

**Interview:** `setTimeout(fn, 0)` is not immediate — it waits until stack clears and microtasks run.

---

## 12. Throttling vs debouncing

From **js-learn1** `throttling.js`.

| Pattern | Behavior | Example |
|---------|----------|---------|
| **Throttle** | Run at most once per window; first call often immediate | Scroll, resize, button spam |
| **Debounce** | Wait until events **stop**, then run once | Search input, form validation |

Your throttle uses a **flag + setTimeout** to reopen the gate after `timer` ms.

```javascript
function throttleFn(callbackFn, timer) {
  let flag = true;
  return function () {
    if (flag) {
      callbackFn();
      flag = false;
      setTimeout(() => { flag = true; }, timer);
    }
  };
}
```

**Debounce sketch:**

```javascript
function debounce(fn, delay) {
  let id;
  return function (...args) {
    clearTimeout(id);
    id = setTimeout(() => fn.apply(this, args), delay);
  };
}
```

---

## 13. Truthy, falsy & operators

From **js-learn1** `basic.js`.

### Only 8 falsy values

`false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`

Everything else is truthy — including `"0"`, `"false"`, `[]`, `{}`, `function(){}`.

### `&&` and `||` (short-circuit)

Return **operands**, not always booleans:

```javascript
true && "abc";   // "abc"
false || "default"; // "default"
0 || 99;         // 99
```

### Nullish coalescing `??`

Fallback only for `null` / `undefined` (not for `0` or `""`):

```javascript
0 ?? 99;        // 0
null ?? "x";    // "x"
```

### Double bang `!!`

Convert to boolean: `!!"hello"` → `true`.

---

## 14. Interview problems from your code

### Largest gap between two occurrences of character Y

**js-learn2** — walk with `indexOf` from last position:

```javascript
function largestDistance(X, Y) {
  let last = X.indexOf(Y);
  let maxDistance = -1;
  while (last !== -1) {
    const next = X.indexOf(Y, last + 1);
    if (next !== -1) {
      maxDistance = Math.max(maxDistance, next - last - 1);
    }
    last = next;
  }
  return maxDistance;
}
```

### Distinct elements that appear more than once

**js-learn2** — frequency map, then filter `count > 1`, sort if needed.

### Anagram check

Normalize: remove non-word chars, lowercase, compare lengths, compare char counts.

```javascript
const norm = s => s.replace(/[^\w]/g, "").toLowerCase();
// compare charMap1[char] === charMap2[char] for every char
```

### Prime / nth prime

Test divisors up to `Math.sqrt(num)`; nth prime = increment `num` until count reaches n.

### Palindrome

Two pointers from ends, or compare string to reversed string (watch spaces/case).

### Two sum pairs

**js-learn2** — nested loops O(n²); optimal hash map O(n): for each `x`, check if `target - x` seen.

### Merge sorted arrays / duplicates

Your `getCombine` — typical follow-up: two-pointer merge, or sort combined array.

### Char frequency & duplicates (**js-learn3**)

```javascript
myMap[ele] = myMap[ele] + 1 || 1;
// duplicates: Object.entries(myMap).filter(([, c]) => c > 1)
```

---

## 15. Quick revision cheat sheet

```text
Phases:     Creation → Execution
var/let:    function scope vs block; loop + setTimeout
this:       call site; arrow = lexical
call/apply: invoke now | bind: later
Copy:       = ref | spread/assign shallow | structuredClone deep
const:      binding frozen, object can mutate
Promise:    pending → fulfilled | rejected (once)
all:        all win or one fail
Event loop: sync → microtasks → macrotask
Throttle:   max rate | Debounce: wait for pause
Falsy:      8 values only
```

---

## Suggested study order (before interview)

1. Phases, hoisting, var/let/const, closures (**js-learn1** `basic.js`, **js-learn3**)
2. `this` + call/apply/bind (**js-learn4** `main1.js`)
3. Shallow/deep copy + mutability (**js-learn1** cloning + mutable files)
4. Array/object methods (**js-learn4** `main2.js`)
5. Promises, `Promise.all`, async/await (**js-learn1**, **js-learn4**)
6. Event loop + throttle (**js-learn1**)
7. Re-do **js-learn2** problems without looking at solutions

---

## Practice checklist

- [ ] Explain output of `var` vs `let` loop with 3 `setTimeout`s
- [ ] Implement `bind` polyfill in 5 lines
- [ ] Show shallow vs deep copy with nested `address` object
- [ ] Write `Promise.all` vs `allSettled` behavior in one sentence each
- [ ] Order logs: sync → promise `.then` → `setTimeout(0)`
- [ ] Implement throttle and debounce from memory
- [ ] `map` vs `filter` vs `reduce` with one example each
- [ ] Anagram + duplicate frequency problems in 10 minutes

Good luck with your interview.
