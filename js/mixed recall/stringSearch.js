const stringSearch = (grid, word) => {
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      if (grid[r][c] === word[0]) {
        if (explore(r, c, grid, word, 0) === true) return true;
      }
    }
  }
  return false;
};

const explore = (row, col, grid, word, findIndex) => {
  const rowInbound = 0 <= row && row < grid.length;
  const colInbound = 0 <= col && col < grid[0].length;

  if (findIndex >= word.length) return true;
  if (!rowInbound || !colInbound) return false;
  if (word[findIndex] !== grid[row][col]) return false;

  // 현재 탐색 중인 노드를 다음 탐색에서 탐색하지 않게 하기 위해 임시로 바꿔 놓는다.
  grid[row][col] = "*";

  const result =
    explore(row - 1, col, grid, word, findIndex + 1) ||
    explore(row + 1, col, grid, word, findIndex + 1) ||
    explore(row, col - 1, grid, word, findIndex + 1) ||
    explore(row, col + 1, grid, word, findIndex + 1);

  grid[row][col] = word[findIndex];
  return result;
};

const grid = [
  ["e", "y", "h", "i", "j"],
  ["q", "x", "e", "r", "p"],
  ["r", "o", "l", "l", "n"],
  ["p", "r", "x", "o", "h"],
  ["a", "a", "m", "c", "m"],
];
console.log(stringSearch(grid, "rolling")); // -> false
