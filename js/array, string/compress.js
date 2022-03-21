// 모범답안
const compress = (s) => {
  let i = 0;
  let j = 0;
  let result = "";
  while (j <= s.length) {
    if (s[i] !== s[j]) {
      result += (j - i === 1 ? "" : j - i) + s[i];
      i = j;
    }

    j++;
  }

  // result += (j - i === 1 ? "" : j - i) + s[i];
  // while(j <= s.length) 로 대체.
  // s[s.length] === undefined 이므로 if문 안으로 들어갈 수 있다.
  return result;
};

// 나의 답안
// const compress = (s) => {
//   let preChar = s[0];
//   let count = 1;
//   let result = "";
//   for (let i = 1; i < s.length; i++) {
//     if (preChar === s[i]) {
//       count += 1;
//     } else {
//       if (count === 1) {
//         result += preChar;
//       } else {
//         result += count + preChar;
//       }
//       count = 1;
//     }
//     preChar = s[i];
//   }
//   if (count === 1) {
//     result += preChar;
//   } else {
//     result += count + preChar;
//   }
//   return result;
// };
