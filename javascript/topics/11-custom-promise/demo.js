/**
 * Custom Promise (simplified — interview subset, not full spec)
 * Run: npm run js:custom-promise
 *
 * Implements: pending | fulfilled | rejected, .then(), .catch().
 * Missing vs real Promise: assimilation, microtask timing, full spec edge cases.
 *
 * Pattern: store callback queues; on resolve/reject, flush callbacks.
 */

class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state !== "pending") return;
      this.state = "fulfilled";
      this.value = value;
      this.onFulfilledCallbacks.forEach((fn) => fn(value));
    };

    const reject = (reason) => {
      if (this.state !== "pending") return;
      this.state = "rejected";
      this.reason = reason;
      this.onRejectedCallbacks.forEach((fn) => fn(reason));
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const handle = () => {
        try {
          if (this.state === "fulfilled") {
            const result = onFulfilled ? onFulfilled(this.value) : this.value;
            resolve(result);
          } else if (this.state === "rejected") {
            if (onRejected) {
              resolve(onRejected(this.reason));
            } else {
              reject(this.reason);
            }
          }
        } catch (err) {
          reject(err);
        }
      };

      if (this.state === "pending") {
        this.onFulfilledCallbacks.push(handle);
        this.onRejectedCallbacks.push(handle);
      } else {
        queueMicrotask(handle);
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

new MyPromise((resolve) => {
  setTimeout(() => resolve("done"), 500);
})
  .then((v) => {
    console.log("fulfilled:", v);
    return v + "!";
  })
  .then((v) => console.log("chained:", v));

new MyPromise((_, reject) => {
  setTimeout(() => reject("oops"), 300);
})
  .catch((e) => console.log("caught:", e));

setTimeout(() => console.log("--- custom promise demo done ---"), 600);
