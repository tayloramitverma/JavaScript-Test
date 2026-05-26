/**
 * Polyfill: Promise.allSettled
 * Run: npm run js:polyfill-allSettled
 *
 * Waits for ALL promises; never rejects. Each result:
 *   { status: "fulfilled", value } | { status: "rejected", reason }
 *
 * Built from Promise.all by mapping each input to a never-reject wrapper.
 */

Promise.myAllSettled = function (promises) {
  return Promise.all(
    promises.map((p) =>
      Promise.resolve(p)
        .then((value) => ({ status: "fulfilled", value }))
        .catch((reason) => ({ status: "rejected", reason }))
    )
  );
};

const ok = Promise.resolve("A");
const fail = Promise.reject("B");

Promise.myAllSettled([ok, fail]).then((results) => {
  console.log(results);
});
