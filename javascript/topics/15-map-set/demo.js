/**
 * Map and Set (vs Object and Array for keys/counting)
 * Run: npm run js:map-set
 *
 * Set: unique values only (fast dedupe).
 * Map: keys can be any type; maintains insertion order; .get/.set/.has.
 * Use Map for frequency tables and group-by when keys are dynamic.
 */

// Set — remove duplicates
const nums = [1, 2, 2, 3, 3, 3];
const unique = [...new Set(nums)];
console.log("unique:", unique);

// Map — character frequency
const freq = new Map();
for (const ch of "javascript") {
  freq.set(ch, (freq.get(ch) || 0) + 1);
}
console.log("freq j:", freq.get("j"));

// Group by property with Map
const people = [
  { name: "A", dept: "eng" },
  { name: "B", dept: "hr" },
  { name: "C", dept: "eng" },
];
const byDept = new Map();
for (const p of people) {
  if (!byDept.has(p.dept)) byDept.set(p.dept, []);
  byDept.get(p.dept).push(p.name);
}
console.log("group eng:", byDept.get("eng"));

// Object keys are always strings; Map can use objects as keys
const mapKey = new Map();
mapKey.set({ id: 1 }, "works");
console.log("map size:", mapKey.size);
