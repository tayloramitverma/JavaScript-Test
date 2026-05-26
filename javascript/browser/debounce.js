/**
 * Debounce for search input (browser demo)
 * Open: debounce-search.html
 *
 * Each keystroke clears the previous timer; API runs only after 500ms pause.
 */

function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn.apply(this, args), delay);
  };
}

const input = document.getElementById("search");
const log = document.getElementById("log");

const search = debounce((value) => {
  const line = document.createElement("p");
  line.textContent = `Search API called for: "${value}"`;
  log.appendChild(line);
}, 500);

input.addEventListener("input", (e) => search(e.target.value));
