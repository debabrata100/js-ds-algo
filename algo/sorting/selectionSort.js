/**
 *
 * @param {Array} arr : number array
 * @returns sorted array
 * Time Complexity: O(n^2) (Best Case, Worst Case, Average Case)
 * Space Complexity: O(1)
 */
function selectionSort(arr) {
  var i, j, minIndex;
  var n = arr.length;
  for (i = 0; i < n; i++) {
    minIndex = i;
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
module.exports = selectionSort;
