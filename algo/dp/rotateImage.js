// Input: nxn matrix
var rotate = function (matrix) {
  matrix = matrix.reverse();
  console.log(matrix);
  for (let i in matrix) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  return matrix;
};

// const m = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// rotate(m);
