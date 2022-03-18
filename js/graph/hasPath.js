// 시작점에서 도착점으로 갈 수 있는 길이 있는 지 판단하는 함수.

const hasPathByDFS = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPathByDFS(graph, neighbor, dst) === true) {
      return true;
    }
  }

  return false;
};

const hasPathByBFS = (graph, src, dst) => {
  if (src === dst) return true;

  const queue = [src];
  while (queue.length > 0) {
    const current = queue.shift();

    if (current === dst) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
};
const graph = {
  f: ["i", "g"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

console.log(hasPathByDFS(graph, "h", "f"));
console.log(hasPathByBFS(graph, "h", "f"));
