const lines = [1721, 979, 366, 299, 675, 1456];

const solve = (target) => {
  const numbers = lines.map(Number);
  const numberSet = new Set();
  for (let number of numbers) {
    const difference = target - number;
    if (numberSet.has(difference)) {
      return number * difference;
    }
    numberSet.add(number);
  }
};

console.log(solve(2020));
