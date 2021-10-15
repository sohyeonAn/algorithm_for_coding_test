/**
 * <성적이 낮은 순서로 학생 출력하기> - 정렬
 * n명의 학생 정보가 있다. 
 * 학생 정보는 학생의 이름과 학생의 성적으로 구분된다.
 * 각 학생의 이름과 성적 정보가 주어졌을 때,
 * 성적이 낮은 순서대로 학생의 이름을 출력하는 프로그램을 작성하시오.
 * 
 * 첫째 줄에 학생의 수 n이 입력 (1 <= n <= 100,000)
 * 둘째 줄부터 n+1번째 줄에는 학생의 이름을 나타내는 문자열 A와 
 * 학생의 성적을 나타내는 정수 B가 공백으로 구분.
 * 문자열 A의 길이와 학생의 성적은 100 이하의 자연수.
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let count = 0;
let n;
let array = [];
rl.on("line", (line) => {
  if (count === 0) {
    n = parseInt(line.trim());
  } else if (count > 0) {
    // n개의 정수를 입력받아 리스트에 저장.
    const name = line.split(' ')[0];
    const score = line.split(' ')[1];

    array.push({name: name, score: score});

    if (count === n) {
      rl.close();
    }
  }

  count++;
});

rl.on("close", () => {
  let result;

  result = array.sort(function (a,b){
    return a.score - b.score; // 내림차순
  });

  console.log(result);
});
