/**
 * <시각> - 구현
 * 정수 N이 입력되면 00시 00분 00초부터 N시 59분 59초까지의 모든 시각 중
 * 3이 하나라도 포함되는 모든 경우의 수를 구하는 프로그램을 작성.
 * 
 * 첫째 줄에 정수 N이 입력 (0 <= N <= 23)
 */

const { strictEqual } = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let h;
rl.on("line", line => {
  h = parseInt(line);
  rl.close();
})

rl.on("close", () =>{
  let cnt = 0;
  for(let i=0; i<h+1; i++){
    for(let j=0; j<60; j++){
      for(let k=0; k<60 ; k++){
        // 매 시각 안에 '3'이 포함되어 있다면 카운트 증가
        const str = i.toString() + j.toString() + k.toString();
        if(str.includes('3')){
          cnt++;
        }
      }
    }
  }

  console.log(cnt);
});