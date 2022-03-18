const connectedComponentsCount = (edges) => {
  const graph = buildGraph(edges);
  const visited = new Set();
  let count = 0;

  for (let node in graph) {
    if (explore(node, graph, visited) === true) {
      count += 1;
    }
  }

  return count;
};

const explore = (node, graph, visited) => {
  if (visited.has(node)) return false;
  visited.add(node);

  for (let neighbor of graph[node]) {
    explore(neighbor, graph, visited);
  }

  return true;
};

const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

console.log(connectedComponentsCount(edges));
