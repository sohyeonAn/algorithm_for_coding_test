/**
 * <떡볶이 떡 만들기> - 이진 탐색(파라메트릭 서치)
 * 오늘 동빈이는 여행 가신 부모님을 대신해서 떡집 일을 하기로 했다.
 * 오늘은 떡볶이 떡을 만드는 날이다.
 * 동빈이네 떡볶이 떡은 재밌게도 떡볶이 떡의 길이가 일정하지 않다.
 * 대신에 한 봉지 안에 들어가는 떡의 총 길이는 절단기로 잘라서 맞춰준다.
 * 절단기에 높이(H)를 지정하면 줄지어진 떡을 한 번에 절단한다.
 * 높이가 H보다 긴 떡은 H 위의 부분이 잘릴 것이고, 낮은 떡은 잘리지 않는다.
 * 
 * 손님이 왔을 때 요청한 총 길이가 M일때 적어도 M만큼의 떡을 얻기 위해
 * 절단기에 설정할 수 있는 높이의 최댓값을 구하라.
 * 
 * 예를 들어 높이가 19, 14, 10, 17cm인 떡이 나란히 있고 절단기 높이를 15cm로 지정하면
 * 자른 뒤 떡의 높이는 15, 14, 10, 15cm가 될 것이다.
 * 잘린 떡의 길이는 차례대로 4, 0, 0, 2cm이다.
 * 손님은 6cm만큼의 길이를 가져간다.
 * 
 * 첫째 줄에 떡의 개수 N(1<=N<=1,000,000)와 요청한 떡의 길이 M(1<=m<=2,000,000,000)
 * 둘째 줄에는 떡의 개별 높이가 주어진다. 
 * 높이는 10억보다 작거나 같은 양의 정수 또는 0 이다.
 * 떡 높이의 총합은 항상 M 이상이므로, 손님은 필요한 양만큼 떡을 사갈 수 있다.
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0;
let n, m;
let array = [];
let x = []; // 손님이 요청한 부품 번호

rl.on("line", (line) => {
  if (count === 0) {
    [n, m] = line.trim().split(' ').map(el => parseInt(el));
  } else {
    // 각 떡의 개별 높이 정보
    array = line.trim().split(' ').map((el) => parseInt(el));
    rl.close();
  }
  count++;
});

rl.on("close", () => {
  let start = 0;
  let end = Math.max(...array);
  let result;

  // 이진 탐색 수행
  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    let total = 0;

    array.forEach(x => {
      // 잘랐을 때 떡의 양 계산
      if (x > mid) {
        total += x - mid;
      }
    });

    if (total < m) {
      // 떡의 양이 부족한 경우 더 많이 자르기
      end = mid - 1;
    } else {
      // 떡이 양이 충분한 경우 덜 자르기
      result = mid; // 최대한 덜 잘랐을 때가 정답이므로, 여기에서 result 기록
      start = mid + 1;
    }
  }
  console.log(result);
});