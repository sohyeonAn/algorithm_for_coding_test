// 모법 답안
const mostFrequentChar = (s) => {
  const count = {};

  for (let char of s) {
    if (!(char in count)) {
      count[char] = 0;
    }
    count[char] += 1;
  }

  let best = null;
  for (let char of s) {
    if (best === null || count[char] > count[best]) {
      best = char;
    }
  }
  return best;
};

// 나의 답안
// O(2n) = O(n)
// const mostFrequentChar = (s) => {
//   const count = {};
//   for(let i = 0 ; i < s.length ; i++){
//     if(!(s[i] in count)) count[s[i]] = 0;
//     count[s[i]] += 1;
//   }

//   let max = 0;
//   let result = '';
//   for(let key in count){
//     if(count[key] > max){
//       max = count[key];
//       result = key;
//     }
//   }
//   return result;
// };
