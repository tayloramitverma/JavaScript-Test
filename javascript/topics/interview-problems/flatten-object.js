/**
 * Flatten nested object to dot-notation keys
 * Run: npm run js:flatten-object
 *
 * Example: { user: { name: "A" } } → { "user.name": "A" }
 * Approach: DFS — recurse plain objects; build key path with prefix.
 */

function flattenObject(obj, prefix = "", result = {}) {
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      flattenObject(value, path, result);
    } else {
      result[path] = value;
    }
  }
  return result;
}

const nested = {
  user: { name: "Amit", address: { city: "Pune", zip: 411001 } },
  active: true,
};

console.log(flattenObject(nested));
