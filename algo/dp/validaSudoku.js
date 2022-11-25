function isValidSudoku(board) {
  if (board.length < 1) return false;
  for (let i = 0; i < 9; i++) {
    for (j = 0; j < 9; j++) {
      if (board[i][j] !== empty) {
        if (!isValidEntry(board, i, j, board[i][j])) {
          return false;
        }
      }
    }
  }
  return true;
}

function isValidEntry(board, row, col, c) {
  // row-col check
  for (let i = 0; i < 9; i++) {
    if (i !== row && board[i][col] === c) return false;
    if (i !== col && board[col][i] === c) return false;
  }
  const x = ~~(row / 3) * 3;
  const y = ~~(col / 3) * 3;
  // 3 x 3 boxes check
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i + x !== row && j + y !== col && board[i + x][j + y] === c)
        return false;
    }
  }
  return true;
}
const empty = ".";
const b = [
  [2, empty, empty, empty, empty, empty, empty, empty, 8],
  [empty, 3, empty, empty, empty, empty, empty, empty, empty],
  [2, empty, empty, empty, empty, empty, empty, empty, empty],
  [empty, empty, empty, empty, empty, empty, empty, empty, empty],
  [empty, empty, empty, empty, empty, empty, empty, empty, empty],
  [empty, empty, empty, empty, empty, empty, empty, empty, empty],
  [empty, empty, empty, empty, empty, empty, empty, empty, empty],
  [empty, empty, empty, empty, empty, empty, empty, empty, empty],
  [3, empty, empty, empty, empty, empty, empty, empty, empty],
];

console.log(isValidSudoku(b)); // false
