const shortestPath = (edges, src, dst) => {
  const graph = buildGraph(edges);
  const visited = new Set([src]);
  const queue = [[src, 0]];

  while (queue.length > 0) {
    const [current, distance] = queue.shift();
    if (current === dst) return distance;
    for (let neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  return -1;
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

const edge = [
  ["w", "x"],
  ["x", "y"],
  ["y", "z"],
  ["z", "v"],
  ["v", "w"],
];

console.log(shortestPath(edge, "w", "z"));
