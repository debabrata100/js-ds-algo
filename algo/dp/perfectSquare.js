/*
    Given an integer n, return the least number of perfect square numbers that sum to n.
    Example 1:
    Input: n = 12
    Output: 3
    Explanation: 12 = 4 + 4 + 4.

    Example 2:
    Input: n = 13
    Output: 2
    Explanation: 13 = 4 + 9.
*/

function numSqaures(n) {
  const dp = [];
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    dp[i] = Number.MAX_VALUE;
    for (j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
}

console.log(numSqaures(12)); // 3
console.log(numSqaures(5)); // 2
