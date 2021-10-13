/**
 * <미로 탈출> - 탐색
 * 동빈이는 n*m 크기의 직사각형 형태의 미로에 갇혀 있다.
 * 미로에는 여러 마리의 괴물이 있어 이를 피해 탈출해야 한다.
 * 동빈이의 위치는 (1,1)이고 미로의 출구는 (n,m)의 위치에 존재하며
 * 한 번에 한 칸씩 이동할 수 있다. 이때 괴물이 있는 부분은 0으로,
 * 괴물이 없는 부분은 1로 표시되어 있다.
 * 미로는 반드시 탈출할 수 있는 형태로 제시된다.
 * 이때 동빈이가 탈출하기 위해 움직여야 하는 최소 칸의 개수를 구하라.
 * 칸을 셀 때는 시작 칸과 마지막 칸을 모두 포함한다.
 * 
 * 첫째 줄에 정수 n,m(4 <= n,m <= 200)
 * 다음 n개의 줄에는 각각 m개의 정수(0 혹은 1)로 미로의 정보가 주어짐.
 * 각각의 수는 공백없이 붙어서 입력.
 * 시작 칸과 마지막 칸은 항상 1.
 *
 * 입력: 
 * 5 6
 * 101010
 * 111111
 * 000001
 * 111111
 * 111111
 * 
 * 결과: 10
 */

const readline = require("readline");
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
  } else if (count <= n) {
    graph[count - 1] = line.split('').map((el) => parseInt(el));
    if (count === n) {
      rl.close();
    }
  }
  count++;
});


rl.on("close", () => {
  console.log(bfs(0,0));
});

function bfs(x, y) {
  // 이동할 네 방향 정의(상, 하, 좌, 우)
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  let queue = [];
  queue.unshift({
    x: x,
    y: y
  });

  // 큐가 빌 때까지 반복
  while (queue.length > 0) {
    const top = queue.shift();
    x = top.x;
    y = top.y;

    let nx,ny;

    // 현재 위치에서 네 방향으로의 위치 확인
    for (let i = 0; i < 4; i++) {
      nx = x + dx[i];
      ny = y + dy[i];

      // 미로 찾기 공간을 벗어난 경우 무시
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
        continue;
      }

      // 벽인 경우 무시
      if (graph[nx][ny] === 0) {
        continue;
      }

      // 해당 노드를 처음 방문하는 경우에만 최단 거리 기록
      if (graph[nx][ny] === 1) {
        graph[nx][ny] = graph[x][y] + 1;
        queue.unshift({
          x: nx,
          y: ny
        });
      }
    }
  }

  return graph[n-1][m-1];
}