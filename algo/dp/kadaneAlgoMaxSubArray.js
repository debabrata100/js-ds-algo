/**
 * @param {number[]} nums
 * @return {number}
 * Based on Kadane's algorithm
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
