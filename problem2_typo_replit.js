const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Problem 2: Typo (Parentheses)');
console.log('─────────────────────────────────────');
console.log('Enter a string of parentheses');
console.log('Example: ()(()))))\n');

rl.question('Input: ', (input) => {
  const s = input.trim();
  const n = s.length;

  // Odd length can never be balanced
  if (n % 2 === 1) {
    console.log('\n✓ Output: 0');
    rl.close();
    return;
  }

  // Count current opening parentheses
  let openCount = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === '(') openCount++;
  }

  const target = n / 2; // Target count for balanced string
  
  // If we need to flip more than 1, it's impossible
  if (Math.abs(openCount - target) !== 1) {
    console.log('\n✓ Output: 0');
    rl.close();
    return;
  }

  // Calculate balance at each position: balance = count('(') - count(')')
  const balance = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    balance[i + 1] = balance[i] + (s[i] === '(' ? 1 : -1);
  }

  // Calculate minimum balance from start to each position
  const minBalanceFromStart = new Array(n + 1).fill(0);
  minBalanceFromStart[0] = balance[0];
  for (let i = 1; i <= n; i++) {
    minBalanceFromStart[i] = Math.min(balance[i], minBalanceFromStart[i - 1]);
  }

  // Calculate minimum balance from each position to end
  const minBalanceToEnd = new Array(n + 2).fill(Infinity);
  minBalanceToEnd[n] = balance[n];
  for (let i = n - 1; i >= 0; i--) {
    minBalanceToEnd[i] = Math.min(balance[i], minBalanceToEnd[i + 1]);
  }

  let validFlips = 0;

  // Case 1: We have one extra '(' - try flipping each '(' to ')'
  if (openCount === target + 1) {
    for (let i = 0; i < n; i++) {
      if (s[i] === '(') {
        // Flipping '(' at position i reduces all future balances by 2
        // Valid if: prefix balance stays >= 0 AND suffix balance - 2 stays >= 0
        if (minBalanceFromStart[i] >= 0 && minBalanceToEnd[i + 1] >= 2) {
          validFlips++;
        }
      }
    }
  }

  // Case 2: We have one extra ')' - try flipping each ')' to '('
  if (openCount === target - 1) {
    for (let i = 0; i < n; i++) {
      if (s[i] === ')') {
        // Flipping ')' at position i increases all future balances by 2
        // Valid if: prefix balance stays >= 0 AND suffix balance + 2 stays >= 0
        if (minBalanceFromStart[i] >= 0 && minBalanceToEnd[i + 1] >= -2) {
          validFlips++;
        }
      }
    }
  }

  console.log(`\n✓ Output: ${validFlips}`);
  rl.close();
});
