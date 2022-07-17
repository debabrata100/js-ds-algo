/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix || matrix.length < 1) return false;
  let targetRow = [];
  let colLength = matrix[0].length;
  for (var i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === target || matrix[i][colLength - 1] === target) {
      return true;
    }
    if (matrix[i][0] < target && matrix[i][colLength - 1] > target) {
      targetRow = matrix[i];
      break;
    }
  }
  if (targetRow.length < 1) return false;
  var left = 0;
  var right = targetRow.length - 1;
  while (left <= right) {
    var middle = ~~((left + right) / 2);
    if (targetRow[middle] === target) return true;
    if (target < targetRow[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return false;
};
// var m = [[1], [3]];
// var m = [[1, 3]];
// var m = [
//   [1, 3],
//   [4, 5],
// ];
// var m = [
//   [1, 2],
//   [5, 6],
//   [9, 10],
// ];
// var m = [[1], [4]];
// console.log(searchMatrix(m, 0));
