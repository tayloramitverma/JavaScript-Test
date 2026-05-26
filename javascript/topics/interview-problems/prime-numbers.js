/**
 * Prime check and nth prime
 * Run: npm run js:prime-numbers
 *
 * isPrime: test divisors from 2 to sqrt(n) — if any divides evenly, not prime.
 * nthPrime: increment candidate until we've found n primes.
 * Time isPrime: O(√n) | nthPrime: roughly O(n √n)
 */

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function nthPrime(n) {
  let count = 0;
  let num = 2;
  while (count < n) {
    if (isPrime(num)) {
      count++;
      if (count === n) return num;
    }
    num++;
  }
}

console.log("isPrime(5):", isPrime(5));
console.log("10th prime:", nthPrime(10));
