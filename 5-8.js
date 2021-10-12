// DFS 메서드 정의
function dfs(graph, v, visited){
  // 현재 노드를 방문 처리
  visited[v] = true;
  console.log(v, end=' ');

  // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
  for (const node of graph[v]) {
    if(!visited[node]){
      dfs(graph, node, visited);
    }
  }
}

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

// 정의된 dfs 함수 호출
dfs(graph, 1, visited);
