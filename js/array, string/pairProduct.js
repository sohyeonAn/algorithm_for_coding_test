// 모범 답안
const pairProduct = (numbers, targetProduct) => {
  const previousNums = {};
  for (let i = 0; i < numbers.length; i += 1) {
    const num = numbers[i];
    const complement = targetProduct / num;

    if (complement in previousNums) return [previousNums[complement], i];

    previousNums[num] = i;
  }
};

// 나의 답안과 모범 답안이 일치한다.
// 나의 답안
// const pairProduct = (numbers, targetProduct) => {
//   const previousNums = {};
//   for (let i = 0; i < numbers.length; i += 1) {
//     const divide = targetProduct / numbers[i];

//     if (divide in previousNums) {
//       return [previousNums[divide], i];
//     }

//     previousNums[numbers[i]] = i;
//   }
// };
