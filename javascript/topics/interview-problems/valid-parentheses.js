/**
 * Valid parentheses
 * Run: npm run js:valid-parentheses
 *
 * Problem: Given "()[]{}", return true if every bracket closes in correct order.
 * Approach: Stack — push opening; on closing, pop must match pair.
 * Time: O(n) | Space: O(n)
 */

function isValid(s) {
  const pairs = { ")": "(", "]": "[", "}": "{" };
  const stack = [];

  for (const ch of s) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else {
      if (stack.pop() !== pairs[ch]) return false;
    }
  }

  return stack.length === 0;
}

console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
