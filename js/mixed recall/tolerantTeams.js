const tolerantTeams = (rivalries) => {
  const graph = buildGraph(rivalries);
  const coloring = {};
  for (let node in graph) {
    if (!(node in coloring) && !isBipartite(graph, node, coloring, false)) {
      return false;
    }
  }

  return true;
};

const isBipartite = (graph, node, coloring, currentColor) => {
  if (node in coloring) return coloring[node] === currentColor;

  coloring[node] = currentColor;
  for (let neighbor of graph[node]) {
    if (!isBipartite(graph, neighbor, coloring, !currentColor)) return false;
  }

  return true;
};

const buildGraph = (rivalries) => {
  const graph = {};
  for (let pair of rivalries) {
    const [a, b] = pair;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

console.log(
  tolerantTeams([
    ["alex", "anj"],
    ["alex", "matt"],
    ["alex", "cindy"],
    ["anj", "matt"],
    ["brando", "matt"],
  ])
);
