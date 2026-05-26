/**
 * Array methods: map, filter, find, reduce, findIndex
 * Run: npm run js:arrays
 *
 * Same predicate `item > 3` — different methods behave differently:
 * - map:    new array, SAME length (transform every element)
 * - filter: new array, SUBSET (keep where callback is truthy)
 * - find:   first matching element (or undefined)
 * - findIndex: index of first match (or -1)
 * - reduce: single accumulated value (sum here)
 */

const arr = [1, 2, 3, 4, 5];

// map — always length 5; callback return value becomes each slot
const res1 = arr.map((item) => item > 3);
console.log("map (>3 as boolean):", res1); // [false, false, false, true, true]

// filter — only elements where callback returns truthy
const res2 = arr.filter((item) => item > 3);
console.log("filter:", res2); // [4, 5]

// find — first match only
const res3 = arr.find((item) => item > 3);
console.log("find:", res3); // 4

// reduce — fold array into one value; 0 is initial accumulator
const res4 = arr.reduce((acc, item) => acc + item, 0);
console.log("reduce sum:", res4); // 15

// findIndex — index of first match
const res5 = arr.findIndex((item) => item > 3);
console.log("findIndex:", res5); // 3
