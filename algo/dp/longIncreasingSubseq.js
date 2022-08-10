/*
    Given an integer array nums, return the length of the longest strictly increasing subsequence.
    A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing t
    he order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

 */
var longestIncreasingSubsequence = function (nums) {
  const dp = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  let max = dp[0];
  for (let i = 1; i < dp.length; i++) {
    if (dp[i] > max) max = dp[i];
  }
  return max;
};
// console.log(longestIncreasingSubsequence([0, 1, 0, 3, 2, 4, 5, 2])); // 5 [0,1,3,4,5]
