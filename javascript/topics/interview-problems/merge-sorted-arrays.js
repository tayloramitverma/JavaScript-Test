/**
 * Merge two sorted arrays into one sorted array
 * Run: npm run js:merge-sorted
 *
 * Approach: Two pointers — compare a[i] vs b[j], push smaller, advance pointer.
 * Append leftovers when one array exhausted.
 * Time: O(n + m) | Space: O(n + m) for result
 */

function mergeSorted(a, b) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) result.push(a[i++]);
    else result.push(b[j++]);
  }

  return result.concat(a.slice(i)).concat(b.slice(j));
}

console.log(mergeSorted([1, 3, 5, 7], [2, 4, 6, 8]));
