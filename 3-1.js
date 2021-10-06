// 거스름돈 - 그리디
let n = 1260; // 남은 돈
let count = 0;

// 큰 단위의 화폐부터 차례대로 확인
const coin_types = [500, 100, 50, 10];

for (const coin of coin_types) {
  count += parseInt(n / coin); // 해당 화폐로 거슬러 줄 수 있는 동전의 개수
  n = parseInt(n % coin); // 해당 화폐를 최대로 거슬러 주고 남은 돈
}

console.log(count);