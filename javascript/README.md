# JavaScript track

Runnable topic demos and interview problems. TypeScript lives in [`../typescript/`](../typescript/) — separate folder and commands.

## Run with Node (from repo root)

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
| `npm run js:anagram` | Interview: anagram |
| `npm run js:prime-numbers` | Interview: primes |
| … | See `package.json` for all `js:*` scripts |

## Browser demos

Open [`hub.html`](./hub.html) or use Live Server on files under `browser/`.

## Layout

```text
javascript/
├── topics/           # one folder per topic, demo.js inside
├── interview-problems/  # under topics/interview-problems/
├── polyfills/
└── browser/          # DOM / window only
```
