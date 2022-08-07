/*
    Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
    You have the following three operations permitted on a word:
    - Insert a character
    - Delete a character
    - Replace a character
 */
var minDistance = function (word1, word2) {
  const R = word2.length;
  const C = word1.length;
  const dp = Array(word2.length + 1)
    .fill(null)
    .map(() => Array(word1.length + 1).fill(0));
  for (i = 0; i <= C; i++) {
    dp[0][i] = i;
  }
  for (i = 0; i <= R; i++) {
    dp[i][0] = i;
  }
  for (i = 1; i <= R; i++) {
    for (j = 1; j <= C; j++) {
      let minValue = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
      if (word2[i - 1] === word1[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + minValue;
      }
    }
  }

  return dp[word2.length][word1.length];
};
