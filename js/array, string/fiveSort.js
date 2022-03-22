// 모범답안
// Time: O(n)
// Space: O(1)
const fiveSort = (nums) => {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if (nums[j] === 5) {
      j -= 1;
    } else if (nums[i] === 5) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap을 이렇게 할 수 있다니!
      i += 1;
    } else {
      i += 1;
    }
  }

  return nums;
};

// 나의 답안
// const fiveSort = (nums) => {
//   let p1 = 0;
//   let p2 = nums.length - 1;

//   while (p1 <= p2) {
//     if (nums[p2] === 5) {
//       p2 -= 1;
//       continue;
//     }
//     if (nums[p1] === 5) {
//       const tmp = nums[p1];
//       nums[p1] = nums[p2];
//       nums[p2] = tmp;
//       p2 -= 1;
//     }
//     p1 += 1;
//   }
//   return nums;
// };
