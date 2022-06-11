/**
 * Time complexity:
 * Worst Case: log(n)
 * Best Case: O(1)
 * Input array need to be sorted
 */
function binarySearch(numArr, key) {
  let middle = Math.floor(numArr.length / 2);
  if (numArr[middle] === key) return true;
  if (numArr.length < 2) return false;
  if (key > numArr[middle]) numArr = numArr.slice(middle, numArr.length);
  if (key < numArr[middle]) numArr = numArr.slice(0, middle);
  return binarySearch(numArr, key);
}
function binarySearchWithLoop(numArr, key) {
  let middle;
  while (numArr.length > 1) {
    middle = Math.floor(numArr.length / 2);
    if (numArr[middle] === key) return true;
    if (key < numArr[middle]) numArr = numArr.slice(0, middle);
    if (key > numArr[middle]) numArr = numArr.slice(middle, numArr.length);
  }
  if (numArr[0] === key) return true;
  return false;
}

function binarySearchWithoutLibraryFunction(arr, key) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (left <= right) {
    if (arr[middle] === key) return true;
    if (key < arr[middle]) right = middle - 1;
    else left = middle + 1;
    middle = Math.floor((left + right) / 2);
  }
  return false;
}

// console.log(binarySearchWithoutLibraryFunction([1, 2, 3, 4, 5, 10, 12], 12));
// console.log(binarySearchWithoutLibraryFunction([1, 2], 2));
// console.log(binarySearchWithoutLibraryFunction([1], 1));
