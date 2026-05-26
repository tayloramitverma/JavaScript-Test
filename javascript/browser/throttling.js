/**
 * Throttling — limit how often a handler runs (browser demo)
 * Open: throttling.html — resize window and watch console
 *
 * Throttle: first call runs immediately, then ignore until cooldown (5000ms here).
 * Debounce (see debounce.js): wait until events stop, then run once.
 *
 * Run: attach returned function to addEventListener — do NOT call handleWindowResize directly.
 */
window.addEventListener("resize", throttleFn(handleWindowResize, 5000));

function handleWindowResize() {
  console.log("I'm working now!");
}

/**
 * @param {Function} callbackFn - The work you want to run (e.g. log, API call, layout update).
 * @param {number} timer - Minimum milliseconds between allowed executions.
 * @returns {Function} A new function that enforces the throttle when called repeatedly.
 */
function throttleFn(callbackFn, timer) {
  // "Gate" — when true, the next call is allowed; when false, calls are ignored.
  let flag = true;

  return function () {
    if (flag) {
      callbackFn(); // Run immediately on the first call (or first call after cooldown).
      flag = false; // Block further calls until the timer resets the gate.

      setTimeout(() => {
        flag = true; // After `timer` ms, allow the next execution.
      }, timer);
    }
    // If flag is false, this invocation does nothing (event is dropped).
  };
}
