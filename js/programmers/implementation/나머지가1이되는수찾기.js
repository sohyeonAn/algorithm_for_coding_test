// https://programmers.co.kr/learn/courses/30/lessons/87389
// level 1

console.log(solution(10)); //3
console.log(solution(12)); // 11
function solution(n, x = 1) {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}
