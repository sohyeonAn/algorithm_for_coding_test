/**
 * 스택 구현
 */

let stack = [];

// 삽입(5) - 삽입(2) - 삽입(3) - 삽입(7) - 삭제() - 삽입(1) - 삽입(4) - 삭제()
stack.push(5); // 요소를 마지막에 추가
stack.push(2);
stack.push(3);
stack.push(7);
stack.pop(); // 가장 마지막 요소 삭제
stack.push(1);
stack.push(4);
stack.pop();

console.log(stack); // [ 5, 2, 3, 1 ]
console.log(stack.reverse()); // [ 1, 3, 2, 5 ] : 순서를 반전 시킴