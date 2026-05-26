# JavaScript track

Runnable topic demos and interview problems. TypeScript lives in [`../typescript/`](../typescript/) — separate folder and commands.

**Adding new files?** Follow [`COMMENT-GUIDE.md`](./COMMENT-GUIDE.md) for headers, comments, and `package.json` registration.

## Topics (concepts)

| Command | Topic |
|---------|--------|
| `npm run js:core` | Falsy/truthy, closures, scope, event loop |
| `npm run js:mutable` | Mutable vs immutable |
| `npm run js:cloning` | Shallow/deep copy, prototypes |
| `npm run js:scope` | Block scope, char maps |
| `npm run js:promises` | `Promise.all`, `finally` |
| `npm run js:this` | `this` keyword |
| `npm run js:arrays` | map, filter, find, reduce |
| `npm run js:promise-basics` | Promise constructor, async/await |
| `npm run js:async-fetch` | `Promise.all` + fetch APIs |
| `npm run js:promise-combinators` | all, allSettled, race, any |
| `npm run js:custom-promise` | Mini Promise from scratch |
| `npm run js:debounce` | Debounce implementation |
| `npm run js:type-coercion` | == vs ===, typeof, traps |
| `npm run js:es6` | Destructuring, spread, ?., ?? |
| `npm run js:map-set` | Map, Set, group-by |
| `npm run js:currying` | curry(), partial application |
| `npm run js:memoization` | memoize(), fibonacci cache |
| `npm run js:output-prediction` | Hoisting, loops, this, microtasks |

## Interview problems

| Command | Problem |
|---------|---------|
| `npm run js:anagram` | Anagram check |
| `npm run js:two-sum-hashmap` | Two sum O(n) |
| `npm run js:valid-parentheses` | Stack — balanced brackets |
| `npm run js:merge-sorted` | Merge two sorted arrays |
| `npm run js:max-subarray` | Kadane — max subarray sum |
| `npm run js:group-anagrams` | Group anagrams with Map |
| `npm run js:deep-clone` | Deep clone object |
| `npm run js:flatten-array` | Flatten nested array |
| `npm run js:flatten-object` | Flatten nested object |
| `npm run js:event-emitter` | on / off / emit / once |
| … | See `package.json` for all `js:*` scripts |

## Polyfills

`npm run js:polyfill-map` · `filter` · `reduce` · `bind` · `call` · `apply` · `flat` · `allSettled`

## Browser demos

Open [`hub.html`](./hub.html) — callbacks, throttle, debounce search, Giphy fetch.

## Layout

```text
javascript/
├── topics/01-core-concepts … 18-output-prediction/
├── topics/interview-problems/
├── polyfills/
└── browser/
```
