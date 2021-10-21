/**
 * <음료수 얼려 먹기> - 탐색
 * n*m 크기의 얼음 틀이 있다. 
 * 구멍이 뚫려 있는 부분은 0, 칸막이가 존재하는 부분은 1로 표시된다.
 * 구멍이 뚫려 있는 부분끼리 상, 하, 좌, 우로 붙여 있는 경우
 * 서로 연결되어 있는 것으로 간주한다.
 * 이때 얼음 틀의 모양이 주어졌을 때 생성되는 총 아이스크림의 개수를 구하라.
 * 
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0;
let n, m;
let graph = [];
rl.on("line", (line) => {
  if (count === 0) {
    [n, m] = line.split(' ').map((el) => parseInt(el));
  } else if (count > 0 && count <= n) {
    graph[count - 1] = line.split('').map((el) => parseInt(el));
    if (count === n) {
      rl.close();
    }
  }

  count++;
});

rl.on("close", () => {
  //모든 노드(위치)에 대하여 음료수 채우기
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // 현재 위치에서 dfs 수행
      if (dfs(i, j) === true) {
        result += 1;
      }
    }
  }

  console.log(result);
});

// dfs로 특정한 노드를 방문한 뒤에 연결된 모든 노드들도 방문
function dfs(x, y) {
  // 주어진 범위를 벗어나는 경우에는 즉시 종료
  if (x <= -1 || x >= n || y < -1 || y >= m) {
    return false;
  }

  // 현재 노드를 아직 방문하지 않았다면
  if(graph[x][y] === 0){
    // 해당 노드 방문 처리
    graph[x][y] = 1;

    // 상, 하, 좌, 우의 위치도 모두 재귀적으로 호출
    dfs(x-1, y); // 상
    dfs(x+1, y); // 하 
    dfs(x, y-1); // 좌
    dfs(x, y+1); // 우

    return true;
  }

  return false;
}