// bfs 메서드 정의
function bfs(graph, start, visited) {
  let queue = [start];

  // 현재 노드를 방문 처리
  visited[start] = true;

  // 큐가 빌 때까지 반복
  while(queue.length){
    // 큐에서 하나의 원소를 뽑아 출력
    const v = queue.shift();
    console.log(v);

    // 해당 원소와 연결된, 아직 방문하지 않은 원소들을 큐에 삽입
    for (const node of graph[v]) {
      if(!visited[node]){
        queue.push(node); // 숫자가 낮은 순서대로 꺼내져야 하기 때문에 큐의 바닥에 가장 작은 수가 위치하게 한다.
        visited[node] = true;
      }
    }
  }
}

// 각 노드가 연결된 정보를 배열로 2차원 배열로 표현
const graph = [
  [],
  [2,3,8],
  [1,7],
  [1,4,5],
  [3,5],
  [3,4],
  [7],
  [2,6,8],
  [1,7]
];

// 각 노드가 방문된 정보를 배열로 표현
let visited = new Array(9).fill(false);

// 정의된 bfs 함수 호출
bfs(graph, 1, visited);