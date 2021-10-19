/**
 * 순차 탐색
 */

function sequential_search(n, target, array) {
  // 각 원소를 하나씩 확인하며
  for (let i = 0; i < n; i++) {
    // 현재의 원소가 찾고자 하는 원소와 동일한 경우
    if (array[i] === target) {
      return i + 1; // 현재의 위치 반환(인덱스는 0부터 시작하므로 1더하기)
    }
  }
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0;
let n, target;
let array = [];

rl.on("line", (line) => {
  //console.log("생성할 원소 개수를 입력한 다음 한 칸 띄고 찾을 문자열을 입력하세요.")
  if (count === 0) {
    [n, target] = line.trim().split(' ').map((el) => el);
  } else {
    //console.log("앞서 적은 원수 개수만큼 문자열을 입력하세요. 구분은 띄어쓰기 한 칸으로 합니다.");
    array = line.trim().split(' ');
    rl.close();
  }
  count++;
});

rl.on("close", () => {
  console.log(sequential_search(n, target, array));
});