// 숫자 카드 게임 - 그리디
const readline = require('readline');

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0; // 몇번째 라인을 입력 받는지를 저장하는 변수
let min_value;
let result = 0;
rl.on("line", function (line) {

  if (count == 0) {
    [n, m] = line.split(' ').map((el) => parseInt(el)); // 공백을 기준으로 배열에 할당하기
  } else {
    arr = line.split(' ').map((num) => parseInt(num));
    min_value = Math.min(...arr);
    result = Math.max(result, min_value);

    if (count === n)
      rl.close();
  }
  count++;
})

rl.on("close", function (line) {
  console.log(result);
});