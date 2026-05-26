/**
 * Polyfill-style: check palindrome on string
 * Run: npm run js:polyfill-palindrome
 *
 * Classic approach: two pointers i=0, j=length-1, compare chars inward.
 * This demo builds reversed string for comparison (O(n) time/space).
 */

String.prototype.checkPalindrome = function () {
  const str = this;
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== reverseStr[i]) return false;
  }

  return true;
};

const str = "abcdedcba";
console.log(`"${str}" palindrome?`, str.checkPalindrome());
