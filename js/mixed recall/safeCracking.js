// e = # hints
// Time: O(e)
// Space: O(e)
const safeCracking = (hints) => {
  const graph = buildGraph(hints); // e

  return topologicalOrder(graph);
};

const topologicalOrder = (graph) => {
  const numParents = {};
  // 모든 노드의 부모의 개수를 0으로 초기화한다.
  for (let node in graph) {
    // e
    numParents[node] = 0;
  }

  for (let node in graph) {
    // e
    for (let child of graph[node]) {
      // node의 child를 찾았다면
      // node는 child의 부모 이므로 child의 부모 카운트를 증가시킨다.
      numParents[child] += 1;
    }
  }

  const ready = [];
  for (let node in numParents) {
    // e
    // 부모가 없는 노드는 시작점이라고 볼 수 있다.
    if (numParents[node] === 0) ready.push(node);
  }

  let order = "";
  while (ready.length > 0) {
    // e
    const current = ready.pop();
    order += current;
    for (let child of graph[current]) {
      // 현재 탐색 중의 노드의 자식을 찾는다면
      // 그 자식이 부모 수 를 감소 시킨다.
      // 현재 부모로부터의 탐색은 종료되었다는 뜻으로 해석할 수 있을 것 같다.
      numParents[child] -= 1;

      // 부모의 수가 0이 되면 새로운 시작점이 될 수 있다.
      if (numParents[child] === 0) ready.push(child);
    }
  }

  return order;
};

const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    // 방향이 있는 그래프 이기 때문에 a->b 만 추가한다.
    graph[a].push(String(b));
  }
  return graph;
};

// [x, y] 라면 x는 항상 y보다 먼저 나타나야 한다.
// 모든 숫자를 규칙에 맞게 나타낼 수 있는 순서를 찾아라.
console.log(
  safeCracking([
    [3, 1],
    [4, 7],
    [5, 9],
    [4, 3],
    [7, 3],
    [3, 5],
    [9, 1],
  ])
);
