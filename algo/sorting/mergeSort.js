/**
 *
 * @param {Array} arr : number array
 * @returns sorted array
 * Time Complexity:
 * Best case: O(nlog n) (Best Case, Worst Case, Average Case)
 * Space Complexity: O(n)
 */

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let middle = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, middle);
  let secondHalf = arr.slice(middle);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}
module.exports = mergeSort;
