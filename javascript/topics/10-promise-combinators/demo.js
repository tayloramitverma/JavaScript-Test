/**
 * Promise combinators: all, allSettled, race, any
 * Run: npm run js:promise-combinators
 *
 * - Promise.all:     all fulfill → array of values; ONE reject → immediate reject
 * - Promise.allSettled: always waits; each result is { status, value|reason }
 * - Promise.race:    first settled (fulfill OR reject) wins
 * - Promise.any:     first FULFILL wins; all reject → AggregateError
 */

const delay = (ms, value, fail = false) =>
  new Promise((resolve, reject) => {
    setTimeout(() => (fail ? reject(value) : resolve(value)), ms);
  });

console.log("--- Promise.all ---");
Promise.all([delay(100, "A"), delay(150, "B"), delay(120, "C")])
  .then((r) => console.log("all fulfilled:", r))
  .catch((e) => console.log("all rejected:", e));

Promise.all([delay(100, "ok"), delay(50, "fail", true)])
  .then((r) => console.log("unexpected:", r))
  .catch((e) => console.log("all failed fast:", e));

console.log("--- Promise.allSettled ---");
Promise.allSettled([
  delay(80, "win"),
  delay(60, "loss", true),
  delay(100, "win2"),
]).then((results) => {
  results.forEach((r, i) =>
    console.log(`settled[${i}]`, r.status, r.value || r.reason)
  );
});

console.log("--- Promise.race ---");
Promise.race([delay(200, "slow"), delay(50, "fast")]).then((w) =>
  console.log("race winner:", w)
);

console.log("--- Promise.any ---");
Promise.any([delay(100, "fail", true), delay(80, "first success")]).then((v) =>
  console.log("any first success:", v)
);

Promise.any([delay(50, "e1", true), delay(60, "e2", true)]).catch((err) =>
  console.log("any all failed:", err.errors?.length, "errors")
);

setTimeout(() => console.log("--- combinators demo done ---"), 400);
