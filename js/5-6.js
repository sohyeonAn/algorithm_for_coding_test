const INF = 999999999; // 무한의 비용 선언

// 2차원 리스트를 이용해 인접 행렬 표현
let graph = [
  [0, 7, 5],
  [7, 0, INF],
  [5, INF, 0]
];

console.log(graph);