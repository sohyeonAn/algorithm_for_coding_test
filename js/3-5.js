/**
 * <1일 될때까지> - 그리디
 * 
 * 어떠한 수 N이 1이 될 때까지 다음의 두 과정 중 하나를 반복적으로 선택하여 수행.
 * 단, 두 번째 연산은 N이 K로 나누어떨어질 때만 선택 가능.
 * 
 * 1. N에서 1을 뺀다.
 * 2. N을 K로 나눈다.
 * 
 * 예를 들어 N이 17, K가 4라면, 1번의 과정을 한 번 수행하면 N은 16이다.
 * 이후 2번의 과정을 두번 수행하면 N은 1이 된다. 
 * 결과적으로 이 경우 전체 과정을 실행한 횟수는 3 이다. (N을 1로 만드는 '최소 횟수')
 * 
 * N과 K가 주어질 때 N이 1이 될 때까지 1번 혹은 2번의 과정을 수행해야 하는 최소 횟수를 구하여라.
 * 
 * 첫째 줄에 N(2 <= N <= 100,000)과 K(2 <= K <= 100,000)가 공백으로 구분되며 각각은 자연수.
 * 이때 N은 항상 K보다 크거나 같다.
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on("line", function (line) {
  [n, k] = line.split(' ').map((el) => parseInt(el));
  rl.close();
})

rl.on("close", function (line) {
  let result = 0;

  // 일반적인 풀이
  // while (n > 1) {
  //   if (n % k > 0) {
  //     // 나누어 떨어지지 않는 경우 -1 수행.
  //     n -= 1;
  //     result += 1;
  //   } else {
  //     // 나누어 떨어지는 경우.
  //     n /= k;
  //     result += 1;
  //   }
  // }

  // 빠른풀이
  // k로 나누어떨어질 수 있는 경우가 몇 번 나올 수 있는지 먼저 계산하고 1을 한번에 빼는 방법.
  while (true) {
    // (N == K로 나누어떨어지는 수)가 될 때까지 1씩 빼기
    let target = parseInt(n / k) * k; // 나누어 떨어질 때 그 수.
    result += (n - target); // 나누어 떨어지는 수가 될 때까지 1씩 빼야되는 횟수.
    n = target

    console.log(target, result, n);

    // N이 K보다 작을 때(더 이상 나눌 수 없을 때) 반복문 탈출
    if (n < k)
      break;

    // K로 나누기
    result += 1;
    n = parseInt(n / k);
    console.log(target, result, n);
  }

  // 마지막으로 남은 수에 대하여 1씩 빼기
  result += (n - 1);
  console.log(result);

});