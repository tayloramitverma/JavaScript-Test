# Comment guide for this repo

Use this format when adding topics, interview problems, polyfills, or browser demos so every file is easy to study before an interview.

---

## File header (required)

Put a block comment at the **top** of every `.js` file:

```javascript
/**
 * Short title (what this file teaches)
 * Run: npm run js:your-script-name
 *
 * What: One sentence — the concept or problem.
 * Logic: How the solution works (approach, pattern, key insight).
 * Time/Space: O(n) | O(n)  ← interview problems only
 *
 * Optional:
 * - Browser: path/to/file.html
 * - Compare: link to related file (e.g. two-sum-pairs vs two-sum-hashmap)
 */
```

### Examples

**Topic demo**

```javascript
/**
 * Debounce — run only after calls stop for `delay` ms
 * Run: npm run js:debounce
 *
 * What: Limit expensive work (search API) while user types.
 * Logic: Each call clears the previous timer; only the last call fires after quiet period.
 * Compare: browser/throttling.js (max once per window).
 */
```

**Interview problem**

```javascript
/**
 * Valid parentheses
 * Run: npm run js:valid-parentheses
 *
 * Problem: Return true if brackets ()[]{} are balanced.
 * Approach: Stack — push openers; on closer, pop must match.
 * Time: O(n) | Space: O(n)
 */
```

**Polyfill**

```javascript
/**
 * Polyfill: Array.prototype.map
 * Run: npm run js:polyfill-map
 *
 * map(callback) → new array, same length. Does not mutate original.
 * Loop: push callback(this[i], i, this) into new array.
 */
```

---

## Inline comments (when to add)

| Add a comment when… | Skip comments when… |
|---------------------|---------------------|
| Logic is not obvious from names | Code is self-explanatory (`sum += n`) |
| Interview trap (`==` vs `===`, `sort()` without comparator) | Repeating what the header already says |
| Expected output order (promises, event loop) | Every single line |
| Section changes (new concept in same file) | Stating the obvious (`i++` // increment i) |

Use section dividers in **long** files (like `01-core-concepts/demo.js`):

```javascript
// =============================================================================
// CLOSURE — inner function remembers outer variables
// =============================================================================
```

---

## Register new files

1. Add script to root **`package.json`**:
   ```json
   "js:my-topic": "node javascript/topics/12-my-topic/demo.js"
   ```
2. Add row to **`javascript/README.md`** command table.
3. Optional: add row to root **`README.md`** folder map.
4. Browser-only: add link in **`javascript/hub.html`**.

---

## Folder naming

```text
javascript/
├── topics/NN-short-name/demo.js     # concepts (01–18+)
├── topics/interview-problems/name.js
├── polyfills/name.js
└── browser/name.html + name.js
```

- `NN` = sort order (e.g. `19-generators`)
- Use **kebab-case** for file and folder names
- One main idea per file when possible

---

## npm script naming

| Type | Pattern | Example |
|------|---------|---------|
| Topic | `js:<short-topic>` | `js:debounce` |
| Interview | `js:<problem-name>` | `js:valid-parentheses` |
| Polyfill | `js:polyfill-<name>` | `js:polyfill-flat` |

---

## Checklist before commit

- [ ] File header with `Run:` command
- [ ] `npm run js:...` works from repo root
- [ ] Problem/approach documented (interview files)
- [ ] No secrets (API keys in public repos — use env vars later)
- [ ] `package.json` + `javascript/README.md` updated if new script

---

## Quick reference — files with best examples

| File | Why it's a good model |
|------|------------------------|
| `topics/01-core-concepts/demo.js` | Section dividers + line comments on output |
| `topics/12-debounce/demo.js` | Short header + throttle comparison |
| `topics/interview-problems/valid-parentheses.js` | Problem / approach / complexity |
| `polyfills/reduce.js` | Polyfill + edge case (no initialValue) |
| `browser/throttling.js` | Browser context + vs debounce |
