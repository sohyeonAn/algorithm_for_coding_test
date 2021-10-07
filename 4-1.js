/**
 * <상하좌우> - 구현
 * 
 * 여행가A는 n*n 크기의 정사각형 공간 위에 서 있다.
 * 이 공간은 1*1 크기의 정사각형으로 나눠져 있다.
 * 가장 왼쪽 위 좌표는 (1,1), 가장 오른쪽 아래 좌표는 (N,N)이다.
 * 여행가A는 상, 하, 좌, 우 방향으로 이동할 수 있고, 시작 좌표는 항상 (1,1)이다.
 * 여행가A가 이동할 계획이 적힌 계획서가 있다.
 * 계획서에는 하나의 줄에 띄어쓰기를 기준으로 L, R, U, D 중
 * 하나의 문자가 반복적으로 적혀 있다. 
 * 
 * 여행가A가 n*n 크기의 정사각형 공간을 벗어나는 움직임은 무시.
 * 계획서가 주어졌을 때 여행가A가 최종적으로 도착할 지점의 좌표를 출력.
 * 
 * 첫째 줄에 공간의 크기를 나타내는 N (1 <= N <= 100)
 * 둘째 줄에 여행가A가 이동할 계획서 내용 (1 <= 이동횟수 <= 100)
 * ex) R R R U D D ---> (3, 4)
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0;
let plans = [];
let n = 0;
rl.on("line", function (line) {
  if (count == 0)
    n = parseInt(line);
  else if (count == 1) {
    plans = line.split(' ').map((el) => el.toUpperCase());
    rl.close();
  }
  count++;
});


let [x, y] = [1, 1];
rl.on("close", function (line) {
  // 내 풀이
  // for (let i = 0; i < plans.length; i++) {
  //   switch (plans[i]) {
  //     case 'U':
  //       if (x - 1 > 1)
  //         x -= 1;
  //       break;
  //     case 'D':
  //       if (x + 1 < n)
  //         x += 1;
  //       break;
  //     case 'R':
  //       if (y + 1 < n)
  //         y += 1;
  //       break;
  //     case 'L':
  //       if (y - 1 > 0)
  //         y -= 1;
  //       break;
  //     default:
  //   }
  // }


  // 답안 풀이
  // L, R, U, D에 따른 이동방향
  // @무브타입이 추가될수록 유용한 방법인 것 같다.
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const move_types = ['L', 'R', 'U', 'D'];

  // 이동 계획을 하나씩 확인
  for (const plan of plans) {
    let nx=0, ny=0;
    // 이동 후 좌표 구하기
    for (const i in move_types) { 
      if (plan == move_types[i]) {
        nx = x + dx[i];
        ny = y + dy[i];
      }
    }

    // 공간을 벗어나는 경우 무시
    if (nx < 1 || ny < 1 || nx > n || ny > n)
      continue;

    // 이동 수행
    [x, y] = [nx, ny];
  }

  console.log(x, y);
});