// 모범 답안
const pairSum = (numbers, targetSum) => {
  const previousNums = {};
  for (let i = 0; i < numbers.length; i += 1) {
    const num = numbers[i];
    const complement = targetSum - num;
    if (complement in previousNums) return [i, previousNums[complement]];

    previousNums[num] = i;
  }
};

// 내 답안
// const pairSum = (numbers, targetSum) => {
//   const obj = [];
//   for (i in numbers) {
//     const diff = targetSum - numbers[i];
//     const findIndex = obj.findIndex((num) => num === diff);
//     if (findIndex > -1) {
//       return [parseInt(i), findIndex].sort();
//     } else {
//       obj.push(numbers[i]);
//     }
//   }
//   return [-1, -1];
// };
/**
 * for(i in numbers) 형식으로 루프를 실행하면 i가 문자열 타입으로 들어간다.
 * 인덱스가 필요한 문제였다면 for...in 으로 하지 않는 것이 좋겠다.
 */
