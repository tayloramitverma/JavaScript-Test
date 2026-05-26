/**
 * Promises and async/await — states and execution order
 * Run: npm run js:promise-basics
 *
 * Promise states: pending → fulfilled (resolve) OR rejected (reject). Settled = done.
 *
 * Watch order for async function `harry()`:
 *   Before calling → After calling → Last line → Inside harry → before response
 *   → users resolved → .then on returned promise
 *
 * Key: async function ALWAYS returns a Promise. `await` pauses inside that function only.
 */

function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = true; // flip to false to see resolve path
      if (!error) {
        console.log("func1: resolved");
        resolve();
      } else {
        console.log("func1: rejected");
        reject("Sorry not fulfilled");
      }
    }, 2000);
  });
}

func1()
  .then(() => console.log("then: Thanks for resolving"))
  .catch((error) => console.log("catch: Reason:", error));

async function harry() {
  console.log("Inside harry");
  const response = await fetch("https://api.github.com/users");
  console.log("before response (after await fetch)");
  const users = await response.json();
  console.log("users resolved");
  return users;
}

console.log("Before calling harry");
let a = harry(); // returns Promise immediately
console.log("After calling harry — a is a Promise:", typeof a.then === "function");
a.then((data) => console.log("users length:", data?.length));
console.log("Last line of file (sync stack ends, then microtasks)");
