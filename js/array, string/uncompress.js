// const uncompress = (s) => {
//   const numbers = "0123456789";
//   let i = 0;
//   let j = 0;
//   let result = [];

//   while (j < s.length) {
//     const char = s[j];

//     if (numbers.includes(char)) {
//       j += 1;
//     } else {
//       const num = Number(s.slice(i, j));
//       for (let count = 0; count < num; count++) {
//         result.push(char);
//       }
//       j += 1;
//       i = j;
//     }
//   }
//   return result.join("");
// };

// 내 답안.
const uncompress = (s) => {
  if (s.length === 0) return "";
  let answer = "";
  let count = "";
  for (let i = 0; i < s.length; i++) {
    if ("0" <= s[i] && s[i] <= "9") {
      count += s[i] + "";
    } else {
      answer += s[i].repeat(parseInt(count));
      count = "";
    }
  }
  return answer;
};

let start = new Date(); // 시작
console.log(uncompress("1000d1000y"));
let end = new Date(); // 종료

console.log(end - start); // 경과시간(밀리초)
