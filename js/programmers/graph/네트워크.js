// https://programmers.co.kr/learn/courses/30/lessons/43162
// level 3

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
); // 2
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
); // 1

function solution(n, computers) {
  var answer = 0;
  const visited = new Set();
  for (let idx in computers) {
    if (explore(idx, visited) === true) answer += 1;
  }

  function explore(node, visited) {
    if (visited.has(node)) return false;
    visited.add(node);

    for (let idx in computers[node]) {
      if (computers[node][idx] === 1) {
        explore(idx, visited);
      }
    }

    return true;
  }
  return answer;
}
