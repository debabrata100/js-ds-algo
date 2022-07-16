const b = null;
const bd1 = [
  [1, b, b, b, b, b, b, b, 9],
  [b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b],
  [9, b, b, b, b, b, b, b, 1],
];

function solve(board) {
  if (solved(board)) {
    return board;
  } else {
    var possibilities = newBoards(board);
    var validBoards = keepOnlyValidBoards(possibilities);
    return searchForSolution(validBoards);
  }
}
function searchForSolution(boards) {
  if (boards.length < 1) {
    return false;
  } else {
    var first = boards.shift();
    var tryPath = solve(first);
    if (tryPath !== false) {
      return tryPath;
    } else {
      return searchForSolution(boards);
    }
  }
}
function solved(board) {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (board[i][j] === null) {
        return false;
      }
    }
  }
  return true;
}
function newBoards(board) {
  var res = [];
  var firstEmptySquare = findFirstEmptySquar(board); // <--- [y,x]
  if (firstEmptySquare !== undefined) {
    var y = firstEmptySquare[0];
    var x = firstEmptySquare[1];
    for (var i = 1; i <= 9; i++) {
      var newBoard = [...board];
      var row = [...newBoard[y]];
      row[x] = i;
      newBoard[y] = row;
      res.push(newBoard);
    }
  }
  return res;
}
function findFirstEmptySquar(board) {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (board[i][j] === null) {
        return [i, j];
      }
    }
  }
}
function keepOnlyValidBoards(boards) {
  return boards.filter((b) => validBoard(b));
}
function validBoard(board) {
  return rowGood(board) && colGood(board) && boxesGood(board);
}
function rowGood(board) {
  for (var i = 0; i < 9; i++) {
    var cur = [];
    for (var j = 0; j < 9; j++) {
      if (cur.includes(board[i][j])) {
        return false;
      } else if (board[i][j] !== null) {
        cur.push(board[i][j]);
      }
    }
  }
  return true;
}
function colGood(board) {
  for (var i = 0; i < 9; i++) {
    var cur = [];
    for (var j = 0; j < 9; j++) {
      if (cur.includes(board[j][i])) {
        return false;
      } else if (board[j][i] !== null) {
        cur.push(board[j][i]);
      }
    }
  }
  return true;
}
function boxesGood(board) {
  var boxCoordinates = [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ];
  for (var y = 0; y < 9; y += 3) {
    for (var x = 0; x < 9; x += 3) {
      var cur = [];
      for (var i = 0; i < 9; i++) {
        var coordinate = [...boxCoordinates[i]];
        coordinate[0] += y;
        coordinate[1] += x;
        if (cur.includes(board[coordinate[0]][coordinate[1]])) {
          return false;
        } else if (board[coordinate[0]][coordinate[1]] !== null) {
          cur.push(board[coordinate[0]][coordinate[1]]);
        }
      }
    }
  }
  return true;
}
console.log(solve(bd1));
