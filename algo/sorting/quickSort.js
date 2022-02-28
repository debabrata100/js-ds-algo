/**
 *
 * @param {Array} arr : number array
 * @returns sorted array
 * Time Complexity:
 * Best Case, Average Case: O(nlog n)
 * Worst case: O(n^2)
 * Space Complexity: O(1)
 */

function pivot(arr, start = 0, end = arr.length - 1) {
  let swapIdx = start;
  let pivotEl = arr[swapIdx];
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivotEl) {
      [arr[i], arr[swapIdx + 1]] = [arr[swapIdx + 1], arr[i]];
      swapIdx++;
    }
  }
  [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]];
  return swapIdx;
}
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    var pivotIndex = pivot(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }
  return arr;
}
module.exports = quickSort;
