/**
 * 큐 구현
 */

let queue = [];

// 삽입(5) - 삽입(2) - 삽입(3) - 삽입(7) - 삭제() - 삽입(1) - 삽입(4) - 삭제()
queue.unshift(5); // 배열의 가장 처음에 요소 삽입
queue.unshift(2);
queue.unshift(3);
queue.unshift(7);
queue.shift(); // 배열의 첫 번째 요소를 삭제
queue.unshift(1);
queue.unshift(4);
queue.shift();

console.log("queue", queue); // 먼저 들어온 순서대로 출력
console.log("queue", queue.reverse()); // 역순으로 출력