/**
 * TC: O(n)
 */
function maxSubArray(arr, num) {
  if (arr.length < num) return null;
  let maxSum = -Infinity;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;
  for (i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19 [8,5,6]
console.log(maxSubArray([1, 2, 3, 4, 5, 6, 7, 8], 4)); // 26 [5,6,7,8]
