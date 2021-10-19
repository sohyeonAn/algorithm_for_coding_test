/**
 * 이진 탐색
 */

// 재귀 함수
function binary_search_recursive(array, target, start, end) {
  if (start > end) {
    return null;
  }

  const mid = parseInt((start + end) / 2);

  //찾은 경우 중간점 인덱스 반환
  if (array[mid] === target) {
    return mid;
  } else if (array[mid] > target) {
    // 중간점의 값보다 찾고자하는 값이 작은 경우 왼쪽 확인
    return binary_search_recursive(array, target, start, mid - 1);
  } else {
    // 중간점의 값보다 찾고자하는 값이 큰 경우 오른쪽 확인
    return binary_search_recursive(array, target, mid + 1, end);
  }
}

function binary_search_iterative(array, target, start, end) {
  while (start <= end) {
    mid = parseInt((start + end) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      // 중간점의 값보다 찾고자 하는 값이 작은 경우 왼쪽 확인
      end = mid - 1;
    } else {
      // 중간점의 값보다 찾고자하는 값이 큰 경우 오른쪽 확인
      start = mid + 1;
    }
  }

  return null;
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0;
let n, target;
let array = [];

rl.on("line", (line) => {
  if (count === 0) {
    [n, target] = line.trim().split(' ').map((el) => parseInt(el));
  } else {
    array = line.trim().split(' ').map(el => parseInt(el));
    rl.close();
  }
  count++;
});

rl.on("close", () => {
  // 재귀 함수를 이용하는 방법.
  const result1 = binary_search_recursive(array, target, 0, n - 1);
  if (result1) {
    console.log(result1 + 1);
  } else {
    console.log("찾는 원소가 배열 안에 존재하지 않습니다.");
  }

  // 반복문을 이용하는 방법.
  const result2 = binary_search_iterative(array, target, 0, n - 1);
  if (result2) {
    console.log(result2 + 1);
  } else {
    console.log("찾는 원소가 배열 안에 존재하지 않습니다.");
  }


});