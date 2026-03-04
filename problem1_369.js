function solve() {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
  const [a, b] = input.split(' ').map(Number);
  
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

  console.log(countClaps(b) - countClaps(a - 1));
}

solve();