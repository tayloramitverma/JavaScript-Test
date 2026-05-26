/**
 * Two sum (hash map — optimal)
 * Run: npm run js:two-sum-hashmap
 *
 * Problem: Find two indices where nums[i] + nums[j] === target.
 * Approach: For each nums[i], check if (target - nums[i]) was seen; store index in Map.
 * Time: O(n) | Space: O(n)
 *
 * Compare: two-sum-pairs.js uses nested loops O(n²).
 */

function twoSum(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (seen.has(need)) {
      return [seen.get(need), i];
    }
    seen.set(nums[i], i);
  }

  return null;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
