const positioningPlants = (costs, pos = 0, lastPlant = null, memo = {}) => {
  const key = pos + "," + lastPlant;
  if (key in memo) return memo[key];

  if (costs.length === pos) return 0;

  let min = Infinity;
  for (let plant = 0; plant < costs[pos].length; plant += 1) {
    if (plant !== lastPlant) {
      const candidate =
        costs[pos][plant] + positioningPlants(costs, pos + 1, plant, memo);
      min = Math.min(min, candidate);
    }
  }

  memo[key] = min;
  return min;
};

const costs = [
  [4, 3, 7],
  [6, 1, 9],
  [2, 5, 3],
];

console.log(positioningPlants(costs));
