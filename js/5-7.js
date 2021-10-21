// 행(row)이 3개인 2차원 배열로 인접 리스트 표현
let graph = [];

// 노드 0에 연결된 노드 정보 저장(노드, 거리)
graph[0] = [];
graph[0].push({node: 1, dist: 7});
graph[0].push({node: 2, dist: 5});

// 노드 1에 연결된 노드 정보 저장
graph[1] = [];
graph[1].push({node: 0, dist: 7});

// 노드 2에 연결된 노드 정보 저장
graph[2] = [];
graph[2].push({node: 0, dist: 5});

console.log(graph);
