const readline = require('readline');

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let data = [];
let count = 0; // 몇번째 라인을 입력 받는지를 저장하는 변수
rl.on("line", function (line) {
  if (count == 0){
    [n, m, k] = line.split(' ').map((el) => parseInt(el)); // 공백을 기준으로 배열에 할당하기
  }
  else if (count == 1) {
    data = line.split(' ').map((num) => parseInt(num));
    rl.close();
  }
  count++;
})

rl.on("close", function(line){
  data.sort();

  const first = data[n-1]; // 가장 큰 수
  const second = data[n-2]; // 두 번째로 큰수

  let result = 0;


  
  // // 일반적으로 답을 도출하는 방법.
  // while(true){
  //   for(let i=0; i<k; i++){ // 가장 큰 수를 k번 더하기
  //     if(m === 0){// m이 0이라면 반복문 탈출
  //       break;
  //     }
  //     result += first;
  //     m -=1; // 더할 때마다 1씩 빼기
  //   }

  //   if(m === 0) // m이 0이라면 반복문 탈출
  //     break;
  //   result +=second; // 두 번째로 큰 수를 한 번 더하기
  //   m -= 1; // 더할 때마다 1씩 빼기
  // }




  // 수열을 사용한 방법.
  // 가장 큰 수가 더해지는 횟수 계산
  count = parseInt(m / (k+1)) * k; 
  count += m % (k+1);

  result += (count) * first // 가장 큰 수 더하기
  result += (m - count) * second // 두 번째로 큰 수 더하기

  console.log(result);
});

