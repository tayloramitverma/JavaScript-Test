/**
 * Deep clone (manual — interview version)
 * Run: npm run js:deep-clone
 *
 * Problem: Copy nested object so changes to copy do not affect original.
 * Approach: Recurse on objects/arrays; return primitives as-is.
 * Note: No cycles, Date, Map, functions — use structuredClone in production.
 * Time: O(n) nodes | Space: O(depth) call stack
 */

function deepClone(value) {
  if (value === null || typeof value !== "object") return value;

  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item));
  }

  const cloned = {};
  for (const key of Object.keys(value)) {
    cloned[key] = deepClone(value[key]);
  }
  return cloned;
}

const original = {
  name: "Amit",
  scores: [10, 20],
  address: { city: "Pune" },
};

const copy = deepClone(original);
copy.address.city = "Mumbai";

console.log("original city:", original.address.city);
console.log("copy city:", copy.address.city);
