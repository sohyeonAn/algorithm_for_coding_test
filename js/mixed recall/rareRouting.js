const rareRouting = (n, roads) => {
  const graph = makeGraph(n, roads);
  const visited = new Set();
  const valid = validate(graph, 0, visited, null);
  return valid && visited.size === n;
};

const validate = (graph, node, visited, previousNode) => {
  if (visited.has(node)) return false;

  visited.add(node);

  for (let neighbor of graph[node]) {
    if (neighbor !== previousNode) {
      if (!validate(graph, neighbor, visited, node)) {
        return false;
      }
    }
  }

  return true;
};

const makeGraph = (n, roads) => {
  const graph = {};
  for (let city = 0; city < n; city += 1) {
    graph[city] = [];
  }

  for (let road of roads) {
    const [a, b] = road;
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

// console.log(
//   rareRouting(4, [
//     [0, 1],
//     [0, 2],
//     [0, 3],
//     [3, 2],
//   ])
// );

console.log(
  rareRouting(6, [
    [1, 2],
    [5, 4],
    [3, 0],
    [0, 1],
    [0, 4],
  ])
);
