// Run: npm run js:palindrome-maps

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

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let char of keys1) {
    if (mapObject1[char] !== mapObject2[char]) {
      return false;
    }
  }

  return true;
};

console.log("palindrome maps?", checkPalindrome("ffss", "sfsf"));
