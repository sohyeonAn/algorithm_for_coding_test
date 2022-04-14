// https://programmers.co.kr/learn/courses/30/lessons/42889
// level 1

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); //[3,4,2,1,5]
console.log(solution(4, [(4, 4, 4, 4, 4)])); //[4,1,2,3]

function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reachCnt = 0;
    let clearYetCnt = 0;

    stages.forEach((stage) => {
      if (stage >= i) reachCnt += 1;
      if (stage === i) clearYetCnt += 1;
    });

    result.push([i, clearYetCnt / reachCnt]);
  }

  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}
