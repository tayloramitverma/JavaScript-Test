/**
 * Group anagrams together
 * Run: npm run js:group-anagrams
 *
 * Anagrams share the same sorted letters — use sorted string as Map key.
 * Example: "eat", "tea", "ate" → same key "aet".
 * Time: O(n * k log k) where k = max word length | Space: O(n)
 */

function groupAnagrams(words) {
  const map = new Map();

  for (const word of words) {
    const key = word.split("").sort().join("");
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(word);
  }

  return [...map.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
