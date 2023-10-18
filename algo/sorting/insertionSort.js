/**
 *
 * @param {Array} arr : number array
 * @returns sorted array
 * Time Complexity: O(n^2) (Worst Case, Average Case)
 * O(n) (Best Case)
 * Space Complexity: O(1)
 */
function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
module.exports = insertionSort;
