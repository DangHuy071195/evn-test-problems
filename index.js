const readline = require('readline');

const problems = {
  '1': './problem1_369_replit.js',
  '2': './problem2_typo_replit.js'
};

function showMenu() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log('╔══════════════════════════════════════╗');
  console.log('║   EVN Test Problems - HUYND  ║');
  console.log('╚══════════════════════════════════════╝\n');
  console.log('Available Problems:');
  console.log('  1. Problem 369 (Clap Game)');
  console.log('  2. Problem Typo (Parentheses)');
  console.log('  3. Restart Menu\n');

  rl.question('Select option (1, 2, or 3): ', (choice) => {
    if (choice === '3') {
      rl.close();
      console.log('\n🔄 Restarting...\n');
      setTimeout(() => showMenu(), 500);
    } else if (problems[choice]) {
      console.log(`\n✓ Running Problem ${choice}...\n`);
      rl.close();
      
      // Load and run the selected problem
      require(problems[choice]);
    } else {
      console.log('❌ Invalid choice. Please select 1, 2, or 3.');
      rl.close();
      setTimeout(() => showMenu(), 1000);
    }
  });
}

// Start the menu
showMenu();
