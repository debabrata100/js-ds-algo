/*
Given an m x n board of characters and a list of strings words, return all words on the board.
Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
 */
function findWords(board, words) {
  const res = [];
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const buildTrie = (words) => {
    const root = {};
    for (let word of words) {
      let node = root;
      for (let c of word) {
        if (!node[c]) node[c] = {};
        node = node[c];
      }
      node.word = word;
    }
    return root;
  };

  const search = (node, i, j) => {
    if (node.word) {
      res.push(node.word);
      node.word = null;
    }
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return;
    if (!board[i][j]) return;

    const c = board[i][j];
    board[i][j] = "#";
    for (let [dx, dy] of dirs) {
      if (node[c]) {
        search(node[c], i + dx, j + dy);
      }
    }
    board[i][j] = c;
  };

  const root = buildTrie(words);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      search(root, i, j);
    }
  }
  return res;
}

// const board = [
//   ["o", "a", "a", "n"],
//   ["e", "t", "a", "e"],
//   ["i", "h", "k", "r"],
//   ["i", "f", "l", "v"],
// ];
// const words = ["oath", "pea", "eat", "oeihkrenaakl"];

// console.log(findWords(board, words));
