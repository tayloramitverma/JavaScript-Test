/**
 * Event emitter (pub/sub pattern)
 * Run: npm run js:event-emitter
 *
 * API: on(event, fn), off(event, fn), emit(event, ...args), once(event, fn)
 * Use case: decouple components (UI events, Node EventEmitter, custom buses).
 *
 * Logic: events object maps event name → array of listeners.
 */

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(listener);
    return () => this.off(event, listener);
  }

  off(event, listener) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter((fn) => fn !== listener);
  }

  emit(event, ...args) {
    (this.events[event] || []).forEach((fn) => fn(...args));
  }

  once(event, listener) {
    const wrapper = (...args) => {
      this.off(event, wrapper);
      listener(...args);
    };
    this.on(event, wrapper);
  }
}

const bus = new EventEmitter();

bus.on("data", (msg) => console.log("listener1:", msg));
const unsub = bus.on("data", (msg) => console.log("listener2:", msg));

bus.emit("data", "hello");
unsub();
bus.emit("data", "after unsubscribe");

bus.once("done", () => console.log("once only"));
bus.emit("done");
bus.emit("done");
