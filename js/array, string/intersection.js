// 모범답안
// Set은 O(1)의 Time Complexity를 가지기 때문에 적극 활용하는 것이 좋다.
const intersection = (a, b) => {
  const result = [];
  const setA = new Set(a);
  for (let item of b) {
    if (setA.has(item)) {
      result.push(item);
    }
  }
  return result;
};

// 나의 답안
// Time: O(n*m)
// Space: O(min(n, m))
/**
 * 이렇게 풀면 array 크기가 클 경우 time out이 나온다.
 */
// const intersection = (a, b) => {
//   let result = [];
//   for (let i = 0; i < a.length; i++) {
//     if (b.includes(a[i])) {
//       result.push(a[i]);
//     }
//   }
//   return result;
// };
