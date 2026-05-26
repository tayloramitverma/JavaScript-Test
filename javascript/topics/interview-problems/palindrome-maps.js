/**
 * Compare two strings via character frequency maps
 * Run: npm run js:palindrome-maps
 *
 * Note: This compares char counts (like anagram check), not classic palindrome
 * (same string forwards/backwards). For single-string palindrome: two pointers
 * from start/end moving inward.
 */

const mapOfString = (str) => {
  const map = {};
  str.split("").forEach((i) => (map[i] = map[i] + 1 || 1));
  return map;
};

const checkPalindrome = (string1, string2) => {
  const mapObject1 = mapOfString(string1);
  const mapObject2 = mapOfString(string2);

  const keys1 = Object.keys(mapObject1);
  const keys2 = Object.keys(mapObject2);

  if (keys1.length !== keys2.length) return false;

  for (let char of keys1) {
    if (mapObject1[char] !== mapObject2[char]) return false;
  }

  return true;
};

console.log("same char counts?", checkPalindrome("ffss", "sfsf"));
