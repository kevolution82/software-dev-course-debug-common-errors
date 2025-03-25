// ❌ Runtime Error: "eight" is a string, so "eight" * 2 = NaN (Not a Number)
let numbers = [2, 4, "eight"];

for (let i = 0; i < numbers.length; i++) {
  // ✅ Fix: Add a type check to ensure each element is a number
  if (typeof numbers[i] === "number") {
    let doubled = numbers[i] * 2;
    console.log(doubled);
  } else {
    console.log(`Skipping invalid entry: ${numbers[i]}`);
  }
}
