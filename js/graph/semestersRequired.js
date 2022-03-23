const semestersRequired = (numCourses, prereqs) => {
  const graph = buildGraph(numCourses, prereqs);
  const distance = {};

  for (let i = 0; i < numCourses; i += 1) {
    if (graph[i].length === 0) distance[i] = 1;
  }

  for (let i = 0; i < numCourses; i += 1) {
    traverseDistance(graph, i, distance);
  }

  return Math.max(...Object.values(distance));
};

const traverseDistance = (graph, node, distance) => {
  if (node in distance) return distance[node];

  let maxDistance = 0;
  for (let neighbor of graph[node]) {
    const neighborDistance = traverseDistance(graph, neighbor, distance);
    if (maxDistance < neighborDistance) maxDistance = neighborDistance;
  }

  distance[node] = maxDistance + 1;
  return distance[node];
};

const buildGraph = (numCourses, prereqs) => {
  const graph = {};
  for (let i = 0; i < numCourses; i += 1) {
    graph[i] = [];
  }

  for (let prereq of prereqs) {
    const [a, b] = prereq;
    graph[a] = b;
  }

  return graph;
};

const numCourses = 6;
const prereqs = [
  [1, 2],
  [2, 4],
  [3, 5],
  [0, 5],
];
semestersRequired(numCourses, prereqs); // -> 3
