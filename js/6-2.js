/**
 * 삽입 정렬
 * 정렬되어 있는 데이터 리스트에서 적절한 위치를 찾은 뒤에, 그 위치에 삽입.
 * 
 * 시간 복잡도
 * 반복문이 2번 중첩되어 사용되었기 때문에 시간 복잡도는 O(n^2)이다.
 * 현재 리스트읟 데이터가 거의 정렬되어 있는 상태라면 매우 빠르게 동작한다.
 * 최선의 경우O(n)의 시간 복잡도를 가진다. 
 */

let array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 1; i < array.length; i++) {
  for (let j = i; j > 0; j--) { // 인덱스 i부터 1까지 감소하며 반복
    if (array[j] < array[j - 1]) { // 한 칸씩 왼쪽으로 이동
      const tmp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = tmp;
    } else { // 자기보다 작은 데이터를 만나면 그 위치에서 멈춤
      break;
    }
  }
}

console.log(array);