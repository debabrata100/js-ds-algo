function numIslands(grid) {
  let count = 0;
  const H = grid.length;
  const W = H && grid[0].length;
  for (let r = 0; r < H; r++) {
    for (let c = 0; c < W; c++) {
      if (grid[r][c] === "0") continue;
      dfs(r, c);
      count++;
    }
  }
  return count;
  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= H || c >= W) return;
    if (grid[r][c] === "0") return;

    grid[r][c] = "0";
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }
}

const grid = [
  ["1", "1", "1", "0"],
  ["1", "0", "0", "0"],
  ["1", "0", "1", "0"],
  ["0", "0", "0", "1"],
];
console.log(numIslands(grid));
