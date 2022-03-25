const maxIncreasingSubseq = (
  numbers,
  i = 0,
  previous = -Infinity,
  memo = {}
) => {
  const key = i + "," + previous;
  if (key in memo) return memo[key];

  if (i === numbers.length) return 0;

  const current = numbers[i];
  const options = [];
  const dontTakeCurrent = maxIncreasingSubseq(numbers, i + 1, previous);
  options.push(dontTakeCurrent);

  if (current > previous) {
    const takeCurrent = 1 + maxIncreasingSubseq(numbers, i + 1, current);
    options.push(takeCurrent);
  }

  memo[key] = Math.max(...options);
  return memo[key];
};
