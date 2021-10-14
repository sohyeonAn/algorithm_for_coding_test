/**
 * 선택 정렬
 * 가장 작은 것을 선택해서 앞으로 보냄.
 * 
 * 시간 복잡도
 * n-1번 만큼 가장 작은 수를 찾아서 맨 앞으로 보내야 한다.
 * 또한 매번 가장 작은 수를 찾기 위해서 비교 연산이 필요하다.
 * 아래와 같이 구현했을 경우 연산 횟수는
 * n + (n-1) + (n-2) + (n-2) + ... + 2 이다.
 * 따라서 근사치로 n * (n+1) / 2 번의 연산을 수행한다고 가정하자.
 * 이는 (n^2 + n) / 2로 표현할 수 있는데, 빅오 표기법으로 간단히 O(n^2) 이다.
 */

let array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 0; i < array.length; i++) {
  let min_index = i; // 가장 작은 원소의 인덱스
  for (let j = i + 1; j < array.length; j++) {
    if(array[min_index] > array[j]){
      min_index = j;
    }
  }
  const tmp = array[i];
  array[i] = array[min_index];
  array[min_index] = tmp;
}

console.log(array);