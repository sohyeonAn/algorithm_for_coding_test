// https://programmers.co.kr/learn/courses/30/lessons/42840
// level 1

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1,2,3]

function solution(answers) {
  // answers: 1번문제부터 마지막 문제까지의 정답
  // return: 가장 많은 문제를 맞힌 사람을 배열로
  const answer = [];
  const tester = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const score = [0, 0, 0];
  answers.forEach((answer, idx) => {
    if (tester[0][idx % tester[0].length] === answer) score[0] += 1;
    if (tester[1][idx % tester[1].length] === answer) score[1] += 1;
    if (tester[2][idx % tester[2].length] === answer) score[2] += 1;
  });

  const max = Math.max(...score);
  score.forEach((s, idx) => {
    if (max === s) answer.push(idx + 1);
  });

  return answer;
}
