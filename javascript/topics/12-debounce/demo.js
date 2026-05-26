/**
 * Debounce — run function only after events STOP for `delay` ms
 * Run: npm run js:debounce
 *
 * Use case: search input, form validation (wait until user pauses typing).
 *
 * vs Throttle (see browser/throttling.js): throttle = max once per window;
 * debounce = wait for quiet period, then run once (last call wins).
 *
 * Logic: each call clears previous timer and starts a new one.
 */

function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn.apply(this, args), delay);
  };
}

let callCount = 0;
const logSearch = debounce((query) => {
  callCount++;
  console.log(`API search #${callCount} for:`, query);
}, 400);

// Simulate rapid typing — only "javascript" triggers one API call
logSearch("j");
logSearch("ja");
logSearch("jav");
logSearch("java");
logSearch("javascript");

setTimeout(() => console.log("done — expect exactly 1 API call above"), 600);
