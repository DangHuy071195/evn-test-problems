const readline = require('readline');

const problems = {
  '1': './problem1_369_replit.js',
  '2': './problem2_typo_replit.js'
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('╔══════════════════════════════════════╗');
console.log('║   EVN Test Problems - Replit Runner  ║');
console.log('╚══════════════════════════════════════╝\n');
console.log('Available Problems:');
console.log('  1. Problem 369 (Clap Game)');
console.log('  2. Problem Typo (Parentheses)\n');

rl.question('Select problem (1 or 2): ', (choice) => {
  if (problems[choice]) {
    console.log(`\n✓ Running Problem ${choice}...\n`);
    rl.close();
    
    // Load and run the selected problem
    require(problems[choice]);
  } else {
    console.log('❌ Invalid choice. Please run again and select 1 or 2.');
    rl.close();
  }
});
