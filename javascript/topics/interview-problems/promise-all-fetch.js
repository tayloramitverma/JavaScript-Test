/**
 * Promise.all with parallel fetch
 * Run: npm run js:promise-all-fetch
 *
 * Requires Node 18+ (global fetch).
 * Fires 9 page requests in parallel; logs when all settle.
 * Compare sequential: for (id) await fetch — slower total time.
 */

async function fetchRecords(id) {
  try {
    let res = await fetch(`https://reqres.in/api/users?page=${id}`);
    let data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

let postIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let promiseArr = postIds.map((pid) => fetchRecords(pid));

console.log("sync log — before promises settle");

Promise.all(promiseArr)
  .then((results) => {
    console.log("results count:", results.length);
  })
  .catch((err) => console.log(err));
