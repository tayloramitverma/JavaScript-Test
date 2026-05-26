/**
 * Memoization — cache function results by arguments
 * Run: npm run js:memoization
 *
 * Use when: expensive pure function called repeatedly with same inputs (e.g. fib).
 * Trade-off: memory for speed. Key = serialized args (JSON.stringify here).
 */

function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

function slowFib(n) {
  if (n <= 1) return n;
  return slowFib(n - 1) + slowFib(n - 2);
}

const fastFib = memoize(slowFib);

console.time("fib-35-first");
console.log("fib(35):", fastFib(35));
console.timeEnd("fib-35-first");

console.time("fib-35-cached");
console.log("fib(35) cached:", fastFib(35));
console.timeEnd("fib-35-cached");
