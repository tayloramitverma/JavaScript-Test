/**
 * THROTTLING — limits how often a function runs when events fire rapidly.
 *
 * Example: resizing the window fires many "resize" events per second.
 * Without throttling, handleWindowResize would run on every pixel change.
 * With throttling (5000ms here), it runs at most once every 5 seconds.
 *
 * Compare to debouncing: debounce waits until events STOP, then runs once.
 * Throttle runs on the first event, then ignores further events until the timer ends.
 */

// trottleFn returns a wrapped handler; only that returned function is passed to addEventListener.
window.addEventListener("resize", trottleFn(handleWindowResize, 5000));

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
