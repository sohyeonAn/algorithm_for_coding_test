// https://programmers.co.kr/learn/courses/30/lessons/86051
// level 1

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0])); //14
console.log(solution([5, 8, 4, 0, 6, 7, 9])); // 6

function solution(numbers) {
  let sum = 0;
  for (let i = 0; i < 10; i += 1) {
    if (!numbers.includes(i)) sum += i;
  }
  return sum;
}
