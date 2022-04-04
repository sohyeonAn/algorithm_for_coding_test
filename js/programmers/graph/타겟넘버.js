// https://programmers.co.kr/learn/courses/30/lessons/43165
// level 2

console.log(solution([1, 1, 1, 1, 1], 3)); // 5
solution([4, 1, 2, 1], 4); // 2

function solution(numbers, target) {
  let answer = 0;
  explore(0, 0);

  function explore(idx, sum) {
    if (idx < numbers.length) {
      explore(idx + 1, sum + numbers[idx]);
      explore(idx + 1, sum - numbers[idx]);
    } else {
      if (sum === target) {
        answer += 1;
      }
    }
  }

  return answer;
}
