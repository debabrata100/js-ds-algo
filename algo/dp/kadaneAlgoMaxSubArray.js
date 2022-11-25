/*
    Given an integer array nums, find the subarray which has the largest sum and return its sum.

    Example 1:
    Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    Output: 6
    Explanation: [4,-1,2,1] has the largest sum = 6.
    Based on Kadane's algorithm
 */
var maxSubArray = function (nums) {
  var max = -Infinity;
  var maxEnding = 0;
  for (var num of nums) {
    maxEnding += num;
    if (max < maxEnding) {
      max = maxEnding;
    }
    if (maxEnding < 0) {
      maxEnding = 0;
    }
  }
  return max;
};
