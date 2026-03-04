const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Problem 1: 369 Game');
console.log('─────────────────────────────────────');
console.log('Enter two numbers A and B (space-separated)');
console.log('Example: 1 15\n');

rl.question('Input: ', (input) => {
  const [a, b] = input.trim().split(' ').map(Number);
  
  function countClaps(N) {
    if (N <= 0) return 0;

    let total = 0;
    let power = 1; 

    while (power <= N) {
      const higher = Math.floor(N / (power * 10));
      const current = Math.floor(N / power) % 10;
      const lower = N % power;

      for (const target of [3, 6, 9]) {
        if (current > target) {
          total += (higher + 1) * power;
        } else if (current === target) {
          total += higher * power + (lower + 1);
        } else {
          total += higher * power;
        }
      }

      power *= 10;
    }

    return total;
  }

  const result = countClaps(b) - countClaps(a - 1);
  console.log(`\n✓ Output: ${result}`);
  
  rl.close();
});
