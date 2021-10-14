/**
 * 퀵 정렬
 * 기준을 설정한 다음 큰 수와 작은 수를 교환한 후 리스트를 반으로 나누는 방식.
 * 
 * 시간 복잡도: O(nlogn)
 * 리스트의 가장 왼쪽 데이터를 피벗으로 삼을 때, 
 * 이미 데이터가 정렬되어 있는 경우에는 매우 느리게 동작한다.
 */

let array = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8];

function quick_sort(array, start, end) {
  if (start >= end) { // 원소가 1개인 경우 종료
    return;
  }

  const pivot = start; // 피벗은 첫 번째 원소
  let left = start + 1;
  let right = end;

  while (left <= right) {
    // 피벗보다 큰 데이터를 찾을 때까지 반복
    while (left <= end && array[left] <= array[pivot]) {
      left += 1;
    }
    
    // 피벗보다 작은 데이터를 찾을 때까지 반복
    while (right > start && array[right] >= array[pivot]) {
      right -= 1;
    }
    
    if (left > right) { // 엇갈렸다면 작은 데이터와 피벗을 교체
      const tmp = array[pivot];
      array[pivot] = array[right];
      array[right] = tmp;
    } else { // 엇갈리지 않았다면 작은 데이터와 큰 데이터를 교체
      const tmp = array[left];
      array[left] = array[right];
      array[right] = tmp;
    }
  }

  // 분할 이후 왼쪽 부분과 오른쪽 부분에서 각각 정렬 수행
  quick_sort(array, start, right - 1);
  quick_sort(array, right + 1, end);
}

quick_sort(array, 0, array.length - 1);
console.log(array);