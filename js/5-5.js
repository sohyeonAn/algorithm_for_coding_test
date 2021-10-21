/**
 * 팩토리얼 구현
 * 3! = 1 * 2 * 3
 * 1! = 1, 0! = 1
 */

// 반복문으로 구현한 n!
function factorial_iterative(n) {
  result = 1;

  // 1부터 n까지의 수를 차례대로 곱하기
  for (let i = 1; i < n + 1; i++) {
    result *= i;
  }

  return result;
}


// 재귀적으로 구현한 n!
function factorial_recursive(n) {
  if(n<=1){ // n이 1이하인 경우 1을 반환
    return 1;
  }else{
    return n * factorial_recursive(n-1);
  }
}


console.log("반복적으로 구현:", factorial_iterative(5));
console.log("재귀적으로 구현:", factorial_recursive(5));


/**
 * 반복문 대신 재귀 함수를 사용했을 때 장점은?
 * 재귀함수는 점화식을 사용하기 때문에 더 간결하다.
 * 
 * 점화식: 특정한 함수를 자신보다 더 작은 변수에 대한 함수와의 관계로 표현한 것.
 */