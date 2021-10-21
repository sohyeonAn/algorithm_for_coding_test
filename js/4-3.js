/**
 * <왕실의 나이트> - 구현
 * 왕실 정원은 체스판과 같은 8*8 좌표 평면.
 * 왕실 정원의 특정한 한 칸에 나이트가 서 있음.
 * 나이트는 L자 형태로만 이동할 수 있으며 정원 밖으로 나갈 수 없음.
 * 나이트는 특정한 위치에서 다음과 같은 2가지 경우로 이동 가능.
 * 1. 수평으로 두 칸 이동한 뒤에 수직으로 한 칸 이동
 * 2. 수직으로 두 칸 이동한 뒤에 수평으로 한 칸 이동
 * 
 * 좌표 평면상에서 나이트의 위치가 주어졌을 때
 * 나이트가 이동할 수 있는 경우의 수를 출력하는 프로그램 작성.
 * 행 위치는 1~8로 표현하며, 열 위치는 a~h로 표현함.
 * 
 * 첫째 줄에 현재 나이트가 위치한 곳의 좌표를 나타내는 문자열이 입력. (ex. a1)
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let row, col;
rl.on("line", (line) => {
  row = parseInt(line[1]);
  col = line.charCodeAt(0) - 'a'.charCodeAt(0) + 1; // charCodeAt:= ascii코드로 해당하는 숫자 리턴.
  rl.close();
});

let result = 0;
const vertical_steps = [-1, -1, 1, 1, -2, -2, 2, 2];
const horizontal_steps = [-2, 2, -2, 2, -1, 1, -1, 1];
rl.on("close", () => {
  for (let i=0; i< vertical_steps.length ; i++) {
    // 이동하고자 하는 위치 확인
    const next_row = row + horizontal_steps[i];
    const next_col = col + vertical_steps[i];

    // 해당 위치로 이동이 가능하다면 카운트 증가
    if(next_row >= 1 && next_row <= 8 && next_col >=1 && next_col <=8)
      result += 1;
  }

  console.log(result);
});