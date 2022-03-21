const lines = [1721, 979, 366, 299, 675, 1456];

const solve = (target) => {
  const numbers = lines.map(Number);
  const pairSums = {};

  // O(n^2)
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const num1 = numbers[i];
      const num2 = numbers[j];
      const sum = num1 + num2;
      pairSums[sum] = [num1, num2];
    }
  }

  // O(n)
  for (let num of numbers) {
    const diff = target - num;
    if (diff in pairSums) {
      const [numB, numC] = pairSums[diff];
      return numB * numC * num;
    }
  }
};
// O(n^2 + n) = O(n^2)

console.log(solve(2020));
