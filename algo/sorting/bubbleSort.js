/**
 *
 * @param {Array} arr : number array
 * @returns sorted array
 * Time Complexity:
 * Best case: O(n) When Array is nearly sorted using noswaps technique
 * Average Case & Worst Case : O(n^2)
 * Space Complexity: O(1)
 */
function bubbleSort(arr) {
  var i, j;
  var noSwaps;
  var n = arr.length;
  for (i = n; i >= 0; i--) {
    noSwaps = true;
    for (j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
module.exports = bubbleSort;
