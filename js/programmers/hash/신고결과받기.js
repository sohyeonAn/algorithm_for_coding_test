// https://programmers.co.kr/learn/courses/30/lessons/92334
// 2022 KAKAO BLIND RECRUITMENT
// level 1

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
); // [2, 1, 1, 0]

console.log(
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
); // [0, 0]

function solution(id_list, report, k) {
  var answer = new Array(id_list.length).fill(0);
  const reported = {};
  report.forEach((r) => {
    const [_ing, _ed] = r.split(" ");
    if (!(_ed in reported)) reported[_ed] = new Set();
    reported[_ed].add(_ing);
  });

  for (let name in reported) {
    if (reported[name].size >= k) {
      id_list.forEach((id, idx) => {
        if (reported[name].has(id)) answer[idx] += 1;
      });
    }
  }
  return answer;
}
