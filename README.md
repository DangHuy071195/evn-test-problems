# EVN Test Problems

Solutions for two algorithmic problems.

## 🚀 Quick Start (Replit)

Click the **Run** button in Replit, then:
1. Select problem 1 or 2
2. Enter your input
3. Get the result!

## 📋 Problems

### Problem 1: 369 Game
Count how many times you clap when saying numbers from A to B.
- Clap for digits: 3, 6, 9
- Example: 13 → clap once (has 3)

**Input:** Two numbers A and B (1 ≤ A ≤ B ≤ 10,000,000)  
**Output:** Total number of claps

**Sample:**
```
Input: 1 15
Output: 8
```

### Problem 2: Typo (Parentheses)
Count valid parentheses strings you can create by flipping exactly one character.

**Input:** String of parentheses (1 ≤ length ≤ 100,000)  
**Output:** Number of valid strings possible

**Sample:**
```
Input: ()(())))
Output: 4
```

## 🎯 Running in Replit

### Method 1: Interactive Menu (Recommended)
```bash
node index.js
```

### Method 2: Direct Problem Run
```bash
npm run problem1  # Run Problem 1
npm run problem2  # Run Problem 2
```

### Method 3: Using npm start
```bash
npm start
```

## 📁 File Structure

```
├── index.js                    # Interactive menu
├── problem1_369_replit.js      # Problem 1 (interactive)
├── problem2_typo_replit.js     # Problem 2 (interactive)
├── problem1_369.js             # Problem 1 (stdin version)
├── problem2_typo.js            # Problem 2 (stdin version)
├── package.json                # npm configuration
├── .replit                     # Replit configuration
└── README.md                   # This file
```

## 💡 Tips

- For Problem 1: Input format is `A B` (e.g., `1 15`)
- For Problem 2: Just enter the parentheses string (e.g., `()(())))`)
- Both solutions use O(n) time complexity
- Memory usage is well within limits

## 🔧 Algorithm Complexity

| Problem | Time | Space | Limit |
|---------|------|-------|-------|
| Problem 1 | O(log N) | O(1) | 1s, 128MB ✓ |
| Problem 2 | O(N) | O(N) | 1s, 128MB ✓ |

---
Made for EVN Test
