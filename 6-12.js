/**
 * <두 배열의 원소 교체> - 정렬
 * 동빈이는 두 개의 배열 A와 B를 가지고 있다.
 * 두 배열은 N개의 원소로 구성되어 있으며, 배열의 원소는 모두 자연수 이다.
 * 동빈이는 최대 K번의 바꿔치기 연산을 수행할 수 있는데, 
 * 바꿔치기 연산이란 배열 A에 있는 원소 하나와 
 * 배열 B에 있는 원소 하나를 골라서 두 원소를 서로 바꾸는 것을 말한다.
 * 동빈이의 최종 목표는 배열 A의 모든 원소의 합이 최대가 되도록 하는 것이먀,
 * 여러분은 동빈이를 도와야 한다.
 * N, K 그리고 배열 A와 B의 정보가 주어졌을 때, 최대 K번의 바꿔치기 연산을
 * 수행하여 만들 수 있는 배열 A의 모든 원소의 합의 최댓값을 출력 하시오.
 * 
 * 예를 들어 N=5, K=3이고 배열A와 B가 다음과 같다고 한다.
 * A = [ 1,2,5,4,3 ]
 * B = [ 5,5,6,6,5 ]
 * 
 * 이 경우, 다음과 같이 세 번의 연산을 수행할 수 있다.
 * 연산1) 배열 A의 원소 '1'과 배열 B의 원소 '6'을 바꾸기
 * 연산2) 배열 A의 원소 '2'와 배열 B의 원소 '6'을 바꾸기
 * 연산3) 배열 A의 원소 '3'과 배열 B의 원소 '5'를 바꾸기 
 * 
 * 첫째 줄에 n,k가 공백으로 구분되어 입력 (1 <= n <= 100,000, 0 <= K <= N)
 * 둘째 줄에 배열 A의 원소들이 공백으로 구분되어 입력.
 * 셋째 줄에 배열 B의 원소들이 공백으로 구분되어 입력.
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let count = 0;
let n, k;
let a = [];
let b = [];
rl.on("line", (line) => {
  if (count === 0) {
    [n, k] = line.trim().split(' ').map((el) => parseInt(el));
  } else if (count === 1) {
    a = line.trim().split(' ').map((el) => parseInt(el));
  } else {
    b = line.trim().split(' ').map((el) => parseInt(el));
    rl.close();
  }

  count++;
});

rl.on("close", () => {
  a.sort(); // 배열 a는 오름차순 정렬
  b.sort().reverse(); // 배열 b는 내림차순 정렬

  // 첫 번째 인덱스부터 확인하며, 두 배열의 원소를 최대 K번 비교
  for (let i = 0; i < k; i++) {
    // a의 원소가 b의 원소보다 작은 경우
    if(a[i] < b[i]){
      // 두 원소를 교체
      const tmp = a[i];
      a[i] = b[i];
      b[i] = tmp;
    } else {
      // a의 원소가 b의 원소보다 크거나 같을 때, 반복문을 탈출.
      break;
    }
  }
  const sum = a.reduce((num1,num2) => (num1+num2));
  console.log(sum);
});