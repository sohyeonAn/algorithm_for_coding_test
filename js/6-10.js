/**
 * <위에서 아래로> - 정렬
 * 
 * 하나의 수열에는 다양한 수가 존재한다. 
 * 이러한 수는 크기에 상관없이 나열되어 있다.
 * 이 수를 큰 수부터 작은 수의 순서로 정렬해야 한다.
 * 수열을 내림차순으로 정렬하는 프로그램을 만들어라.
 * 
 * 첫째 줄에 수열에 속해 있는 수의 개수 n (1 <= n <= 500)
 * 둘째 줄부터 n+1 번째 줄까지 n개의 수가 입력.
 * 수의 범위는 1이상 100,000 이하 자연수.
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let count = 0;
let n;
let array = []; 
rl.on("line", (line) => {
  if(count === 0){
    n = parseInt(line.trim());
  } else if(count > 0){
    // n개의 정수를 입력받아 리스트에 저장.
    array[count-1] = parseInt(line.trim());

    if(count === n){
      rl.close();
    }
  }

  count++;
});

rl.on("close", () => {
  console.log(array.sort().reverse());
});