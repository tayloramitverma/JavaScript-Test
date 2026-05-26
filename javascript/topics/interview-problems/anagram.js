// Run: npm run js:anagram

function checkAnagrams(str1, str2) {
  let newStr1 = str1.replace(/[^\w]/g, "").toLowerCase();
  let newStr2 = str2.replace(/[^\w]/g, "").toLowerCase();

  if (newStr1.length !== newStr2.length) {
    return false;
  }

  let charMap1 = {};
  let charMap2 = {};

  for (let char of newStr1) {
    charMap1[char] = charMap1[char] + 1 || 1;
  }

  for (let char of newStr2) {
    charMap2[char] = charMap2[char] + 1 || 1;
  }

  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }

  return true;
}

console.log("anagram?", checkAnagrams("rail safety", "fairy tales"));
