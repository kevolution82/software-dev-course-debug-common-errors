// ❌ Logical Error: Returning true when number IS divisible means it's NOT prime,
// but returning true indicates it's prime — that's backward.

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // ✅ Fix: Return false if divisible (NOT prime)
    }
  }

  return true; // ✅ Fix: Return true if no divisors were found
}

console.log(isPrime(7)); // ✅ Expected output: true
