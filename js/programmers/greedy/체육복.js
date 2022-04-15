console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2

function solution(n, lost, reserve) {
  var answer = 0;
  let students = new Array(n + 1).fill(1);
  students[0] = 0;
  lost.forEach((no) => (students[no] -= 1));
  reserve.forEach((no) => (students[no] += 1));

  for (let i = 1; i <= n; i += 1) {
    if (students[i] === 0) {
      if (students[i - 1] > 1) {
        students[i - 1] -= 1;
        students[i] += 1;
      } else if (students[i + 1] > 1) {
        students[i + 1] -= 1;
        students[i] += 1;
      }
    }
  }

  answer = students.filter((s) => s > 0).length;
  return answer;
}
