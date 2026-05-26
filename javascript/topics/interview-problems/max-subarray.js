/**
 * Maximum subarray sum (Kadane's algorithm)
 * Run: npm run js:max-subarray
 *
 * Problem: Largest sum of any contiguous subarray.
 * Idea: At each index, either extend previous subarray or start fresh at nums[i].
 * currentMax = max(nums[i], currentMax + nums[i])
 * Time: O(n) | Space: O(1)
 */

function maxSubArray(nums) {
  let maxSoFar = nums[0];
  let currentMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    maxSoFar = Math.max(maxSoFar, currentMax);
  }

  return maxSoFar;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6 → [4,-1,2,1]
