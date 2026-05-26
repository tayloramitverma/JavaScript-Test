/**
 * Type coercion and equality (common interview traps)
 * Run: npm run js:type-coercion
 *
 * === compares value + type (no coercion).
 * == coerces types before compare (avoid in real code).
 * ?? only falls back for null/undefined (not 0 or "").
 */

console.log("--- == vs === ---");
console.log(0 == false, 0 === false);
console.log("" == false, "" === false);
console.log(null == undefined, null === undefined);
console.log([] == false, [] === false);

console.log("--- typeof quirks ---");
console.log(typeof null); // "object" (historical bug)
console.log(typeof []);
console.log(typeof function () {});

console.log("--- string + number ---");
console.log("5" + 1); // "51" — + with string prefers concat
console.log("5" - 1); // 4 — - forces numeric
console.log([] + {}); // "[object Object]"
console.log({} + []); // depends on context (often same in expr)

console.log("--- truthy traps ---");
console.log(Boolean([]), Boolean({}), Boolean("0"));

console.log("--- ?? vs || ---");
console.log(0 || 99); // 99 — 0 is falsy
console.log(0 ?? 99); // 0 — 0 is not nullish
console.log("" || "default");
console.log("" ?? "default");
