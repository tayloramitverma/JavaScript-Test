// Run: npm run js:promise-all-fetch
// Requires Node 18+ (global fetch)

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

console.log("second - end (sync, before promises settle)");

Promise.all(promiseArr)
  .then((results) => {
    console.log("results count", results.length);
  })
  .catch((err) => console.log(err));
